// module.exports = app => {
//     const login = require("../controller/login.controller");
  
//     var router = require("express").Router();
  
//     // Create a new Tutorial
//     router.post("/", login.create);
  
//     // Retrieve all Tutorials
//     router.get("/", login.findAll);
  
//     // // Retrieve all published Tutorials
//     // router.get("/published", login.findAllPublished);
  
//     // Retrieve a single Tutorial with id
//     router.get("/:id", login.findOne);
  
//     // // Update a Tutorial with id
//     // router.put("/:id", tutorials.update);
  
//     // // Delete a Tutorial with id
//     // router.delete("/:id", tutorials.delete);
  
//     // // Delete all Tutorials
//     // router.delete("/", tutorials.deleteAll);
  
//     app.use('/api/login', router);
//   };