import "./MyClasses.css";
import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import getCurrentUser from "./../../utils/getCurrentUser";
import { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Divider from '@material-ui/core/Divider';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { DataGrid } from '@material-ui/data-grid';

const MyClasses = () => {  
    const user = getCurrentUser();
    const columns = [
        { field: 'id', headerName: 'Username', width: 200 },
        { field: 'Score', headerName: 'Score', width: 130 },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
        },
      ];
      
      const row_data = [
        { id: 'Jon', Score: '23.0'},
        { id: 'Cersei', Score: '22.0'},
        { id: 'Jaime', Score: '33.0'},
        { id: 'Arya', Score: '45.0'},
        { id: 'Daenerys', Score: '10.5'},
        { id: 'Daenerysa', Score: '1.0'},
      ];

      const [rows, setRows] = useState(row_data);
      var [deletedRows, setDeletedRows] = useState([]);



      const handleRowSelection = (e) => {
          if (e.isSelected) {
              setDeletedRows([...deletedRows, ...rows.filter((r) => r.id === e.data.id)]);
          } else {
              //console.log(deletedRows.values().next());
              for (var i = 0; i < deletedRows.length; i++) {
                  if (e.data.id == deletedRows[i].id) {
                      deletedRows.splice(i, 1);
                      break;
                  }
              }
          }
          console.log(deletedRows);
      };

      const setDeleteAll = () => {

      }

      const handleRowSelection1 = (e) => {
          if (e.field == "__check__") {
            console.log(deletedRows);
              if (deletedRows.length == 0) {
                //for (var i = 0; i < rows.length; i++){}
                deletedRows = rows.slice(0);
                  //setDeletedRows([...deletedRows, ...rows]);
                  console.log(deletedRows);
              } else {
                  deletedRows.splice(0, deletedRows.length);
                  console.log("d2");
              }
              console.log(deletedRows);
            }
      };

      const handlePurge = () => {
        console.log(deletedRows);
        setRows(
          rows.filter((r) => deletedRows.filter((sr) => sr.id === r.id).length < 1)
        );
      };

        function handleClick() {
            rows.map (rows in DataGrid.SelectedRows)
            {
                isDelete();
                DataGrid.Rows.RemoveAt(rows.Index);
            }
          console.log('The link was clicked.');
        }
        function isDelete()
        {
          return window.confirm("Do you want to delete this row ?");
        }

return (
    <Fragment>
        <p>
            <Typography variant="h4" align="center" color="secondary" style={{ fontWeight: 90, fontFamily: 'EBit' }}>Welcome, {user.userName}</Typography>
        </p>
        <div class = 'table' style={{ height: 400, width: '80%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection onRowSelected={handleRowSelection} onColumnHeaderClick={handleRowSelection1}/>
        </div>
        <button onClick={handlePurge}>
            Delete rows
        </button>
    </Fragment>
);
};

export default MyClasses;
