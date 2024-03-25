const Inquiry = require("../../../models/inquiryModel")

async function readById(req,res){
    const inquiryId=req.query.userId

    const inquiryList= await Inquiry.find({userId:inquiryId}).select('-products._id')

    return res.json(inquiryList)
}

module.exports=readById