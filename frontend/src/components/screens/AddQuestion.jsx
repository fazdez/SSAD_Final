import React from "react";
import { TextField, MenuItem, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const axios = require("axios").default;
const apiURL = "http://localhost:3001/api/questions";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
const AddQuestion = () => {
  const classes = useStyles();
  const [question, setQuestion] = React.useState({
    Title: "",
    Solution: 1,
    A: "",
    B: "",
    C: "",
    D: "",
    level: 1,
    world: 1,
  });
  const onSave = async () => {
    axios.post(apiURL, question).then(() => {
      window.location.reload();
    });
  };
  const handleChange = (e) => {
    let questions_dup = { ...question };
    if (
      e.target.name === "Solution" ||
      e.target.name === "level" ||
      e.target.name === "world"
    ) {
      questions_dup[e.target.name] = e.target.value;
    } else {
      questions_dup[e.target.id] = e.target.value;
    }

    setQuestion(questions_dup);
  };
  return (
    <div
      style={{ margin: "100px", border: "1px solid black", padding: "10px" }}
    >
      <form className={classes.root}>
        <TextField
          required={true}
          id="Title"
          label="Question"
          placeholder="Hello World"
          variant="filled"
          multiline
          value={question.question}
          onChange={handleChange}
        />
        <TextField
          required
          id="A"
          label="Option 1"
          variant="filled"
          multiline
          value={question.A}
          onChange={handleChange}
        />
        <TextField
          required
          id="B"
          label="Option 2"
          variant="filled"
          multiline
          value={question.B}
          onChange={handleChange}
        />
        <TextField
          required
          id="C"
          label="Option 3"
          variant="filled"
          multiline
          value={question.C}
          onChange={handleChange}
        />
        <TextField
          required
          id="D"
          label="Option 4"
          variant="filled"
          multiline
          value={question.D}
          onChange={handleChange}
        />
        <TextField
          name="Solution"
          select
          value={question.Solution}
          onChange={handleChange}
          helperText="Which option is the correct answer?"
        >
          {["A", "B", "C", "D"].map((option) => (
            <MenuItem key={option} value={option} name="Solution">
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          name="level"
          select
          value={question.level}
          onChange={handleChange}
          helperText="Which level does this belong to?"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => (
            <MenuItem key={option} value={option} name="level">
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          name="world"
          select
          value={question.world}
          onChange={handleChange}
          helperText="Which world does this belong to?"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => (
            <MenuItem key={option} value={option} name="world">
              {option}
            </MenuItem>
          ))}
        </TextField>
      </form>
      <Button
        style={{ marginTop: "10px" }}
        variant="contained"
        color="secondary"
        onClick={onSave}
      >
        SAVE QUESTION
      </Button>
    </div>
  );
};

export default AddQuestion;
