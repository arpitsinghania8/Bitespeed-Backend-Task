const { Op } = require("sequelize");
const { PRECEDENCE } = require("../constants/default.constants");
const { getAllContactsFromQuery, createContactEntry } = require("../models/contact-model")

async function placeOrderService({email, phoneNumber}) {
    const retObj = {}
    const userContactsQuery = {
        [Op.or]: [
            {email},
            {phoneNumber}
        ]
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
    else {
        const timeNow = new Date();
        const newUserContactData = {
            phoneNumber,
            email,
            linkPrecedence: PRECEDENCE.SECONDARY,
            createdAt: timeNow,
            updatedAt: timeNow
        };
        const newUserContact = await createContactEntry(newUserContactData);
        retObj.contact = {
            primaryContatctId: userContacts[0].id,
            emails: userContacts.map((userContact)=>userContact.email).push(newUserContact.email),
            phoneNumbers: userContacts.map((userContact)=>userContact.phoneNumber).push(newUserContact.phoneNumber),
            secondaryContactIds: userContacts.map((userContact)=>userContact.id).push(newUserContact.id)
        }
    }

    return retObj
}

module.exports = {
    placeOrderService
}