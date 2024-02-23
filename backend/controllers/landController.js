const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createLand = async (req, res) => {
  try {
    const { location, area, dimensionOfLand, landIdentificationNumber, ownerId } = req.body;
    if (!location || !area || !dimensionOfLand || !landIdentificationNumber || !ownerId) {
      return res.status(400).json({ error: 'Please provide all required fields' });
    }

    const land = await prisma.land.create({
      data: {
        location,
        area,
        dimensionOfLand,
        landIdentificationNumber,
        ownerId
      }
    });
    res.status(200).json(land);
  } catch (error) {
    res.status(203).json({ error: 'Error creating land', details: error.message });
  }
};

const getAllLands = async (req, res) => {
  try {
    const lands = await prisma.land.findMany();
    res.status(200).json(lands);
  } catch (error) {
    res.status(203).json({ error: 'Error fetching lands', details: error.message });
  }
};

const getLandById = async (req, res) => {
  const id = req.params.id;
  try {
    const land = await prisma.land.findUnique({
      where: { id }
    });
    if (!land) {
      res.status(404).json({ error: 'Land not found' });
    } else {
      res.status(200).json(land);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching land', details: error.message });
  }
};

const updateLand = async (req, res) => {
  const id = req.params.id;
  const { location, area, dimensionOfLand, landIdentificationNumber, ownerId } = req.body;
  try {
    const land = await prisma.land.update({
      where: { id },
      data: { location, area, dimensionOfLand, landIdentificationNumber, ownerId }
    });
    res.status(200).json(land);
  } catch (error) {
    res.status(500).json({ error: 'Error updating land', details: error.message });
  }
};

const deleteLand = async (req, res) => {
  const id = req.params.id;
  try {
    const land = await prisma.land.delete({
      where: { id }
    });
    res.status(200).json(land);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting land', details: error.message });
  }
};

module.exports = {
  createLand,
  getAllLands,
  getLandById,
  updateLand,
  deleteLand
};
