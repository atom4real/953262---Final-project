var express = require('express');
var router = express.Router();
let dbCon = require('../lib/db');

router.get('/', (req, res, next) => {
    dbCon.query('SELECT * FROM orderlist ORDER BY created_at, status', (err, rows) => {
        if (err) {
            req.flash('error', err);
            res.render('kitchen/chefsControls', { data: '' });
        } else {
            res.render('kitchen/chefsControls', { data: rows });
        }
    })
})
module.exports = router;