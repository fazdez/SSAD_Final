const mongoose = require("mongoose");
const Joi = require("joi");
const { boolean } = require("joi");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const config = require("config");
const PlayerData = require("../models/playerData");

const validate = function (user) {
  const schema = Joi.object({
    userName: Joi.string()
      .min(2)
      .max(12)
      .alphanum()
      .required()
      .error((errors) => {
        errors.forEach((err) => {
          switch (err.code) {
            case "string.alphanum":
              err.message = {
                userName: "Username must only contain alphanumeric characters.",
              };
              break;
            case "string.max":
              err.message = {
                userName:
                  "Username must have at least 2 character and at most 12 characters.",
              };
              break;
            default:
              err.message = {
                userName: "Invalid username",
              };
              break;
          }
        });
        return errors;
      }),
    fullName: Joi.string()
      .min(5)
      .pattern(/^[a-zA-Z ]+$/)
      .required()
      .error((errors) => {
        errors.forEach((err) => {
          switch (err.code) {
            case "string.pattern.base":
              err.message = {
                fullName: "No special characters or numbers is allowed.",
              };
              break;
            default:
              err.message = {
                fullName:
                  "Invalid name. Ensure that the length is at least 5 characters.",
              };
              break;
          }
        });
        return errors;
      }),
    password: Joi.string()
      .alphanum()
      .required()
      .min(8)
      .error((errors) => {
        errors.forEach((err) => {
          switch (err.code) {
            case "string.alphanum":
              err.message = {
                password: "Password can only contain alphanumeric characters.",
              };
              break;
            case "string.min":
              err.message = {
                password: "Password must be at least 8 characters long.",
              };
              break;
            default:
              err.message = {
                password: "Invalid password.",
              };
              break;
          }
        });
        return errors;
      }),
    repeatPassword: Joi.ref("password"),
    phoneNumber: Joi.number()
      .min(80000000)
      .max(99999999)
      .error((errors) => {
        errors.forEach((err) => {
          switch (err.code) {
            default:
              err.message = {
                phoneNumber: "Invalid Singapore number",
              };
              break;
          }
        });
        return errors;
      }),
    isAdmin: Joi.bool().optional(),
    email: Joi.string()
      .email()
      .pattern(/.*(ntu\.edu\.sg).*/)
      .required()
      .error((errors) => {
        errors.forEach((err) => {
          switch (err.code) {
            case "string.pattern.base":
              err.message = {
                email: "Please input a valid NTU email address.",
              };
              break;
            default:
              err.message = {
                email: "Please input a valid NTU email address.",
              };
              break;
          }
        });
        return errors;
      }),
    isTeacher: Joi.bool().optional(),
    verified: Joi.bool().optional(),
  }).with("password", "repeatPassword");

  return schema.validate(user, { abortEarly: false });
};

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  userName: {
    type: String,
    required: true,
    unique: true,
    minlength: 1,
    maxlength: 12,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: Number,
  isTeacher: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  score: [
    {
      _id: false,
      levels: [Number],
      worldID: Number,
      time: [Number],
    },
  ],
  group: { type: Number, default: -1 },
});

userSchema.methods.setScore = async function (world, level, score, time) {
  let pointer = null;
  if (this.score === null) this.score = [];
  for (let i = 0; i < this.score.length; i++) {
    if (this.score[i].worldID === world) {
      pointer = i;
    }
  }

  if (pointer === null) {
    this.score.push({
      worldID: world,
      levels: [],
      time: [],
    });
    this.score[this.score.length - 1].levels[level - 1] = score;
    this.score[this.score.length - 1].time[level - 1] = time;
  } else {
    if (
      level - 1 < this.score[pointer].levels.length &&
      this.score[pointer].levels[level - 1] > score
    ) {
      return false;
    }
    this.score[pointer].levels.set(level - 1, score);
    this.score[pointer].time.set(level - 1, time);
  }
  await this.save();
  return true;
};

userSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    _.pick(this, ["userName", "isTeacher", "isAdmin"]),
    config.get("jwtPrivateKey")
  );
};

userSchema.methods.getSavedState = async function () {
  let savedData = await PlayerData.findOne({ user: this._id });
  if (!savedData) {
    savedData = await this.initializeSavedState();
  }
  return _.pick(savedData, ["savedState", "currentCharacterSprite"]);
};

userSchema.methods.initializeSavedState = async function () {
  const data = await PlayerData.create({
    user: this._id,
  });
  return _.pick(data, ["savedState", "currentCharacterSprite"]);
};

userSchema.methods.isCompleted = function () {
  if (!this.score) return false;
  else if (this.score.length < 3) return false;
  else if (this.score[2].length < 3) return false;
  else return true;
};

const User = mongoose.model("User", userSchema);

module.exports = { User, validate };
