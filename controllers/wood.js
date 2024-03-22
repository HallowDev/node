const { Wood } = require("../models");
const { deleteImage } = require("../helpers/images.js");

exports.woods = async (req, res) => {
    try {
        const woodList = await Wood.findAll();
        res.status(200).json(woodList)
      } catch (error) {
        res.status(500).json({ message: 'Une erreur est survenue lors de la récupération de la liste' });
      }
}

exports.readByHardness = async (req, res) => {
    try {
        const hardness = req.params.hardness;
        const woodList = await Wood.findAll({ where: { hardness: hardness } });
        res.status(200).json(woodList);
    } catch (error) {
        res.status(500).json({ message: 'Une erreur est survenue lors de la récupération de la liste' });
    }
}

exports.addWood = async (req, res) => {
    try {
        const pathname = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
        const newWood = await Wood.create({ ...JSON.parse(req.body.datas), image: pathname, });
        res.status(201).json(newWood);
    } catch (error) {
        res.status(500).json({ message: 'Une erreur est survenue lors de la création de la nouvelle essence de bois.' });
    }
};

exports.updateWood = async (req, res) => {
    try {
        const woodId = req.params.id;
        const updatedWoodData = JSON.parse(req.body.datas);
        const woodToUpdate = await Wood.findByPk(woodId);

        if (!woodToUpdate) {
            return res.status(404).json({ message: 'Essence de bois non trouvée.' });
        }

        if (req.file) {
            const pathname = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
            if (woodToUpdate.image) {
                await deleteImage(woodToUpdate.image)
            }
            updatedWoodData.image = pathname;
        }

        const updatedWood = await woodToUpdate.update(updatedWoodData);
        res.status(200).json(updatedWood);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur est survenue lors de la mise à jour de l\'essence de bois.' });
    }
};

exports.deleteWood = async (req, res) => {
    try {
        const woodId = req.params.id;
        const woodToDelete = await Wood.findByPk(woodId);

        if (!woodToDelete) {
            return res.status(404).json({ message: 'Essence de bois non trouvée.' });
        }

        if (woodToDelete.image) {
            await deleteImage(woodToDelete.image)
        }

        await woodToDelete.destroy();
        res.status(200).json({ message: 'Essence de bois supprimée avec succès.' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur est survenue lors de la suppression de l\'essence de bois.' });
    }
};
