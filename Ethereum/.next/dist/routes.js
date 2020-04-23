'use strict';

var routes = require('next-routes')();
routes.add('/', '/home').add('/home', '/home').add('/login', '/login').add('/profile/:address', '/profile');
// .add('/campaigns/new','/campaigns/new')
// .add('/campaigns/:address','/campaigns/show')
// .add('/campaigns/:address/requests','/campaigns/requests/index')
// .add('/campaigns/:address/requests/new','/campaigns/requests/new');


module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjtBQUNBLE9BQ0csQUFESCxJQUNPLEFBRFAsS0FDVyxBQURYLFNBRUcsQUFGSCxJQUVPLEFBRlAsU0FFZSxBQUZmLFNBR0csQUFISCxJQUdPLEFBSFAsVUFHZ0IsQUFIaEIsVUFJRyxBQUpILElBSU8sQUFKUCxxQkFJMkIsQUFKM0I7QUFLRTtBQUNBO0FBQ0E7QUFDQTs7O0FBSUYsT0FBTyxBQUFQLFVBQWlCLEFBQWpCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbGF1cmFjZXJvbi9Eb2N1bWVudHMvQUFBX2Jsb2NrY2hhaW4vYWFhLWJsb2NrY2hhaW4tc3IyaTMwNS9FdGhlcmV1bSJ9