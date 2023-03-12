const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ticketSchema = new Schema({
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  assignee: {
    type: String,
  },
  labels: {
    type: Array
  }
});

module.exports = model("Ticket", ticketSchema)