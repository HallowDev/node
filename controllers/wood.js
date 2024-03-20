const { Wood } = require("../models");

exports.woods = async (req, res) => {
    try {
        const woodList = await Wood.findAll();
        res.status(200).json(woodList)
      } catch (error) {
        res.status(500).json({ message: 'Une erreur est survenue lors de la récupération de la liste' });
      }
}