import Sequelize from 'sequelize'

const sequelize = new Sequelize('peep', 'postgres', 'romania123', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

sequelize.authenticate()
  .then(() => console.log('Connection to db done...'))
  .catch(err => console.error('Unable to connect to db: ', err))


export default sequelize
