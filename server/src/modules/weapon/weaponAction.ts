import type { RequestHandler } from "express";
import weaponRepository from "./weaponRepository";

const browse: RequestHandler = async (req, res) => {
  const result = await weaponRepository.readAll();

  res.json(result);
};

const read: RequestHandler = async (req, res) => {
  const result = await weaponRepository.readById(req.params.id);

  if (result) {
    res.json(result);
  } else {
    res.status(404).json("This weapon doesn't exist");
  }
};

const edit: RequestHandler = async (req, res) => {
  try {
    const result = await weaponRepository.update(req.body, req.params.id);

    if (result) {
      res.status(201).json(`${req.body.name} has been updated successfully`);
    } else {
      res.status(404).json("This weapon doesn't exist");
    }
  } catch (err) {
    res.status(500).json("Internal server error");
  }
};

const add: RequestHandler = async (req, res) => {
  try {
    const result = await weaponRepository.create(req.body);

    if (result) {
      res.status(201).json("A new weapon has been created successfully");
    } else {
      res.status(404).json("This weapon doesn't exist");
    }
  } catch (err) {
    res.status(500).json("Internal server error");
  }
};

const destroy: RequestHandler = async (req, res) => {
  try {
    const deleteWeapon = await weaponRepository.delete(req.params.id);

    if (deleteWeapon) {
      res.status(200).json("A weapon has been successfully deleted !");
    } else {
      res.status(404).json("Impossible to delete a weapon");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("Internal server error");
  }
};

export default { browse, read, edit, add, destroy };
