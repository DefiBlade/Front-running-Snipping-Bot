import React, { useState, useEffect } from "react";
import { Button, FormControl} from "react-bootstrap";
import "./Display.css";
import { MDBDataTable } from "mdbreact";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import CONFIG from "./constant/config";
import {
  startSnipping,
  stopSnipping,
  getSnippingStatus,
  listSnipping,
} from "./api";

const Snipping = () => {
  const client = new W3CWebSocket("ws://127.0.0.1:8080/connect");

  var transactionItems = [];

  const [isRunning, setIsRunning] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [tokenAddress, setTokenAddress] = useState("");
  const [nodeUrl, setNodeUrl] = useState("");
  const [inAmount, setInAmount] = useState("");
  const [slippage, setSlippage] = useState("");
  const [gasPrice, setGasPrice] = useState("");
  const [gasLimit, setGasLimit] = useState("");
  const [transactions, setTransactions] = useState([]);

  var rows = transactions.map((item) => {
    item.transaction = (
      <a
        href={CONFIG.EXPLORER + item.transaction}
        target="_blank"
      >
        {item.transaction}
      </a>
    );

    return item;
  });

  const data = {
    columns: [
      {
        label: "TimeStamp",
        field: "timestamp",
      },

      {
        label: "Token",
        field: "token",
      },
      {
        label: "Buy/Sell",
        field: "action",
      },
      {
        label: "Price",
        field: "price",
      },

      {
        label: "Transaction",
        field: "transaction",
      },
    ],
    rows: rows,
  };

  const start = () => {
    if (
      nodeUrl == "" ||
      walletAddress == "" ||
      privateKey == "" ||
      tokenAddress == "" ||
      inAmount == "" ||
      slippage == "" ||
      gasPrice == "" ||
      gasLimit == ""
    ) {
      alert("please input all information to start the snipping !");
    } else {
      setIsRunning(true);
      startSnipping(
        nodeUrl,
        walletAddress,
        privateKey,
        tokenAddress,
        inAmount,
        slippage,
        gasPrice,
        gasLimit
      );
    }
  };

  const stop = () => {
    setIsRunning(false);
    stopSnipping();
  };

  const loadSetting = (status) => {
    setWalletAddress(status.wallet);
    setPrivateKey(status.key);
    setNodeUrl(status.node);
    setTokenAddress(status.token);
    setInAmount(status.amount);
    setSlippage(status.slippage);
    setGasPrice(status.gasprice);
    setGasLimit(status.gaslimit);
  };

  const setStatus = async () => {
    var curStatus = await getSnippingStatus();
    loadSetting(curStatus);
    if (curStatus.status === "1") setIsRunning(true);
    else setIsRunning(false);
  };

  const listTransactions = async () => {
    console.log("listTransactions");
    transactionItems = await listSnipping();
    setTransactions(transactionItems);
    console.log(transactions);
  };

  useEffect(() => {
    setStatus();
    listTransactions();
    client.onopen = () => {
      console.log("WebSocket Client Connected");
    };
    client.onmessage = (message) => {
      if (message.data.includes('snipping')) listTransactions();
      if (message.data.includes('setting')) {
        setStatus();
        listTransactions();
      }
    };
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="form-group">
            <label htmlFor="usr">Wallet Address:</label>
            <FormControl
              type="text"
              id="walletAddr"
              value={walletAddress}
              onChange={(e) => {
                setWalletAddress(e.target.value);
              }}
              className="form-control form-control-md"
            />
          </div>
          <div className="form-group">
            <label htmlFor="tokenAddress">Token Address:</label>
            <FormControl
              type="text"
              id="tokenAddress"
              value={tokenAddress}
              onChange={(e) => {
                setTokenAddress(e.target.value);
              }}
              size="md"
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="form-group">
            <label htmlFor="pwd">Private Key:</label>
            <FormControl
              type="password"
              id="privateKey"
              value={privateKey}
              onChange={(e) => {
                setPrivateKey(e.target.value);
              }}
              className="form-control form-control-md"
            />
          </div>
          <div className="form-group">
            <label htmlFor="wssURL">Quick Node WSS URL:</label>
            <FormControl
              type="text"
              id="nodeUrl"
              value={nodeUrl}
              onChange={(e) => {
                setNodeUrl(e.target.value);
              }}
              className="form-control form-control-md"
            />
          </div>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="pwd">BNB Amount:</label>
        <input
          type="number"
          id="inAmount"
          className="short-input"
          value={inAmount}
          onChange={(e) => {
            setInAmount(e.target.value);
          }}
        />
        <label htmlFor="pwd">Slippage(%):</label>
        <input
          type="number"
          id="slippage"
          className="short-input"
          value={slippage}
          onChange={(e) => {
            setSlippage(e.target.value);
          }}
        />
        <label htmlFor="pwd">Gas Price:</label>
        <input
          type="number"
          id="gasPrice"
          className="short-input"
          value={gasPrice}
          onChange={(e) => {
            setGasPrice(e.target.value);
          }}
        />
        <label htmlFor="pwd">Gas Limit:</label>
        <input
          type="number"
          id="gasLimit"
          className="short-input"
          value={gasLimit}
          onChange={(e) => {
            setGasLimit(e.target.value);
          }}
        />
        <Button
          variant={isRunning ? "danger" : "primary"}
          id="button-addon2"
          onClick={isRunning ? () => stop() : () => start()}
        >
          {isRunning ? "Stop Snipping" : "Start Snipping"}
        </Button>
      </div>

      <MDBDataTable hover data={data} />
    </div>
  );
};

export default Snipping;
