const { Channel } = require("../models");

const addChannel = async (req, res) => {
  const { name, description, category } = req.body;

  try {
    if (!name) {
      return res.status(400).json({ message: "Channel Name is required" });
    }
    if (!description) {
      return res
        .status(400)
        .json({ message: "Channel Description is required" });
    }
    if (!category) {
      return res.status(400).json({ message: "Channel Category is required" });
    }

    await Channel.create({
      name,
      description,
      category,
    });

    return res.status(201).json({ message: "Channel Added Successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getSingleChannel = async (req, res) => {
  const { id } = req.params;

  try {
    const channel = await Channel.findOne({
      where: {
        id: id,
      },
      raw: true,
    });
    if (!channel) {
      return res.status(404).json({ message: "Channel not found " });
    }

    return res
      .status(200)
      .json({ message: "Channel Retreive Sucessfully", channel });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllChannel = async (req, res) => {
  try {
    const channels = await Channel.findAll({ raw: true });
    if (!channels) {
      return res.status(404).json({ message: "Channel not found " });
    }
    return res
      .status(200)
      .json({ message: "Channels Retreive Sucessfully", channels });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteChannel = async (req, res) => {
  try {
    const { id } = req.params;
    const channel = await Channel.destroy({
      where: {
        id: id,
      },
      raw: true,
    });
    if (!channel) {
      return res.status(404).json({ message: "Channel not found " });
    }
    return res
      .status(200)
      .json({ message: "Channels Deleted Sucessfully", channel });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { addChannel, getSingleChannel, getAllChannel, deleteChannel };
