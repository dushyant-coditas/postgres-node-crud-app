module.exports = (sequelize, Sequelize) => {
    const Character = sequelize.define('character', {
        name: {
            type: Sequelize.STRING
        },
        imageUrl: {
            type: Sequelize.STRING
        },
        jutsu: {
            type: Sequelize.STRING
        },
        prowess: {
            type: Sequelize.STRING
        },
        clan: {
            type: Sequelize.STRING
        },
        isNinja: {
            type: Sequelize.BOOLEAN
        }
    })
    return Character;
}