module.exports = function(app) {
  const ChannelsController = require("../controllers/ChannelsController.js");

  app.get("/", ChannelsController.get);
  app.get("/top_channels", ChannelsController.top_channels);
  app.get("/:id", ChannelsController.show);
  app.post("/", ChannelsController.create);
  app.put("/:id", ChannelsController.update);
  app.delete("/:id", ChannelsController.delete);
};
