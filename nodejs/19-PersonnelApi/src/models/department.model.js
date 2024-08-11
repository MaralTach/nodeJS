"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");

/* ------------------------------------------------------- */
const DepartmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,   //validate yapmaz 
    },
  },
  { collection: "departments", timestamps: true }, //tabloda hangi isimle gorunecek,timestamps created updates
);

module.exports = mongoose.model("Department", DepartmentSchema);
// const DepartmentModel = mongoose.model("Department", DepartmentSchema)  // export etmenin bir yontemi

