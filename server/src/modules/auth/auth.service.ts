import { hash, compare, hashSync, compareSync } from "bcrypt";
import { userModel } from "src/models/models";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
class AuthService {
  private generateAccessToken(userid: string): string {
    return jwt.sign({ userid }, process.env.JWT_SECRET, {
      expiresIn: "15h",
    });
  }

  verifyToken(token: string) {
    return jwt.verify(token, process.env.JWT_SECRET);
  }

  async getUser(token: string) {
    try {
      const userid: any = this.verifyToken(token);
      console.log("GET USER userid :>> ", userid);
      const user = await userModel.findById(
        {
          _id: new mongoose.Types.ObjectId(userid.userid),
        },
        { password: false }
      );
      return user.toJSON();
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  async signup(name: string, email: string, password: string) {
    const hashedPassword = this.hashPassword(password);
    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    console.log("user :>> ", user);
    const token = this.generateAccessToken(user._id.toString());
    console.log(
      "🚀 ~ file: auth.service.ts ~ line 20 ~ AuthService ~ signup ~ token",
      token
    );

    return this.generateAccessToken(user._id.toString());
  }

  async login(email: string, password: string) {
    const user = await userModel.findOne({ email });
    if (!user) {
      return null;
    }
    console.log("LOGIN :>> ", user);
    const isPasswordValid = this.comparePassword(password, user.password);
    if (!isPasswordValid) {
      return null;
    }
    return this.generateAccessToken(user._id.toString());
  }

  hashPassword(password: string): string {
    return hashSync(password, 10);
  }
  comparePassword(password: string, hash: string): boolean {
    return compareSync(password, hash);
  }
}

const authService = new AuthService();
export default authService;
