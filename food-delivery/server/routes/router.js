const express = require('express')
const userController = require('../controller/userController')
const router = new express.Router()

// register user
router.post('/register',userController.addUser)

// login user
router.post('/login',userController.loginUser)

// All foods
router.get('/allfoods',userController.allfoods)

// order foods
router.post('/order',userController.orderNow)

// all users
router.get('/allusers',userController.allusers)

// all orders
router.get('/allorders',userController.allorders)

// login user
router.post('/forgotpassword',userController.forgotpassword)

// all users count
router.get('/alluserscount',userController.alluserscount)

// all orders count
router.get('/allorderscount',userController.allordersscount)


module.exports=router