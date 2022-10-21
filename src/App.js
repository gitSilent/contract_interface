import React from "react";
import { Route, Router, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import AuthorizationWindow from "./AuthorizationWindow";
import UserAccount from "./UserAccount";
import abi from "./abi";
import Web3 from "web3";
import { useDispatch, useSelector } from "react-redux";

function App() {
  let contractAddress, web3, contractInstance;

  const dispatch = useDispatch();
  const [accounts_arr, setAccountsArr] = React.useState([]);

  contractAddress = "0x2Db6e76abA9E94e3188A6d384aC805c804E098c9";
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  console.log(web3);
  contractInstance = new web3.eth.Contract(abi, contractAddress);

  dispatch({ type: "SET_CONTRACT_ADDRESS", payload: contractAddress });

  React.useEffect(() => {
    web3.eth.getAccounts().then((val) => {
      setAccountsArr(val);
      dispatch({ type: "SET_USERS_ARR", payload: val });
    });
  }, []);

  //https://stackoverflow.com/questions/34735580/how-to-do-a-redirect-to-another-route-with-react-router
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <AuthorizationWindow
                contractAddress={contractAddress}
                web3={web3}
                contractInstance={contractInstance}
                accounts_arr={accounts_arr}
              />
            }
          />
          <Route path="/account" element={<UserAccount />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
