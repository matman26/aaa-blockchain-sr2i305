const routes = require('next-routes')();
routes
  .add('/','/home')
  .add('/home','/home')
  .add('/login','/login')
  // .add('/campaigns/new','/campaigns/new')
  // .add('/campaigns/:address','/campaigns/show')
  // .add('/campaigns/:address/requests','/campaigns/requests/index')
  // .add('/campaigns/:address/requests/new','/campaigns/requests/new');



module.exports = routes;