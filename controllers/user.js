const { User } = require("../models");
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

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
    const user = await User.findOne({ where: { email: req.body.email} });
    if (user === null) {
        res.status(500).json({ message: 'Une erreur est survenue lors de la connexion' });
    } else {
        bcrypt.compare(req.body.password, user.password, function(err, result) {
            if (result === true) {
                res.status(200).json({user, token: token});
            } else {
                res.status(500).json({ message: 'Le mot de passe est incorrect' });
            }
        });
    }
}