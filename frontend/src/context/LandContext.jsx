import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { landcontractABI, landcontractAddress } from "../utils/constants";

export const LandContext = React.createContext();

const { ethereum } = window;

const LandProvider = ({ children }) => {
  const [formData, setformData] = useState({
    landId: "",
    location: "",
    area: "",
    dimensionOfLand: "",
    landIdentificationNumber: "",
    transferAmount: "",
    status: "",
    landType: "",
  });
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [LandCount, setLandCount] = useState(localStorage.getItem("LandCount"));
  const [transactions, setTransactions] = useState([]);

  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const getUserLandsfunc = async (tempAddress) => {
    console.log("in checkIfWalletIsConnect Connected:", tempAddress);
    try {
      if (ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const landContract = new ethers.Contract(
          landcontractAddress,
          landcontractABI,
          signer
        );

        const availableLands = await landContract.getUserVehicles(tempAddress);
        const structuredTransactions = availableLands.map((transaction) => ({
          landId: transaction.landId,
          location: transaction.location,
          area: transaction.area,
          dimensionOfLand: transaction.dimensionOfLand,
          landIdentificationNumber: transaction.landIdentificationNumber,
          transferAmount: transaction.status,
          status: transaction.landType,
          landType: transaction.transferAmount,
          prevOwner: transaction.prevOwner,
          currentOwner: transaction.currentOwner,
        }));

        console.log(structuredTransactions);
        console.log("In get All Transaction");
        setTransactions(structuredTransactions);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        getUserLandsfunc(accounts[0]);
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfLandExists = async () => {
    try {
      if (ethereum) {
        // const landContract = createEthereumContract();
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const landContract = new ethers.Contract(
          landcontractAddress,
          landcontractABI,
          signer
        );
        console.log(landContract);
        console.log("In Check Transaction");
        const currentLandCount = await landContract.getLandCount();

        window.localStorage.setItem("LandCount", currentLandCount);
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };

  const addLandToBlockchain = async (formData) => {
    try {
      if (window.ethereum) {
        const {
          landId,
          location,
          area,
          dimensionOfLand,
          landIdentificationNumber,
          transferAmount,
          status,
          landType,
        } = formData;

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const landContract = new ethers.Contract(
          landcontractAddress,
          landcontractABI,
          signer
        );
        const transactionHash = await landContract.registerLand(
          location,
          area,
          dimensionOfLand,
          landIdentificationNumber,
          landType
        );
        setIsLoading(true);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        console.log(`Success - ${transactionHash.hash}`);
        setIsLoading(false);

        // landContract
        //   .getLandCount()
        //   .then((count) => {
        //     console.log("Vehicle Count:", count);
        //   })
        //   .catch((error) => {
        //     console.error("Error fetching vehicle count:", error);
        //   });

        // console.log("after LandCount_ : ");

        // setLandCount(parseInt(LandCount_, 10));
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnect();
    checkIfLandExists();
  }, [LandCount]);

  return (
    <LandContext.Provider
      value={{
        currentAccount,
        LandCount,
        connectWallet,
        transactions,
        isLoading,
        addLandToBlockchain,
        handleChange,
        formData,
        checkIfWalletIsConnect,
      }}
    >
      {children}
    </LandContext.Provider>
  );
};
export default LandProvider;
