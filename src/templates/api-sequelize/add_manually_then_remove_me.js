// Add this line to /backend/config/router.js to route the newly created endpoint
router.use('/api/___apiname___', require('../api/___apiname___/routes'));

// Add this line before application settings in src/backend/index.js
const { sequelize } = require('./config/db');

// Add this line to src/backend/index.js afer routing
(async () => await sequelize.sync())();
