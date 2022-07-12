const express = require("express");
const { getBills, addBill, updateBill, deleteBill } = require("../controllers/billController");

const app = express();

app.get("/bills", getBills);
app.post("/add_bill", addBill);
app.put("/bill/:id", updateBill);
app.delete("/bill/:id", deleteBill);

module.exports = app;