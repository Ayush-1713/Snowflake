
let cardData = [
  {
    title: "Taj Mahal",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Taj_Mahal_in_March_2004.jpg/250px-Taj_Mahal_in_March_2004.jpg",
    link: "https://en.wikipedia.org/wiki/Taj_Mahal",
    visitLink: "details.html?place=Taj_Mahal"
  },
  {
    title: "Great Wall of China",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/The_Great_Wall_of_China_at_Jinshanling.jpg/250px-The_Great_Wall_of_China_at_Jinshanling.jpg",
    link: "https://en.wikipedia.org/wiki/Great_Wall_of_China",
    visitLink: "details.html?place=Great_Wall_of_China"
  },
  {
    title: "Petra",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/The_Monastery%2C_Petra%2C_Jordan8.jpg/250px-The_Monastery%2C_Petra%2C_Jordan8.jpg",
    link: "https://en.wikipedia.org/wiki/Petra",
    visitLink: "details.html?place=Petra"
  },
  {
    title: "Colosseum",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Rome_Colosseum_exterior_panorama.jpg/250px-Rome_Colosseum_exterior_panorama.jpg",
    link: "https://en.wikipedia.org/wiki/Colosseum",
    visitLink: "details.html?place=Colosseum"
  },
  {
    title: "Chichen Itza",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Chichen-Itza-Castillo-Seen-From-East.JPG/250px-Chichen-Itza-Castillo-Seen-From-East.JPG",
    link: "https://en.wikipedia.org/wiki/Chichen_Itza",
    visitLink: "details.html?place=Chichen_Itza"
  },
  {
    title: "Amber Fort",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/20191219_Fort_Amber%2C_Amer%2C_Jaipur_0955_9481.jpg/500px-20191219_Fort_Amber%2C_Amer%2C_Jaipur_0955_9481.jpg",
    link: "https://en.wikipedia.org/wiki/Amber_Fort",
    visitLink: "details.html?place=Amber_Fort"
  },
  {
    title: "Machu Picchu",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/250px-Machu_Picchu%2C_Peru.jpg",
    link: "https://en.wikipedia.org/wiki/Machu_Picchu",
    visitLink: "details.html?place=Machu_Picchu"
  },
  {
    title: "Christ the Redeemer",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Cristo_Redentor_-_Rio_de_Janeiro%2C_Brasil.jpg/500px-Cristo_Redentor_-_Rio_de_Janeiro%2C_Brasil.jpg",
    link: "https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)",
    visitLink: "details.html?place=Christ_the_Redeemer"
  },
  {
    title: "Eiffel Tower",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg/250px-Tour_Eiffel_Wikimedia_Commons.jpg",
    link: "https://en.wikipedia.org/wiki/Eiffel_Tower",
    visitLink: "details.html?place=Eiffel_Tower"
  },
  {
    title: "Statue of Liberty",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/250px-Statue_of_Liberty_7.jpg",
    link: "https://en.wikipedia.org/wiki/Statue_of_Liberty",
    visitLink: "details.html?place=Statue_of_Liberty"
  },
  {
    title: "Sydney Opera House",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sydney_Opera_House_Sails.jpg/250px-Sydney_Opera_House_Sails.jpg",
    link: "https://en.wikipedia.org/wiki/Sydney_Opera_House",
    visitLink: "details.html?place=Sydney_Opera_House"
  },
  {
    title: "Angkor Wat",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/20171126_Angkor_Wat_4712_DxO.jpg/500px-20171126_Angkor_Wat_4712_DxO.jpg",
    link: "https://en.wikipedia.org/wiki/Angkor_Wat",
    visitLink: "details.html?place=Angkor_Wat"
  },
  {
    title: "Stonehenge",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Stonehenge2007_07_30.jpg/250px-Stonehenge2007_07_30.jpg",
    link: "https://en.wikipedia.org/wiki/Stonehenge",
    visitLink: "details.html?place=Stonehenge"
  },
  {
    title: "Acropolis of Athens",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Classic_view_of_Acropolis.jpg/500px-Classic_view_of_Acropolis.jpg",
    link: "https://en.wikipedia.org/wiki/Acropolis_of_Athens",
    visitLink: "details.html?place=Acropolis_of_Athens"
  },
  {
    title: "Mount Fuji",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/View_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg/500px-View_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg",
    link: "https://en.wikipedia.org/wiki/Mount_Fuji",
    visitLink: "details.html?place=Mount_Fuji"
  },
  {
    title: "Burj Khalifa",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Burj_Khalifa.jpg/330px-Burj_Khalifa.jpg",
    link: "https://en.wikipedia.org/wiki/Burj_Khalifa",
    visitLink: "details.html?place=Burj_Khalifa"
  },
  {
    title: "Golden Gate Bridge",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/250px-GoldenGateBridge-001.jpg",
    link: "https://en.wikipedia.org/wiki/Golden_Gate_Bridge",
    visitLink: "details.html?place=Golden_Gate_Bridge"
  },
  {
    title: "Pyramids of Giza",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kheops-Pyramid.jpg/250px-Kheops-Pyramid.jpg",
    link: "https://en.wikipedia.org/wiki/Egyptian_pyramids",
    visitLink: "details.html?place=Pyramids_of_Giza"
  },
  {
    title: "Sagrada Familia",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Sagrada_Familia_1-4-24.jpg/500px-Sagrada_Familia_1-4-24.jpg",
    link: "https://en.wikipedia.org/wiki/Sagrada_Fam%C3%ADlia",
    visitLink: "details.html?place=Sagrada_Familia"
  },
  {
    title: "Louvre Museum",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/500px-Louvre_Museum_Wikimedia_Commons.jpg",
    link: "https://en.wikipedia.org/wiki/Louvre",
    visitLink: "details.html?place=Louvre_Museum"
  }
];

  function renderCards() {
    const cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = ""; 

    cardData.forEach(card => {
      const cardElement = document.createElement("div");
      cardElement.innerHTML = `
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${card.image}" height="235.99px" width="286.4px">
          <div class="card-body">
            <div class="card-title">${card.title}</div>
            <a href="${card.link}" target="_blank" class="btn btn-outline-primary">Wikipedia</a>
            <a href="${card.visitLink}" class="btn btn-outline-warning">More</a>
          </div>
        </div>
      `;
      cardContainer.appendChild(cardElement);
    });
  }


  function searchCards() {
    let input = document.getElementById('searchInput').value.toLowerCase(); 
    let cards = document.querySelectorAll('.card');  
    cards.forEach(function(card) {
      let title = card.querySelector('.card-title').textContent.toLowerCase();  
      if (title.indexOf(input) !== -1) {
        card.style.display = '';  
      } else {
        card.style.display = 'none'; 
      }
    });
  }

  renderCards();