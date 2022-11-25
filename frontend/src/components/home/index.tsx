import { Button, Col, Row } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useConnectContractEmployee, useGetUser, useHandleFetchUserData, useSetInfo } from "src/hook";
import getWeb3 from "src/utils/getWeb3";
import NFTCard from "./nft";
import TableListEmployee from "./table-list-employee";

const HomePage = () => {
  const setUser = useSetInfo();
  const getUser = useHandleFetchUserData();
  const user = useGetUser();
  useEffect(() => {
    const handleGetUser = async () => {
      const userFetch = await getUser()
      // console.log("userFetch: ", userFetch);
    }
    handleGetUser()
  }, [getUser, user])
  const handleConnectWallet = useCallback(() => {
    const connect = async () => {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      if (accounts.length > 0) {
        const account = accounts[0];
        setUser(account);
      } else {
        console.log("Account not found");
      }
    };
    connect();
  }, []);
  return (
    <div className="max-w-[1240px] mx-auto pt-[50px]">
      <div className="mb-[20px]">
        {!user && (
          <Button
            onClick={handleConnectWallet}
            type="primary"
          >
            Connect wallet
          </Button>
        )}
        {user && (
          <p>hello {user}</p>
        )}
      </div>
      <Row gutter={[{ sm: 12, md: 24 }, { sm: 12, md: 24 }]}>
        <Col {...{
          lg: 18,
          md: 18,
          sm: 24,
          xs: 24
        }}>
          <TableListEmployee />
        </Col>
        <Col {...{
          lg: 6,
          md: 6,
          sm: 24,
          xs: 24
        }}>
          <div>
            <div className="mb-[20px]">
              <NFTCard />
            </div>
            <div>
              <Button
                onClick={() => { }}
                type="primary"
              >
                Kết thúc ngay
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;