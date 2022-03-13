var express = require('express');
var router = express.Router();
let dbCon = require('../../lib/db');
router.get('/', (req, res, next) => {
    dbCon.query('SELECT * FROM orderlist WHERE table_num=3 ORDER BY id asc', (err, rows) => {
        if (err) {
            req.flash('error', err);
            res.render('orderMenu/table3/checkout', { data: '' });
        } else {
            res.render('orderMenu/table3/checkout', { data: rows });
        }
    })
})
router.post('/paid', (req, res, next) => {
    dbCon.query('delete from orderlist where table_num=3', (err, result) => {
        if(err) {
            req.flash(err);
        }
        else {
            req.flash('success', 'Menu successfully added');
            res.redirect('/');
        }
    })
})
module.exports = router;
