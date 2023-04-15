const ol = document.querySelector("ol");

const favMovies = [
    {
        name: "Scream",
        year: 1996,
        director: "Wes Craven",
        poster: "https://m.media-amazon.com/images/I/5109-e8TSyL._AC_.jpg"
    },
    {
        name: "Your Name",
        year: 2016,
        director: "Makoto Shinkai",
        poster: "https://m.media-amazon.com/images/I/61KYVvWl-LL._AC_UF894,1000_QL80_.jpg"
    },
    {
        name: "Mean Girls",
        year: 2004,
        director: "Mark Waters",
        poster: "https://m.media-amazon.com/images/I/51CSOTO+itL._AC_.jpg"
    }

];

const template = favMovies.map( movie => `
<li>
    <p>Name: ${movie.name}</p>
    <p>Year: ${movie.year}</p>
    <p>Director: ${movie.director}</p>
    <img src= ${movie.poster} height="500">
</li>
`)

ol.innerHTML = template.join('');