const express=require('express');
const router=express.Router();
// importing homecontroller file 
const homeController=require('../controller/homeController');

// routing to homecontroller according to path 
router.get('/', homeController.home);

module.exports= router;