module.exports = (sequelize, Sequelize) => {
    const services = sequelize.define("services", {
      name: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.STRING,
      },
      duration: {
        type: Sequelize.STRING,
      },
    })
  
    return services
  }
  