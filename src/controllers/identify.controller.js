const {
  placeOrderService
} = require('../services/identify.service')

async function placeOrder(req, res) {
  try {
    const body = req.body;
    console.log('request body', body);
    const respData = await placeOrderService(body);
    res.status(200).json(respData);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

module.exports = {
    placeOrder
}
