const express = require('express');
const app = express();

const bookRoute = express.Router();

let book = require('../model/book');

bookRoute.route('add-book').post((req, res, next) => {
    book.create(req.body, (err, data) => {
        if (err) {
            return next(err)
        } else {
            res.json(data)
        }
    })
})

bookRoute.route('/').get((req, res, next) => {
    book.find((err, data) => {
        if (err) {
            console.err(err);
            return next(err);
        } else {
            res.json(data)
        }
    })
})


bookRoute.route('/read-book/:id').get((req, res, next) => {
    book.findById(req.params.id, (err, data) => {
        if (err) {
            console.err(err);
            return next(err);
        } else {
            res.json(data)
        }
    })
})

bookRoute.route('/update-book/:id').put((req, res, next) => {
    book.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (err, data) => {
        if (err) {
            console.err(err);
            return next(err);
        } else {
            res.json(data);
        }
    })
})

bookRoute.route('/delte-book/:id').delete((req, res, next) => {
    book.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) {
            console.err(err);
            return next(err);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = bookRoute;