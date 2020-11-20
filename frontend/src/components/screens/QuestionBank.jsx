import React from "react";
import isAuth from "../../utils/isAuth";
import { Redirect } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import AddQuestion from "./AddQuestion";

const headers = [
  { field: "Title", width: 400, headerName: "Questions" },
  { field: "Solution", headerName: "answer" },
  {
    field: "A",
    width: 200,
  },
  {
    field: "B",
    width: 200,
  },
  {
    field: "C",
    width: 200,
  },
  {
    field: "D",
    width: 200,
  },
  { field: "level" },
  { field: "world" },
  { field: "_id", hide: true },
];
const divQuestionBankOptions = {
  margin: "50px 100px",
  width: "80%",
  height: "400px",
};
const axios = require("axios").default;
const apiURL = "http://localhost:3001/api/questions";

const QuestionBank = () => {
  const isAuthenticated = isAuth();
  const history = useHistory();

  let [rows, setRows] = React.useState([]);
  const [selections, setSelection] = React.useState([]);

  const onDelete = async () => {
    selections.forEach((selection) => {
      axios.delete(apiURL + "/" + selection._id).then((res) => {
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
    <React.Fragment>
      <div style={divQuestionBankOptions}>
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
          onClick={onDelete}
        >
          DELETE
        </Button>
        <Button
          style={{ marginTop: "10px", marginLeft: "50px" }}
          variant="contained"
          color="primary"
          onClick={() => {
            history.goBack();
          }}
        >
          BACK
        </Button>
      </div>
      <AddQuestion />
    </React.Fragment>
  );
};

export default QuestionBank;
