var table = document.getElementById('table');
var form = document.getElementById('form');

var animeList = [];
form.addEventListener('submit', submitHandler);

// create an empty object for anime
function Anime(animeTitle, category, random){
    this.animeTitle = animeTitle;
    this.category = category;
    this.random = random;
    this.remove = "<input type='button' value='X' id='removeButton' name='removeButton' onclick='removeButton()'>";

    animeList.push(this);
}

Anime.prototype.removeButton = function () {
    
}

// create a prototype function to show the table
Anime.prototype.createTable = function () {

    var tableRaw = document.createElement('tr');
    table.appendChild(tableRaw);

    var tableTitle = document.createElement('td');
    tableTitle.textContent = this.animeTitle;
    table.appendChild(tableTitle);

    var tableCategory = document.createElement('td');
    tableCategory.textContent = this.category;
    table.appendChild(tableCategory);

    var tableRandom = document.createElement('td');
    tableRandom.textContent = this.random;
    table.appendChild(tableRandom);

    var tableRemove = document.createElement('td');
    tableRemove.innerHTML = this.remove;
    table.appendChild(tableRemove);

}

function submitHandler(event) {
    event.preventDefault();

    var animeTitle = event.target.title.value;
    var category = event.target.category.value;
    var random = Math.floor(Math.random() * (7 - 1 +1) + 1);
    console.log(animeTitle, category);
    var anime = new Anime(animeTitle, category, random);
    anime.createTable();
    localStorage.setItem('anime-character', JSON.stringify(animeList));
}

function render(){
    if(localStorage.getItem('anime-character')){
        var localData = JSON.parse(localStorage.getItem('anime-character'));
        for (var i = 0; i < localData.length; i++){
            var data = new Anime(
                localData[i].animeTitle,
                localData[i].category,
                localData[i].random
            );
            console.log(data);
            data.createTable();
        }
    }
}

render();