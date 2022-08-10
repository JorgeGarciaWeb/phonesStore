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
    },
    avatar: {
      type: String,
      default: "https://static2.elnortedecastilla.es/www/pre2017/multimedia/noticias/201501/12/media/cortadas/facebook-profile-picture-no-pic-avatar--575x323.jpg" 
    }
  },
  {
    timestamps: true,
  }
)

const User = model("User", userSchema)

module.exports = User
