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
    order: [["createdAt", 'ASC']]
  });
}
async function updateContactFromQuery(upsertQuery) {
  return await Contact.upsert(upsertQuery);
}

module.exports = {
  createContactEntry,
  getContactFromQuery,
  getAllContactsFromQuery,
  updateContactFromQuery
};
