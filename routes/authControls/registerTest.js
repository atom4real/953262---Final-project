// let express = require('express');
// let router = express.Router();
// let dbCon = require('../../lib/db');

// router.get('/', (req, res) => {
// 	res.render('kitchen/authentication/register')
// });

// router.post('/', (req, res) => {
//     var username = req.body.username;
//     var email = req.body.email;
//     var password = req.body.password;
//     var comfirm = req.body.comfirm_password;

//     if(username && email && password && (comfirm === password)) {
//         dbCon.query('INSERT INTO staff_users (email, username, password) VALUES (?,?,?)', [email, username, password], (err, result, fields) => {
//             res.send('`your account has been created successfully, Now you can <a href="/">Login</a>`')

//             if(err) {
//                 res.send(err);
//             }
//         })
//     } else {
//         res.send('Invalid Input')
//     }
// })

//  module.exports = router;
