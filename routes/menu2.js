let express = require('express');
let router = express.Router();
let dbCon = require('../lib/db');

// display menu page
router.get('/', (req, res, next) => {
    dbCon.query('SELECT * FROM orderlist WHERE table_num=2 ORDER BY id asc', (err, rows) => {
        if (err) {
            req.flash('error', err);
            res.render('orderMenu/table2', { data: '' });
        } else {
            res.render('orderMenu/table2', { data: rows });
        }
    })
})

// display add menu page
router.get('/add2', (req, res, next) => {
    res.render('orderMenu/table2/add2', {
        name: '',
        status: '',
        price: 0,
        img: '',
        quantity: 0,
        table_num: 0,
        special: ''
    })
})


router.post('/add2', (req, res, next) => {
    let name = req.body.name;
    let status = req.body.status;
    let price = req.body.price;
    let img = req.body.img;
    let quantity = req.body.quantity;
    let table_num = req.body.table_num;
    let special = req.body.special;
    let errors = false;

    if (name.length === 0 || status.length === 0) {
        errors = true;
        // set flash message
        req.flash('error', 'Please enter name and status');
        // render to add.ejs with flash message
        res.render('menu2/add2', {
            name: name,
            status: status,
            price: price,
            img: img,
            quantity: quantity,
            table_num: table_num,
            special: special
        })
    }

    // if no error
    if (!errors) {
        let form_data = {
            name: name,
            status: status,
            price: price,
            img: img,
            quantity: quantity,
            table_num: table_num,
            special: special
        }

        // insert query
        dbCon.query('INSERT INTO orderlist SET ?', form_data, (err, result) => {
            if (err) {
                req.flash('error', err)

                res.render('menu2/add2', {
                    name: form_data.name,
                    status: form_data.status,
                    price: form_data.price,
                    img: form_data.img,
                    quantity: form_data.quantity,
                    table_num: table_num,
                    special: special
                })
            } else {
                req.flash('success', 'Menu successfully added');
                res.redirect('/menu2');
            }
        })
    }
})


// display edit menu page
router.get('/edit/(:id)', (req, res, next) => {
    let id = req.params.id;

    dbCon.query('SELECT * FROM orderlist WHERE id = ' + id, (err, rows, fields) => {
        if (rows.length <= 0) {
            req.flash('error', 'Orderlist not found with id = ' + id)
            res.redirect('/menu2');
        } else {
            res.render('orderMenu/table2/edit', {
                title: 'Edit menu',
                id: rows[0].id,
                name: rows[0].name,
                status: rows[0].status
            })
        }
    });
})

// update menu page
router.post('/update/:id', (req, res, next) => {
    let id = req.params.id;
    let name = req.body.name;
    let status = req.body.status;
    let errors = false;

    if (name.length === 0 || status.length === 0) {
        errors = true;
        req.flash('error', 'Please enter name and status');
        res.render('menu2/edit', {
            id: req.params.id,
            name: name,
            status: status
        })
    }
    // if no error
    if (!errors) {
        let form_data = {
            name: name,
            status: status
        }
        // update query
        dbCon.query("UPDATE orderlist SET ? WHERE id = " + id, form_data, (err, result) => {
            if (err) {
                req.flash('error', err);
                res.render('menu2/edit', {
                    id: req.params.id,
                    name: form_data.name,
                    status: form_data.status
                })
            } else {
                req.flash('success', 'Update successfully updated');
                res.redirect('/chefsControls')
            }
        })
    }
})

// delete menu
router.get('/delete/(:id)', (req, res, next) => {
    let id = req.params.id;

    dbCon.query('DELETE FROM orderlist WHERE id = ' + id, (err, result) => {
        if (err) {
            req.flash('error', err),
            res.redirect('/menu2');
        } else {
            req.flash('success', 'Menu successfully deleted! ID = ' + id);
            res.redirect('/menu2');
        }
    })
})

module.exports = router;