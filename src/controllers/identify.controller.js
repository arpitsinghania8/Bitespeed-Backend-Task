const {
  placeOrderService
} = require('../services/identify.service')

async function placeOrder(req, res) {
  try {
    const {email, phoneNumber} = req.body;
    if(!email && !phoneNumber){
      res.status(406).send("email or phoneNumber is required");
      return
    }
    console.log('params got', {email, phoneNumber});
    const respData = await placeOrderService({email, phoneNumber});
    res.status(200).json(respData);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

module.exports = {
    placeOrder
}
