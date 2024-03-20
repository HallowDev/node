const { User } = require("../models");
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.signup = (req, res) => {
    try {
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(req.body.password, salt, async function(err, hash) {
                req.body.password = hash
                const newUser = await User.create({ ...req.body });
                res.status(201).json(newUser);
            });
        });
      } catch (error) {
        console.error('Erreur lors de l\'inscription :', error);
        res.status(500).json({ message: 'Une erreur est survenue lors de l\'inscription.' });
      }
}

exports.login = (req, res) => {
    res.send('You are login');
}