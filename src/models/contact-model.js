const Contact = require('./schemas/Contact');

async function createContactEntry(userContactData) {
  return await Contact.create(userContactData);
}
async function getContactFromQuery(query) {
  return await Contact.findOne({
    where: query,
  });
}
async function getAllContactsFromQuery(query) {
  return await Contact.findAll({
    where: query,
  });
}
async function updateContactFromQuery(query, updateQuery) {
  await Contact.update(updateQuery, {
    where: query,
  });
  return await Contact.findOne({
    where: query,
  });
}

module.exports = {
  createContactEntry,
  getContactFromQuery,
  getAllContactsFromQuery,
  updateContactFromQuery
};
