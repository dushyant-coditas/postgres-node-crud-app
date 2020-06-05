module.exports = app => {
    const characters = require("../controllers/character.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", characters.create);
  
    router.get("/", characters.findAll);
  
    router.get("/:id", characters.findOne);
  
    router.put("/:id", characters.update);
  
    router.delete("/:id", characters.delete);
  
    router.delete("/", characters.deleteAll);
  
    app.use("/api/characters", router);
  };
  