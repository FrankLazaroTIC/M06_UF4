// Claus
const keys = {
    api_key: 'ad5bad57ecc72b13ce3eb9c98f216e49', // Clau de l'API
    session_id: '6045572f6cb80e3f15ba36614d47f2e66197a503', // ID de la sessió
    account_id: '21233641' // ID del compte
}

let moviesResult = document.getElementById("moviesResult"); // Obtenim l'element on es mostraran els resultats
let total_pages = 0; // Inicialitzem el total de pàgines a 0
let current_page = 1; // Inicialitzem la pàgina actual a 1
let current_query = ''; // Inicialitzem la consulta actual a buida

// Funció per marcar una pel·lícula com a favorita
async function setFav(id, favBool){
    const response = await fetch(`https://api.themoviedb.org/3/account/${keys.account_id}/favorite?api_key=${keys.api_key}&session_id=${keys.session_id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            media_type: 'movie',
            media_id: id,
            favorite: !favBool
        })
    });

    if (response.ok) {
        console.log(`Movie ID ${id} marked as ${!favBool}`);
        showFavs();
    } else {
        console.error('Error:', response.status, response.statusText);
    }
}

// Funció per mostrar les pel·lícules favorites
async function showFavs() {
    const response = await fetch(`https://api.themoviedb.org/3/account/${keys.account_id}/favorite/movies?api_key=${keys.api_key}&session_id=${keys.session_id}`);
    const data = await response.json();
    const movies = data.results;
    movies.forEach(movie => printMovie(movie, true, false));
}

// Funció per cercar pel·lícules
async function searchMovies(query) {
    current_query = query;
    clearInput();
    removeActive();
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${keys.api_key}&query=${query}&page=${current_page}`);
    const data = await response.json();
    total_pages = data.total_pages;
    const movies = data.results;
    movies.forEach(movie => printMovie(movie, false, false));
}

// Event listener per mostrar les pel·lícules favorites quan es fa clic
document.getElementById("showFavs").addEventListener("click", function(){
    removeActive();
    this.classList.add("active");

    showFavs();
})

// Event listener per mostrar les pel·lícules per veure quan es fa clic
document.getElementById("showWatch").addEventListener("click", function(){
    removeActive();
    this.classList.add("active");

    //showWatch();
})

// Event listener per cercar pel·lícules quan es premeu Enter
document.getElementById("search").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchMovies(this.value);
    }
});

// Event listener per cercar pel·lícules quan es fa clic a la icona de cerca
document.querySelector(".searchBar i").addEventListener("click", ()=>searchMovies(document.getElementById("search").value));

// Event listener per netejar l'entrada quan es fa clic
document.getElementById("search").addEventListener('click', ()=>clearInput()); 

// Funció per netejar l'entrada
function clearInput(){
    document.getElementById("search").value="";
}

// Funció per eliminar l'activació
function removeActive(){
    document.querySelectorAll(".menu li a").forEach(el=>el.classList.remove("active"));
}

// Funció per imprimir una pel·lícula
function printMovie(movie, fav, watch){
    let favIcon = fav ? 'iconActive' : 'iconNoActive';
    let watchIcon = watch ? 'iconActive' : 'iconNoActive';

    moviesResult.innerHTML += `<div class="movie">
                                    <img src="https://image.tmdb.org/t/p/original${movie.poster_path}">
                                    <h3>${movie.original_title}</h3>
                                    <div class="buttons">
                                        <a id="fav" onClick="setFav(${movie.id}, ${!fav})"><i class="fa-solid fa-heart ${favIcon}"></i></a>
                                        <a id="watch" onClick="setWatch(${movie.id}, ${!watch})"><i class="fa-solid fa-eye ${watchIcon}"></i></a>
                                    </div>`;
}

// Event listener per carregar més pel·lícules quan es desplaça fins al final de la pàgina
window.addEventListener('scroll', async () => {
    const {scrollTop, scrollHeight,clientHeight} = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5 && current_page < total_pages) {
        current_page++;
        await searchMovies(current_query);
    }
});