
//Fetch Coupon Data
module.exports.CouponGET = {
    couponCode: global.expressJoi.Joi.string().required()
}

//Save Order Data
module.exports.OrderPost = {
    name: global.expressJoi.Joi.string().required(),
    address: global.expressJoi.Joi.object().required(),
    phoneNo: global.expressJoi.Joi.string().required(),
    orderDetails: global.expressJoi.Joi.object().required()
}

