async function getServicesList() {
    console.log('getServicesList')
    const response = await fetch('http://localhost:3000/api/services')
    const data = await response.json()
    
    const services = document.querySelectorAll('tr > td')
  
    services.forEach(td => {
      const tr = td.parentNode
      tr.remove()
    })
  
    const servicesListContainer = document.getElementById('service-list-container')
  
    data.forEach(service => {
        const newServiceTr = document.createElement('tr')
        
        newServiceTr.id = service.id
        newServiceTr.innerHTML = `
          <td>${service.name}</td>
          <td>${service.price}</td>
          <td>${service.duration}</td>
        `
  
        servicesListContainer.appendChild(newServiceTr)
    })
  }
  
  getServicesList()
  
  const createServicesButton = document.getElementById('create-service-button')
  
  createServicesButton.addEventListener('click', async (event) => {
      event.preventDefault()
  
      const name = document.querySelector('input[name="name"]').value
      const price = document.querySelector('input[name="price"]').value
      const duration = document.querySelector('input[name="duration"]').value
  
      await fetch('http://localhost:3000/api/services', {
          method: 'POST',
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
              name,
              price,
              duration,
          })
      })
  
      await getServicesList()
  })