const {
    addToLikedMovies,
    getLikedMovies,
    // removeFromLikedMovies,
  } = require("../controllers/UserController");
  
  const router = require("express").Router();
  
  router.get("/liked/:email", getLikedMovies);
//   router.put("/remove", removeFromLikedMovies);
  router.post("/add", addToLikedMovies);

  
  module.exports = router;