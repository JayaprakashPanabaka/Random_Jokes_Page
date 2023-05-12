let jokeTextEl = document.getElementById("jokeText");
let jokeBtnEl = document.getElementById("jokeBtn");
let spinnerEl = document.getElementById("spinner");

function getRandomJoke() {
    spinnerEl.classList.toggle("d-none");
    let url = "https://apis.ccbp.in/jokes/random";
    let options = {
        method: "GET"
    };

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let randomJoke = jsonData.value;
            jokeTextEl.textContent = randomJoke;
            jokeTextEl.classList.remove("d-none");
            spinnerEl.classList.toggle("d-none");
        })
}
jokeBtnEl.addEventListener("click", getRandomJoke);