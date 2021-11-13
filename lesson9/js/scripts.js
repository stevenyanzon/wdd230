function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle('hidenav');
}

function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}

const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject){
    const towns = jsonObject ["towns"];

    getInfo(towns, 2);
    getInfo(towns, 6);
    getInfo(towns, 0);
  });

function getInfo(list, index) {
  let card = document.createElement("article");
  let h2 = document.createElement("h2");
  let content = document.createElement("div");
  let motto = document.createElement("p");
  let year = document.createElement("p");
  let population = document.createElement("p");
  let rain = document.createElement("p");
  let image = document.createElement("img");
  let div = document.createElement("div");

  h2.textContent = list[index].name;
  motto.textContent = list[index].motto;
  year.textContent = `Year founded: ${list[index].yearFounded}`;
  population.textContent = `Population: ${list[index].currentPopulation}`;
  rain.textContent = `Annual Rain Fall: ${list[index].averageRainfall}`;

  card.setAttribute("class", `town${index}`);
  content.setAttribute("class", "content");
  motto.setAttribute("class", "motto");
  div.setAttribute("class", "image");

  image.setAttribute("src", `images/${list[index].photo}`);
  image.setAttribute("alt", `${list[index].name}`);

  content.appendChild(h2);
  content.append(motto);
  content.appendChild(year);
  content.appendChild(population);
  content.appendChild(rain);
  card.appendChild(content);
  div.appendChild(image);
  card.appendChild(div);
  
  document.querySelector("section.towns").appendChild(card);
};