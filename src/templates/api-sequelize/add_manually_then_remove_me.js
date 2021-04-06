// Add this line to /backend/config/router.js to route the newly created endpoint
router.use('/___apiname___', require('../api/___apiname___/routes'));

// Add this line before application settings in src/backend/index.js
(async () => await require('./config/db').sequelize.sync())();
