const Bill = require("../models/billModel")


// getAllBills
const getBills = async (req, res) => {
    const bills = await Bill.find();

    res.status(200).json({
        bills
    })
}


// add Bill
const addBill = async (req, res) => {
    const bill = await Bill.create(req.body);

    res.status(201).json({
        success: true,
        bill
    })
}


// update Bill
const updateBill = async (req, res) => {
    let bill = await Bill.findById(req.params.id);

    bill = await Bill.findByIdAndUpdate(req.params.id, req.body, {new: true,
        useFindAndModify: true,
        runValidators: true
    })

    res.status(200).json({
        bill
    })
}


// delete Bill
const deleteBill = async (req, res) => {
    let bill = await Bill.findById(req.params.id);

    await bill.remove();

    res.status(200).json({
        success: true,
        message: "Bill has been deleted Successfully"
    })
}

module.exports = {getBills, addBill, updateBill, deleteBill};