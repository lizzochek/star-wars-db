// https://swapi.dev

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const getResource = async (url) => {
  const res = await fetch(url);

  //Server errors
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, received ${res.status}`);
  }

  const body = await res.json();
  return body;
};

getResource("https://swapi.dev/api/people/1/")
  .then((body) => {
    console.log(body);
  })
  .catch((err) => {
    console.error(err);
  });
