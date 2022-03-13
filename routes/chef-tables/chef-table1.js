var express = require('express');
var router = express.Router();
let dbCon = require('../../lib/db');

router.get('/', (req, res, next) => {
    dbCon.query('SELECT * FROM orderlist WHERE table_num=1 ORDER BY id asc', (err, rows) => {
        if (err) {
            req.flash('error', err);
            res.render('kitchen/chefsChooseTables/chefs-table1', { data: '' });
        } else {
            res.render('kitchen/chefsChooseTables/chefs-table1', { data: rows });
        }
    })
})
module.exports = router;
