var router = require('express').Router();

var apiRoutes = require('./api/');
var homeRoutes = require('./home-routes.js');
var dashboardRoutes = require('./dashboard-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router; 
