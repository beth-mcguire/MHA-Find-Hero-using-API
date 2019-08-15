const content = document.querySelector(".content");
const form = document.querySelector("#form");
const nameValue = document.querySelector("#name");
const submit = document.querySelector("#submit");

function getCharacters() {
  getAPI()
    .then(data => {
      const filteredList = data.filter(name =>
        name.name.toLowerCase().includes(nameValue.value.toLowerCase())
      );
      content.innerHTML = "";
      filteredList.forEach(item => {
        const div = document.createElement("div");
        div.innerHTML = `
          <div class="character">
          <div class="image"><img src="${item.image_url}" alt="${
          item.name
        } picture"></div>
          <div class="character-info">
          <h3>${item.name}</h3>
          <a href="${item.url}" target="_blank">Read More Here</a>
          </div>
          </div>`;
        content.appendChild(div);
      });
    })
    .catch(err => {
      console.log(err);
    });
}

const getChars = e => {
  e.preventDefault();
  if (nameValue.value.length > 0) {
    getCharacters();
  } else {
  }
};

form.addEventListener("submit", getChars);
