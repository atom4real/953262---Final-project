let express = require('express');
let router = express.Router();
let dbConnection = require('../../lib/dbUser');

const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');

// DECLARING CUSTOM MIDDLEWARE
const ifNotLoggedin = (req, res, next) => {
    if(!req.session.isLoggedIn){
        return res.render('kitchen/authentication/register');
    }
    next();
}
const ifLoggedin = (req,res,next) => {
    if(req.session.isLoggedIn){
        return res.redirect('kitchen/authentication/login');
    }
    next();
}

// display login page
router.get('/', ifNotLoggedin, (req, res, next) => {
    dbConnection.query('SELECT name FROM staff_users WHERE id=?',[req.session.userID]).then(([rows]) => {
        res.render('kitchen/authentication/register', {
            name: rows[0].name
        });
    })
})

// REGISTER PAGE
router.post('/', ifLoggedin, 
// post data validation(using express-validator)
[
    body('email','Invalid email address!').isEmail().custom((value) => {
        return dbConnection.execute('SELECT `email` FROM `staff_users` WHERE `email`=?', [value])
        .then(([rows]) => {
            if(rows.length > 0){
                return Promise.reject('This E-mail already in use!');
            }
            return true;
        });
    }),
    body('username','Username is Empty!').trim().not().isEmpty(),
    body('confirm_password','confirm password is Empty!').trim().not().isEmpty(),
    body('password','The password must be of minimum length 6 characters').trim().isLength({ min: 6 }),
],// end of post data validation
(req,res,next) => {

    const validation_result = validationResult(req);
    const {username, password, email} = req.body;
    // IF validation_result HAS NO ERROR
    if(validation_result.isEmpty() && req.body.password === req.body.confirm_password){
        // password encryption (using bcryptjs)
        bcrypt.hash(password, 12).then((hash_pass) => {
            // INSERTING USER INTO DATABASE
            dbConnection.execute("INSERT INTO `staff_users`(`name`,`email`,`password`) VALUES(?,?,?)",[username,email, hash_pass])
            .then(result => {
                res.redirect('/login');
            }).catch(err => {
                // THROW INSERTING USER ERROR'S
                if (err) throw err;
            });
        })
        .catch(err => {
            // THROW HASING ERROR'S
            if (err) throw err;
        })
    } else if (req.body.password !== req.body.confirm_password) {
        throw new Error("Password is not match!")
    }
    else{
        // COLLECT ALL THE VALIDATION ERRORS
        let allErrors = validation_result.errors.map((error) => {
            return error.msg;
        });
        // REDERING login-register PAGE WITH VALIDATION ERRORS
        res.render('kitchen/authentication/register',{
            register_error:allErrors,
            old_data:req.body
        });
    }
});// END OF REGISTER PAGE

module.exports = router;