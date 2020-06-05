const db = require("../models");
const Characters = db.characters;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const character = {
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    justu: req.body.jutsu,
    prowess: req.body.prowess,
    clan: req.body.clan,
    isNinja: req.body.isNinja ? req.body.isNinja : true
  };

  Characters.create(character)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message
      });
    });
};


exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  Characters.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Characters.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: 
        err.message
      });
    });
};


exports.update = (req, res) => {
  const id = req.params.id;

  Characters.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Character details are updated."
        });
      } else {
        res.send({
          message: `Cannot update Character with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 
            err.message
      });
    });
};


exports.delete = (req, res) => {
  const id = req.params.id;

  Characters.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Character removed successfully!"
        });
      } else {
        res.send({
          message: "Cannot remove Character"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 
            err.message
      });
    });
};

exports.deleteAll = (req, res) => {
 Characters.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Characters are removed successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message
      });
    });
};


