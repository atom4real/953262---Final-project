let express = require('express');
let router = express.Router();

const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const dbConnection = require('../../lib/dbUser');

// DECLARING CUSTOM MIDDLEWARE
const ifNotLoggedin = (req, res, next) => {
    if(!req.session.isLoggedIn){
        return res.render('kitchen/authentication/login');
    }
    next();
}
const ifLoggedin = (req,res,next) => {
    if(req.session.isLoggedIn){
        return res.redirect('/chefs');
    }
    next();
}

// display login page
router.get('/', ifNotLoggedin, (req, res, next) => {
    dbConnection.execute('SELECT `name` FROM staff_users WHERE `id`=?',[req.session.userID])
    .then(([rows]) => {
        res.render('kitchen/chefs', {
            name: rows[0].name
        })
    })
})

// LOGIN PAGE
router.post('/', ifLoggedin, [
    body('username').custom((value) => {
        return dbConnection.execute('SELECT name FROM staff_users WHERE name=?', [value])
        .then(([rows]) => {
            if(rows.length == 1){
                return true;
                
            }
            return Promise.reject('Invalid Username Address!');
            
        });
    }),
    body('password','Password is empty!').trim().not().isEmpty(),
], (req, res) => {
    const validation_result = validationResult(req);
    const {password, username} = req.body;
    if(validation_result.isEmpty()){
        
        dbConnection.execute("SELECT * FROM `staff_users` WHERE `name`=?",[username])
        .then(([rows]) => {
            bcrypt.compare(password, rows[0].password).then(compare_result => {
                if(compare_result === true){
                    req.session.isLoggedIn = true;
                    req.session.userID = rows[0].id;

                    res.redirect('/chefs');
                }
                else{
                    res.render('kitchen/authentication/login',{
                        login_errors:['Invalid Password!']
                    });
                }
            })
            .catch(err => {
                if (err) throw err;
            });


        }).catch(err => {
            if (err) throw err;
        });
    }
    else{
        let allErrors = validation_result.errors.map((error) => {
            return error.msg;
        });
        // REDERING login-register PAGE WITH LOGIN VALIDATION ERRORS
        res.render('kitchen/authentication/login',{
            login_errors:allErrors
        });
    }
});
// END OF LOGIN PAGE

module.exports = router;