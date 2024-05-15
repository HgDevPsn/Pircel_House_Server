const express = require('express');
const HouseService = require('../services/houseServices');

const houseService = new HouseService();

exports.getAllHouses = async (req, res) => {
  console.log("all houses")
  try {
    const houses = await houseService.getAllHouses();
    res.status(200).json(houses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getHouseByName = async (req, res) => {
  const { name } = req.params;
  console.log('name---<', name)
  try {
    const house = await houseService.getHouseByName(name);
    if (!house) {
      return res.status(404).json({ message: 'House not found' });
    }
    res.status(200).json(house);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};