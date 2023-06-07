const Sequelize = require("sequelize")
const configuration = require("../utils/configuration")
const User = require("./user.model")
const Animals = require("./animals.model")
const Services = require("./services.model")

const config = configuration()
const sequelize = new Sequelize(config.database)

const database = {
  Sequelize,
  sequelize,
  User: User(sequelize, Sequelize),
  Animal: Animals(sequelize, Sequelize),
  Service: Services(sequelize, Sequelize),

}

module.exports = database

