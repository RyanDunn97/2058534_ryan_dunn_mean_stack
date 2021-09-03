// load the express module
let express = require("express");

// used to create the router ref
// this helps to route to controller function based upon path
let router = express.Router(); 
let productController = require("../controller/product.controller");

router.get("/getAllProducts",productController.getAllProductDetails);
router.post("/storeProduct",productController.storedProductInfo);
router.delete("/deleteProduct/:pid",productController.deleteProductInfo);
router.put("/updateProduct",productController.updateProductDetails);


module.exports = router;