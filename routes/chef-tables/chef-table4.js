var express = require('express');
var router = express.Router();
let dbCon = require('../../lib/db');

router.get('/', (req, res, next) => {
    dbCon.query('SELECT * FROM orderlist WHERE table_num=4 ORDER BY id asc', (err, rows) => {
        if (err) {
            req.flash('error', err);
            res.render('kitchen/chefsChooseTables/chefs-table4', { data: '' });
        } else {
            res.render('kitchen/chefsChooseTables/chefs-table4', { data: rows });
        }
    })
})
module.exports = router;
