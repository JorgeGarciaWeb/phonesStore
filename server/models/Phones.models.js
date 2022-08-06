const { Schema, model } = require("mongoose")

const userSchema = new Schema(
    {
        name: {
            type: String,
            require: true
        },
        manufacturer: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        color: {
            type: String,
            require: true
        },
        price: {
            type: Number,
            require: true
        },
        imageFileName: {
            type: String,
            require: true
        },
        screen: {
            type: String,
            require: true
        },
        processor: {
            type: String,
            require: true
        },
        ram : {
            type: String,
            requiere: true
        }
    },
    {
      timestamps: true,
    }
)


const Phones = model("Phone", userSchema)

module.export = Phones