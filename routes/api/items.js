const express = require('express');
const router = express.Router();
const cors = require('../cors.js');

const Item = require('../../models/Item');

router.route('/')
.options(cors.corsWithOptions,(req,res) => {res.sendStatus(200);})
.get(cors.corsWithOptions,(req,res,next)      => {
	Item.find()
		.sort({name:1})
        .then(items => res.json(items))
});
router.route('/')
.options(cors.corsWithOptions,(req,res) => {res.sendStatus(200);})
.get(cors.corsWithOptions,(req,res,next)      => {
	const newItem = new Item({ 
        name:req.body.name,
        description:req.body.description,
        price:req.body.price
	});
	newItem.save()
		.then(item => res.json(item));
});
router.route('/:id')
.options(cors.corsWithOptions,(req,res) => {res.sendStatus(200);})
.get(cors.corsWithOptions,(req,res,next)      => {
	Item.findById(req.params.id)
        .then(item => res.json(item))
    

});

module.exports = router;
