const { User } = require("../models");
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');
const jwtSecretKey = process.env.TOKEN_SECRET;

exports.signup = (req, res) => {
    try {
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(req.body.password, salt, async function(err, hash) {
                const newUser = await User.create({ ...req.body, password: hash });
                res.status(200).json(newUser);
            });
        });
      } catch (error) {
        console.error('Erreur lors de l\'inscription :', error);
        res.status(500).json({ message: 'Une erreur est survenue lors de l\'inscription.' });
      }
}

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ where: { email: req.body.email } });
        if (!user) {
            return res.status(404).json({ message: 'Adresse email incorrecte ou utilisateur inexistant' });
        }
        const passwordMatch = await bcrypt.compare(req.body.password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Mot de passe incorrect' });
        }
        const token = jwt.sign({ userId: user.id }, jwtSecretKey, { expiresIn: '1h' });
        res.status(200).json({ user, token });
    } catch (error) {
        res.status(500).json({ message: 'Une erreur est survenue lors de la connexion.' });
    }
}