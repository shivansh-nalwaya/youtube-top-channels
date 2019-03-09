var Channel = require("../models/ChannelModel");

module.exports = {
  all: () => {
    return Channel.find();
  },

  find: id => {
    return Channel.find({ _id: id });
  },

  top: () => {
    return Channel.find({ rank: { $lt: 4 } });
  },

  create: data => {
    var channel = new Channel(data);
    return channel.save();
  },

  update: (id, data) => {
    return Channel.findOneAndUpdate(
      { _id: id },
      {
        $set: { ...data }
      }
    );
  },

  delete: id => {
    return Channel.deleteOne({ _id: id });
  }
};
