// Array of top 10 destinations in India
const destinations = [
    {
      name: 'Taj Mahal, Agra',
      description: 'The Taj Mahal, one of the Seven Wonders of the World, is a symbol of love and a beautiful white marble mausoleum.',
      location: 'Agra, Uttar Pradesh',
      bestTime: 'October to March',
      attractions: 'Taj Mahal, Agra Fort, Fatehpur Sikri'
    },
    {
      name: 'Jaipur, Rajasthan',
      description: 'Known as the "Pink City," Jaipur is famous for its vibrant culture, forts, and palaces.',
      location: 'Rajasthan',
      bestTime: 'October to March',
      attractions: 'Amber Fort, City Palace, Hawa Mahal'
    },
    {
      name: 'Varanasi, Uttar Pradesh',
      description: 'One of the oldest living cities in the world, Varanasi is known for its ghats and religious significance.',
      location: 'Uttar Pradesh',
      bestTime: 'October to March',
      attractions: 'Kashi Vishwanath Temple, Dashashwamedh Ghat, Sarnath'
    },
    {
      name: 'Kerala Backwaters',
      description: 'The Kerala backwaters offer serene and picturesque views, with houseboats cruising through lush landscapes.',
      location: 'Kerala',
      bestTime: 'November to February',
      attractions: 'Alleppey, Kumarakom, Vembanad Lake'
    },
    {
      name: 'Leh-Ladakh, Jammu & Kashmir',
      description: 'Leh-Ladakh offers breathtaking landscapes, monasteries, and an opportunity for adventure enthusiasts to explore the high mountains.',
      location: 'Jammu & Kashmir',
      bestTime: 'June to September',
      attractions: 'Pangong Lake, Nubra Valley, Thiksey Monastery'
    },
    {
      name: 'Goa Beaches',
      description: 'Goa is known for its beautiful beaches, lively nightlife, and Portuguese-influenced architecture.',
      location: 'Goa',
      bestTime: 'November to February',
      attractions: 'Baga Beach, Anjuna Beach, Fort Aguada'
    },
    {
      name: 'Mysore, Karnataka',
      description: 'Mysore is famous for its grand palace, silk sarees, and the Dussehra festival.',
      location: 'Karnataka',
      bestTime: 'October to March',
      attractions: 'Mysore Palace, Chamundi Hill, St. Philomena\'s Church'
    },
    {
      name: 'Andaman & Nicobar Islands',
      description: 'The Andaman & Nicobar Islands are a tropical paradise with stunning beaches, coral reefs, and marine life.',
      location: 'Andaman Sea',
      bestTime: 'November to April',
      attractions: 'Havelock Island, Radhanagar Beach, Cellular Jail'
    },
    {
      name: 'Rishikesh, Uttarakhand',
      description: 'Rishikesh is a holy city on the banks of the Ganges, known for yoga, meditation, and adventure activities like river rafting.',
      location: 'Uttarakhand',
      bestTime: 'October to March',
      attractions: 'Triveni Ghat, Laxman Jhula, Rajaji National Park'
    },
    {
      name: 'Khajuraho, Madhya Pradesh',
      description: 'Khajuraho is known for its exquisite temples adorned with stunning sculptures depicting various aspects of life.',
      location: 'Madhya Pradesh',
      bestTime: 'October to March',
      attractions: 'Western Group of Temples, Kandariya Mahadev Temple'
    }
  ];
  
  // Function to display destinations
  function displayDestinations() {
    const destinationList = document.getElementById('destination-list');
    destinationList.innerHTML = ''; // Clear any existing content
  
    destinations.forEach(destination => {
      const destinationCard = document.createElement('div');
      destinationCard.classList.add('destination-card');
      destinationCard.innerHTML = `
        <h3>${destination.name}</h3>
        <p>${destination.location}</p>
      `;
      destinationCard.onclick = () => openModal(destination);
      destinationList.appendChild(destinationCard);
    });
  }
  
  // Function to open the destination details modal
  function openModal(destination) {
    document.getElementById('destination-name').innerText = destination.name;
    document.getElementById('destination-description').innerText = destination.description;
    document.getElementById('destination-location').innerText = destination.location;
    document.getElementById('destination-time').innerText = destination.bestTime;
    document.getElementById('destination-attractions').innerText = destination.attractions;
  
    document.getElementById('destination-modal').style.display = 'flex';
  }
  
  // Function to close the modal
  function closeModal() {
    document.getElementById('destination-modal').style.display = 'none';
  }
  
  // Load the destination cards on page load
  window.onload = displayDestinations;
  