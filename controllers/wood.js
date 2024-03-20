const { Wood } = require("../models");

exports.woods = async (req, res) => {
    try {
        const woodList = await Wood.findAll();
        console.log(woodList.every(wood => wood instanceof Wood));
        res.status(200).json(woodList)
      } catch (error) {
        console.error('Impossible de renvoyer la liste des bois', error);
        res.status(500).json({ message: 'Une erreur est survenue lors de la récupération de la liste' });
      }
}