// let express = require('express');
// let router = express.Router();
// let dbCon = require('../../lib/db');

// router.get('/', (req, res) => {
// 	res.render('kitchen/authentication/login')
// });

// router.post('/', (req, res) => {
// 	var username = req.body.username;
// 	var password = req.body.password;
// 	if (username && password) {
// 		dbCon.query('SELECT * FROM staff_users WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
// 			if (results.length > 0) {
// 				req.session.loggedin = true;
// 				req.session.username = username;
// 				// res.redirect('/');
// 				// res.send('Welcome back, ' + req.session.username + '!');
// 				var user = { title: 'Express' }
// 				res.redirect('/chefs', user)
// 			} else {
// 				res.send('Incorrect Username and/or Password!');
// 			}			
// 			res.end();
// 		});
// 	} else {
// 		res.send('Please enter Username and Password!');
// 		res.end();
// 	}
// });

//  module.exports = router;
