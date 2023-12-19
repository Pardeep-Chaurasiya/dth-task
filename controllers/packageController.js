const { Package, Channel } = require("../models");

const createPackage = async (req, res) => {
  const { name, price, category, duration, channels } = req.body;

  try {
    const newPackage = await Package.create({
      name,
      price,
      category,
      duration,
    });
    if (channels && channels.length > 0) {
      const areValidChannelIDs = channels.every(
        (channelID) => typeof channelID === "number"
      );

      if (areValidChannelIDs) {
        const associatedChannels = await Channel.findAll({
          where: { id: channels },
        });

        // Associate channels with the package
        await newPackage.setChannels(associatedChannels);
      } else {
        return res.status(400).json({ error: "Invalid channel IDs provided" });
      }

      return res.status(201).json({ message: "Channel Added Successfully" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { createPackage };
