const router = require('express').Router();
// svar från api
router.get('/', function (_req, res) {
res.json({
status: 'Succsess',
message: 'Welcome',
});
});

// Importerar contact controller
const contactController = require('./');

// Contact routes
router.route('/contacts')

.get(contacts.index)

.post(contactController.new);
router.route('/contacts/:contact_id')

.get(contactController.view)

.patch(contactController.update)

.put(contactController.update)

.delete(contactController.delete);

// exporterar API routes
module.exports = router;