const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    
    //loop through every record
    for (let i = 0; i < prophets.length; i++ ) {

      //create HTML Element
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let bday = document.createElement("p");
      let bplace = document.createElement("p");
      let image = document.createElement("img");

      //set order of prophets 
      card.setAttribute("class", `order${prophets[i].order}`)

      //pass the value of h2
      h2.textContent = `${prophets[i].name} ${prophets[i].lastname}`;

      //Value of Birthdate
      bday.textContent = `Birth Date: ${prophets[i].birthdate}`;

      //Value of Birthplace
      bplace.textContent = `Birth Place: ${prophets[i].birthplace}`;

      //set src and alt to img
      image.setAttribute("src", prophets[i].imageurl);
      image.setAttribute("alt", `${prophets[i].name} ${prophets[i].lastname} - ${prophets[i].order}`);

      //append the values
      card.appendChild(h2);
      card.appendChild(bday);
      card.appendChild(bplace);
      card.appendChild(image);

      document.querySelector("div.cards").appendChild(card);
      
    }
  });

