async function getAnimalsList() {
    console.log('getAnimalsList')
    const response = await fetch('http://localhost:3000/api/animals')
    const data = await response.json()
    
    const animals = document.querySelectorAll('tr > td')
  
    animals.forEach(td => {
      const tr = td.parentNode
      tr.remove()
    })
  
    const animalListContainer = document.getElementById('animal-list-container')
  
    data.forEach(animal => {
        const newAnimalTr = document.createElement('tr')
        
        newAnimalTr.id = animal.id
        newAnimalTr.innerHTML = `
          <td>${animal.name_animal}</td>
          <td>${animal.breed}</td>
          <td>${animal.age}</td>
          <td>${animal.weight}</td>
          <td>${animal.owner_name}</td>
          <td>${animal.owner_name}</td>
        `
  
        animalListContainer.appendChild(newAnimalTr)
    })
  }
  
  getAnimalsList()
  
  const createAnimalButton = document.getElementById('create-animal-button')
  
  createAnimalButton.addEventListener('click', async (event) => {
      event.preventDefault()
  
      const name_animal = document.querySelector('input[name="name_animal"]').value
      const breed = document.querySelector('input[name="breed"]').value
      const age = document.querySelector('input[name="age"]').value
      const weight = document.querySelector('input[name="weight"]').value
      const owner_name = document.querySelector('input[name="owner_name"]').value
      const is_vacinated = document.querySelector('input[name="is_vacinated"]').value
  
      await fetch('http://localhost:3000/api/animals', {
          method: 'POST',
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
              name_animal,
              breed,
              age,
              weight,
              owner_name,
              is_vacinated,
          })
      })
  
      await getAnimalsList()
  })