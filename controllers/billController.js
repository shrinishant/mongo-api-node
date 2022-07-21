const Bill = require("../models/billModel")


// getAllBills
const getBills = async (req, res) => {

    const sort = req.query.sort || 'asc';
    // hardcoding this to 9 for now
    const limit = 9;
    const page = parseInt(req.query.page) - 1 || 0;

    let sortOrder = 1;
    if(sort == "desc"){
        sortOrder = -1;
    }

    let totalBills;
    Bill.countDocuments({}, function (err, count) {
        if (err){
            console.log(err)
        }else{
            totalBills = count;
        }
    });

    const bills = await Bill.find()
    .sort({"amount": sortOrder})
    .skip(page * limit)
    .limit(limit);

    res.status(200).json({
        bills,
        totalBills
    })
}

// get particular Bill
const getBill = async (req, res) => {
    const bill = await Bill.findById(req.params.id);

    res.status(200).json({
        bill
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

module.exports = {getBills, getBill, addBill, updateBill, deleteBill};