import { useCallback, useState } from "react";
import getWeb3 from "src/utils/getWeb3";
import { Button, Grid } from "@web3uikit/core";
import { NFT } from "@web3uikit/web3";
import TableListEmployee from "./table-list-employee";
import { useMoralis } from "react-moralis";

const HomePage = () => {
  const [account, setAccount] = useState<string>();
  const handleConnectWallet = useCallback(() => {
    const connect = async () => {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      if (accounts.length > 0) {
        const account = accounts[0];
        setAccount(account);
      } else {
        console.log("Account not found");
      }
    };
    connect();
  }, []);
  return (
    <div className="max-w-[1240px] mx-auto pt-[50px]">
      <div className="mb-[20px]">
        {!account && (
          <Button
            onClick={handleConnectWallet}
            text="Connect wallet"
            theme="primary"
          />
        )}
        {account && (
          <p>hello {account}</p>
        )}
      </div>
      < Grid
        alignItems="flex-start"
        justifyContent="flex-end"
        spacing={12}
        style={{
          height: '400px'
        }}
        type="container"
      >
        <Grid {...{
          lg: 10,
          md: 10,
          sm: 6,
          type: "item",
          xs: 12
        }}>
          <TableListEmployee />
        </Grid>
        <Grid {...{
          lg: 2,
          md: 2,
          sm: 6,
          type: "item",
          xs: 12
        }}>
          <div>
            <div className="mb-[20px]">
              <NFT
                address="0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"
                chain="eth"
                fetchMetadata
                tokenId="1"
              />
            </div>
            <div>
              <Button
                onClick={() => { }}
                text="Kết thúc ngay"
                theme="primary"
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;