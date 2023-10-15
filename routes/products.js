/* --------- IMPORTING PACKAGE --------- */
const express= require("express");
const router= express.Router();

/* --------- IMPORTING CONTROLLER --------- */
const productController = require('../controllers/product_controller');

/** --------- MAKING ROUTES --------- **/
router.get('/', productController.getProducts);
router.post('/create', productController.create);
router.post('/:id/update_quantity', productController.update);
router.delete('/:id', productController.delete);


/* --------- EXPORTING ROUTER --------- */
module.exports = router;