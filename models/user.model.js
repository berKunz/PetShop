module.exports = (sequelize, Sequelize) => {
  const user = sequelize.define("user", {
    name: {
      type: Sequelize.STRING,
    },
    birthDate: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    cpf: {
      type: Sequelize.STRING,
    },
  })

  return user
}
