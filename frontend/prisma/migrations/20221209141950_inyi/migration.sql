-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "email" TEXT NOT NULL,
    "avatar" TEXT,
    "password" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "resetToken" TEXT,
    "address" TEXT,
    "facebook" TEXT,
    "phone" TEXT
);

-- CreateTable
CREATE TABLE "Checkin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "checkinImage" TEXT,
    "checkinLongitude" TEXT,
    "checkinLatitude" TEXT,
    "userId" INTEGER,
    CONSTRAINT "Checkin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
