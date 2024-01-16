import React, { useState, useEffect } from "react";
import { Button, FormControl } from "react-bootstrap";
import "./Label.css";
import {
  resetSnippingAPI,
  initSnippingAPI,
  resetFrontAPI,
  initFrontAPI,
  resetAllAPI
} from "./api";

const Setting = () => {
  const resetSnipping = () => {
    resetSnippingAPI();
  };

  const resetFront = () => {
    resetFrontAPI();
  };

  const initSnipping = () => {
    initSnippingAPI();
  };

  const initFront = () => {
    initFrontAPI();
  };

  const resetAll = () => {
    resetAllAPI();
  };


  return (
    <div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="form-group">
            <Button variant="danger" className="setting-btn" onClick={() => resetSnipping()}>
              ResetSnipping
            </Button>
            <label htmlFor="usr" className="setting-label">
              {" "}
              &nbsp;&nbsp;Reset the snipping information such as wallet, key,
              node, gas, etc.
            </label>
          </div>
          <div className="form-group">
            <Button variant="danger" className="setting-btn" onClick={() => initSnipping()}>
              ClearSnipping
            </Button>
            <label htmlFor="usr" className="setting-label">
              {" "}
              &nbsp;&nbsp;Clear the Snipping transaction history.
            </label>
          </div>
          <div className="form-group">
            <Button variant="danger" className="setting-btn" onClick={() => resetFront()}>
              ResetFront
            </Button>
            <label htmlFor="usr" className="setting-label">
              {" "}
              &nbsp;&nbsp;Reset the front running information such as wallet, key,
              node, gas, etc.
            </label>
          </div>
          <div className="form-group">
            <Button variant="danger" className="setting-btn" onClick={() => initFront()}>
              ClearFront
            </Button>
            <label htmlFor="usr" className="setting-label">
              {" "}
              &nbsp;&nbsp;Clear the Front running transaction history.
            </label>
          </div>
          <div className="form-group">
            <Button variant="danger" className="setting-btn" onClick={() => resetAll()}>
              InitAll
            </Button>
            <label htmlFor="usr" className="setting-label">
              {" "}
              &nbsp;&nbsp;Init All data
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
