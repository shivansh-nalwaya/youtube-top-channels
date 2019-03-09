const ChannelRepository = require("../repositories/ChannelRepository");

module.exports = {
  get: function(req, res) {
    ChannelRepository.all()
      .then(data => {
        res.send({
          success: true,
          data
        });
      })
      .catch(message => {
        res.send({
          success: false,
          message
        });
      });
  },

  show: function(req, res) {
    var id = req.params.id;
    ChannelRepository.find(id)
      .then(resp => {
        result = resp[0];
        res.send({
          result
        });
      })
      .catch(message => {
        res.send({
          success: false,
          message
        });
      });
  },

  top_channels: function(req, res) {
    ChannelRepository.top()
      .then(data => {
        res.send({
          success: true,
          data: data.sort((a, b) => {
            return a.rank - b.rank;
          })
        });
      })
      .catch(message => {
        res.send({
          success: false,
          message
        });
      });
  },

  create: function(req, res) {
    var data = req.body;
    ChannelRepository.create(data)
      .then(result => {
        res.send({
          success: true,
          result: result
        });
      })
      .catch(message => {
        res.send({
          success: false,
          message
        });
      });
  },

  update: function(req, res) {
    var id = req.params.id;
    var data = req.body;
    ChannelRepository.update(id, data)
      .then(result => {
        res.send({
          success: true,
          id: result._id
        });
      })
      .catch(message => {
        res.send({
          success: false,
          message
        });
      });
  },

  delete: function(req, res) {
    var id = req.params.id;
    ChannelRepository.delete(id)
      .then(result => {
        res.send({
          success: true
        });
      })
      .catch(message => {
        res.send({
          success: false,
          message
        });
      });
  }
};
