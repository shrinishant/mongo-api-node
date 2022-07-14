const express = require("express");
const { getBills, getBill, addBill, updateBill, deleteBill } = require("../controllers/billController");

const app = express();

app.get("/bills", getBills);
app.get("/bill/:id", getBill);

app.post("/addBill", addBill);
app.put("/bill/:id", updateBill);
app.delete("/bill/:id", deleteBill);

module.exports = app;