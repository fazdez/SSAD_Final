import React, { Fragment } from "react";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { Redirect } from "react-router-dom";

const axios = require("axios").default;
// const apiURL = "http://localhost:3001/api/users/me";

export default function Home() {
  let user_dup = { userName: null };

  try {
    let data = localStorage.getItem("data");
    data = JSON.parse(data);
    const jwt = data.token;
    user_dup = jwtDecode(jwt);
    axios.defaults.headers.common["x-token"] = data.token;
  } catch (err) {}

  const user = user_dup.userName;

  useEffect(() => {
    try {
    } catch (ex) {}
  }, [user]);

  return (
    <Fragment>
      {user == null ? <Redirect to="/login" /> : <div></div>}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <iframe
          title="maingame"
          style={{ width: "50%", height: "500px", margin: "50px" }}
          src="./finalExport8/index.html"
        ></iframe>
      </div>
    </Fragment>
  );
}
