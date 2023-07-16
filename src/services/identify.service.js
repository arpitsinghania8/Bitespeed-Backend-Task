async function placeOrderService(body) {
    const email = body?.email;
    const phone = body?.phone;

    return {
        email,
        phone
    }
}

module.exports = {
    placeOrderService
}