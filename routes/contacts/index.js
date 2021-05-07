const express = require('express');
const router = express.Router();
const {
  getAll,
  getById,
  create,
  remove,
  update,
  updateStatus
} = require('../../controllers/constacts');
const {
  validAddContact,
  validUpdateContact,
  validObjectId,
  validUpdateStatusContact
} = require('./validation');
const guard = require('../../helper/guard');

router
  .get('/', guard, getAll)
  .post('/', guard, validAddContact, create);

router
  .get('/:contactId', guard, validObjectId, getById)
  .delete('/:contactId', guard, remove)
  .put('/:contactId', guard, validUpdateContact, update)
  .patch('/:contactId/favorite', guard, validUpdateStatusContact, updateStatus);

module.exports = router;
