const express = require('express');
const router = express.Router();
const cors = require('../cors.js');

const Item = require('../../models/CartItem');

router.route('/')
	.options(cors.corsWithOptions,(req,res) => {res.sendStatus(200);})
	.get(cors.corsWithOptions,(req,res,next)      => {
	Item.find()
		.sort({name:1})
		.then(items => res.json(items))
});
router.route('/')
.options(cors.corsWithOptions,(req,res) => {res.sendStatus(200);})
.post(cors.corsWithOptions,(req,res,next)      => {
	Item.find({name:req.body.name},function(err,result)
	{
		if(!result.length)
		{
			const newItem = new Item({ 
				name:req.body.name,
				description:req.body.description,
				price:req.body.price
			});
			newItem.save()
				.then(item => res.json(item));
		}	
	});
});
router.route('/:id')
.options(cors.corsWithOptions,(req,res) => {res.sendStatus(200);})
.get(cors.corsWithOptions,(req,res,next)      => {
	Item.findById(req.params.id)
        .then(item => res.json(item))
    

});
router.route('/:id')
.options(cors.corsWithOptions,(req,res) => {res.sendStatus(200);})
.delete(cors.corsWithOptions,(req,res,next)      => {
	Item.findById(req.params.id)
		.then(item => item.remove().then(() => res.json({success:true})))
		.catch(err => res.status(404).json({success:false}));
})
module.exports = router;
