const { PRECEDENCE } = require("../constants/default.constants");
const { getAllContactsFromQuery, createContactEntry } = require("../models/contact-model")

async function placeOrderService({email, phoneNumber}) {
    const retObj = {}
    const userContactsQuery = {
        phoneNumber,
        email
    };
    const userContacts = await getAllContactsFromQuery(userContactsQuery);
    if(userContacts.length == 0){
        const timeNow = new Date();
        const newUserContactData = {
            phoneNumber,
            email,
            linkPrecedence: PRECEDENCE.PRIMARY,
            createdAt: timeNow,
            updatedAt: timeNow
        };
        const newUserContact = await createContactEntry(newUserContactData);
        retObj.contact = {
            primaryContatctId: newUserContact.id,
            emails: [newUserContact.email],
            phoneNumbers: [newUserContact.phoneNumber],
            secondaryContactIds: []
        }
    }
    else{
        console.log("Place Holder");
    }

    return retObj
}

module.exports = {
    placeOrderService
}