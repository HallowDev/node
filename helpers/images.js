const fs = require('fs');

deleteImage = async (image) => {
    const oldImagePath = image.split('/uploads/')[1];
    fs.unlink(`./uploads/${oldImagePath}`, (err) => {
        if (err) {
            return res.status(401).json({ message: 'Erreur lors de la suppression de l\'image :', err });
        }
    });
}

module.exports = { deleteImage };