const { Wood } = require("../models");

exports.woods = async (req, res) => {
    const woodList = await Wood.findAll();
    console.log(woodList.every(wood => wood instanceof Wood));
    res.send('List of woods')
}