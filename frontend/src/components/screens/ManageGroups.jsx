import React from "react";
import isAuth from "../../utils/isAuth";
import { Redirect } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { Button, Tab, Tabs, Select, InputLabel } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const headers = [
  { field: "fullName", headerName: "Full Name", width: 350 },
  { field: "email", headerName: "Email Address", width: 350 },
  {
    field: "phoneNumber",
    headerName: "Handphone Number",
    width: 200,
  },
  { field: "_id", hide: true },
];

const divAdminOptions = {
  margin: "50px 100px",
  width: "80%",
  height: "400px",
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const axios = require("axios").default;
const apiURL = "http://localhost:3001/api/groups";

const ManageGroups = () => {
  const isAuthenticated = isAuth();
  const history = useHistory();
  const [groups, setGroups] = React.useState([
    {
      groupID: 1,
      students: [
        {
          _id: 1,
          student: {
            fullName: "Faz",
            email: "abc@xyz.com",
            phoneNumber: "81234567",
          },
        },
      ],
    },
    {
      groupID: 2,
      students: [
        {
          _id: 1,
          student: {
            fullName: "Faz",
            email: "abc@xyz.com",
            phoneNumber: "81234567",
          },
        },
      ],
    },
    {
      groupID: 3,
      students: [
        {
          _id: 1,
          student: {
            fullName: "Faz",
            email: "abc@xyz.com",
            phoneNumber: "81234567",
          },
        },
      ],
    },
  ]);
  const [groupless, setGroupless] = React.useState([
    {
      _id: 1,
      id: 1,
      fullName: "Heung-Min",
      userName: "testuser21",
      email: "test@e.ntu.edu.sg",
    },
    {
      _id: 1,
      id: 2,
      fullName: "Reece",
      userName: "testuser22",
      email: "test@e.ntu.edu.sg",
    },
    {
      _id: 1,
      id: 3,
      fullName: "Chillwell",
      userName: "testuser23",
      email: "test@e.ntu.edu.sg",
    },
  ]);
  const [selections, setSelection] = React.useState([]);
  const [selections2, setSelection2] = React.useState([]);
  const [edit, setEdit] = React.useState(false);
  const [teacher, setTeacher] = React.useState([
    { fullName: "Bapak Lu", id: 1 },
  ]);
  const [teacherValue, setvalueTeacher] = React.useState("");
  const [value, setValue] = React.useState(0);
  const [error, setError] = React.useState({ open: false, message: "" });

  const onSave = async () => {
    selections.forEach((selection) => {
      axios.delete(apiURL + `/${selection._id}/${value}`).then((res) => {
        console.log(res);
      });
      //   axios.put(apiURL, selection).then((res) => {
      //     console.log(res);
      //   });
    });
    window.location.reload();
  };

  const onUpdate = async () => {
    const toSend = [];
    selections2.forEach((selection) => {
      toSend.push(selection.userName);
    });
    axios
      .post(apiURL + `/${value}/addStudent`, {
        userName: toSend,
      })
      .then((res) => {
        console.log(res);
      });
    window.location.reload();
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTeacherChange = (e) => {
    setvalueTeacher(e.target.value);
  };

  const handleSave = (e) => {
    axios
      .post(apiURL + `/${value}/setTeacher`, { id: teacherValue })
      .then((res) => {
        console.log(res);
        window.location.reload();
      });
  };

  const addGroup = () => {
    axios.post("http://localhost:3001/api/groups/create").then(() => {
      window.location.reload();
    });
  };

  const deleteGroup = () => {
    axios
      .delete("http://localhost:3001/api/groups/" + value)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        const newError = { ...error };
        newError.open = true;
        newError.message = err.response.data;
        setError(newError);
      });
  };

  React.useEffect(() => {
    Promise.all([
      axios.get(apiURL),
      axios.get(apiURL + `/groupless`),
      axios.get("http://localhost:3001/api/users/teachers"),
    ]).then((val) => {
      let data = val[0].data;
      const data2 = val[1].data;
      const data3 = val[2].data;
      const newTeachers = [];
      data = data.sort((a, b) => {
        return a.groupID - b.groupID;
      });
      data3.forEach((data) => {
        if (data.group == -1) {
          newTeachers.push({ fullName: data.fullName, id: data._id });
        }
        console.log(newTeachers);
      });
      data2.forEach((data, index) => {
        data.id = index;
      });
      setGroups(data);
      setTeacher(newTeachers);
      setGroupless(data2);
    });
  }, []);

  return !isAuthenticated ? (
    <React.Fragment>
      <Redirect to="/home" />
    </React.Fragment>
  ) : (
    <div style={divAdminOptions}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        {groups.map((group, index) => {
          return (
            <Tab
              label={`Group ${group.groupID + 1}`}
              {...a11yProps(index)}
              key={index}
            />
          );
        })}
      </Tabs>
      {groups.map((group, index) => {
        group.students.forEach((s, index) => {
          s.id = index + 1;
          s.fullName = s.student.fullName;
          s.email = s.student.email;
          s.phoneNumber = s.student.phoneNumber;
          s._id = s.student._id;
        });
        return (
          <TabPanel value={value} index={index} key={index}>
            Managed by professor: <br></br>
            {!edit ? (
              groups[value].teacher ? (
                `${groups[value].teacher.fullName}`
              ) : (
                `<no teacher assigned>`
              )
            ) : (
              <div>
                <InputLabel htmlFor="age-native-simple">Age</InputLabel>
                <Select
                  native
                  value={teacherValue}
                  onChange={handleTeacherChange}
                  inputProps={{
                    name: "age",
                    id: "age-native-simple",
                  }}
                >
                  <option aria-label="None" value="" />
                  {teacher.map((t) => {
                    return (
                      <option value={t.id} key={t.id}>
                        {t.fullName}
                      </option>
                    );
                  })}
                </Select>
              </div>
            )}
            <Button
              variant="contained"
              style={{
                marginLeft: "10px",
                marginBottom: "10px",
                fontSize: "10px",
              }}
              onClick={() => {
                setEdit(!edit);
              }}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              style={{
                marginLeft: "10px",
                marginBottom: "10px",
                fontSize: "10px",
                backgroundColor: "red",
              }}
              disabled={!edit}
              onClick={handleSave}
            >
              Save
            </Button>
            <DataGrid
              columns={headers}
              rows={group.students}
              showColumnRightBorder
              checkboxSelection
              onSelectionChange={(newSelection) => {
                setSelection(newSelection.rows);
              }}
              autoHeight
              pageSize={5}
            />
          </TabPanel>
        );
      })}

      <Button
        style={{ marginTop: "10px", marginBottom: "20px" }}
        variant="contained"
        color="secondary"
        onClick={onSave}
      >
        Delete from group
      </Button>
      <Button
        style={{ marginTop: "10px", marginLeft: "50px", marginBottom: "20px" }}
        variant="contained"
        color="primary"
        onClick={() => {
          history.push("/admin");
        }}
      >
        Back
      </Button>
      <DataGrid
        columns={[
          { field: "fullName", headerName: "Full Name", width: 350 },
          { field: "email", headerName: "Email Address", width: 350 },
          {
            field: "phoneNumber",
            headerName: "Handphone Number",
            width: 200,
          },
          { field: "_id", hide: true },
          { field: "userName", hide: true },
        ]}
        rows={groupless}
        showColumnRightBorder
        checkboxSelection
        onSelectionChange={(newSelection) => {
          setSelection2(newSelection.rows);
        }}
        autoHeight
        pageSize={5}
      />
      <Button
        style={{ marginTop: "10px", marginLeft: "50px", marginBottom: "20px" }}
        variant="contained"
        color="primary"
        onClick={onUpdate}
      >
        Add Student(s) into Group {`${value + 1}`}
      </Button>
      <Button
        onClick={deleteGroup}
        style={{ marginTop: "10px", marginLeft: "50px", marginBottom: "20px" }}
        variant="contained"
        color="primary"
      >
        Delete Group {`${value + 1}`}
      </Button>
      <Button
        onClick={addGroup}
        style={{ marginTop: "10px", marginLeft: "50px", marginBottom: "20px" }}
        variant="contained"
        color="primary"
      >
        Add New Group
      </Button>

      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={error.open}
        autoHideDuration={6000}
        onClose={() => {
          const newError = { ...error };
          newError.open = false;
          setError(newError);
        }}
        message={error.message}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={() => {
                const newError = { ...error };
                newError.open = false;
                setError(newError);
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
};

export default ManageGroups;
