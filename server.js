const express = require("express")
const { User, Animal, Service } = require("./models")

const app = express()
app.use(express.json())
app.use("/home", express.static('./index.html'))
app.use("/index.css", express.static('./index.css'))
app.use("/script.js", express.static('./script.js'))
app.use("/animals", express.static('./animals.html'))
app.use("/animals.css", express.static('./animals.css'))
app.use("/animals.js", express.static('./animals.js'))
app.use("/services", express.static('./services-types.html'))
app.use("/services-types.css", express.static('./services-types.css'))
app.use("/services-types.js", express.static('./services-types.js'))
app.use("/service", express.static('./services.html'))
app.use("/services.css", express.static('./services.css'))
app.use("/services.js", express.static('./services.js'))

app.get("/api/user", async (request, response) => {
  const users = await User.findAll()

  response.json(users)
})
app.post("/api/user", async (request, response) => {
  const newUser = {
    name: request.body.name,
    birthDate: request.body.birthDate,
    email: request.body.email,
    cpf: request.body.cpf,
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  const user = await User.create(newUser)

  response.json(user)
})

app.get("/api/animals", async (request, response) => {
  const animals = await Animal.findAll()

  response.json(animals)
})
app.post("/api/animals", async (request, response) => {
  const newAnimals = {
    name_animal: request.body.name_animal,
    breed: request.body.breed,
    age: request.body.age,
    weight: request.body.weight,
    owner_name: request.body.owner_name,
    is_vacinated: request.body.is_vacinated,
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  const animal = await Animal.create(newAnimals)

  response.json(animal)
})


app.get("/api/services", async (request, response) => {
  const services = await Service.findAll()

  response.json(services)
})
app.post("/api/services", async (request, response) => {
  const newServices = {
    name: request.body.name,
    price: request.body.price,
    duration: request.body.duration,
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  const service = await Service.create(newServices)

  response.json(service)
})

// serviços => service-types
//   nome => name
//   preço => price
//   duração => duration

// animais => animals
//   nome => name
//   raça => breed
//   idade => age
//   peso => weight
//   nome do dono => owner_name
//   é vacinado => is_vacinated

// atendimentos => services
//   serviço => service_type
//   animal => animal
//   data agendada => scheduled_date

app.listen(3000, () => {
  console.log(`Servidor está rodando em http://localhost:3000`)
})
