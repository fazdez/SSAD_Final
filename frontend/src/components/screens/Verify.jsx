import React from "react";
import isAuth from "../../utils/isAuth";
import { Redirect } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const headers = [
  { field: "fullName", width: 200, headerName: "Full Name" },
  { field: "isTeacher" },
  { field: "email", headerName: "Email Address", width: 200 },
  { field: "phoneNumber", headerName: "Contact Information", width: 200 },
];
const divAdminOptions = {
  margin: "50px 100px",
  width: "80%",
  height: "400px",
};
const axios = require("axios").default;
const apiURL = "http://localhost:3001/api/users/verified";

const Verify = () => {
  const isAuthenticated = isAuth();
  const history = useHistory();

  let [rows, setRows] = React.useState([]);
  const [selections, setSelection] = React.useState([]);

  const onSave = async () => {
    selections.forEach((selection) => {
      console.log(selection);
      axios.put(apiURL, selection).then((res) => {
        console.log(res);
      });
    });
    window.location.reload();
  };

  React.useEffect(() => {
    axios.get(apiURL).then((response) => {
      const { data } = response;
      data.forEach((res, index) => {
        res.id = index + 1;
      });
      setRows(data);
    });
  }, []);

  return !isAuthenticated ? (
    <React.Fragment>
      <Redirect to="/home" />
    </React.Fragment>
  ) : (
    <div style={divAdminOptions}>
      <DataGrid
        columns={headers}
        rows={rows}
        showColumnRightBorder
        checkboxSelection
        onSelectionChange={(newSelection) => {
          setSelection(newSelection.rows);
        }}
        autoHeight
        pageSize={5}
      />
      <Button
        style={{ marginTop: "10px" }}
        variant="contained"
        color="secondary"
        onClick={onSave}
      >
        VERIFY
      </Button>
      <Button
        style={{ marginTop: "10px", marginLeft: "50px" }}
        variant="contained"
        color="primary"
        onClick={() => {
          history.push("/admin");
        }}
      >
        Back
      </Button>
    </div>
  );
};

export default Verify;
