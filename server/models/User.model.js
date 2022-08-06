const { Schema, model } = require("mongoose")

const userSchema = new Schema(
  {
    name: {
      type: String,
      require: true
    },

    username: {
      type: String,
      require: true
    },

    age: {
      type: Number,
      require: true
    },
    email: {
      type: String,
      require: true
    },
    password: {
      type: String,
      require: true
    }
  },
  {
    timestamps: true,
  }
)

const User = model("User", userSchema)

module.exports = User
