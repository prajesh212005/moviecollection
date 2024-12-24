let movies = [];
let selectedGenre;

const listMoviesByGenre = (genre) => {
    return movies.filter(movies => movies.genre === genre);
};

const listMoviesByYear = (year) => {
    return movies.filter(movies => movies.release_year == year);
};

$(document).ready(function() {
    // When a genre is selected
    $("#genreDropdownMenuMovie a").click(function(event) {
        // event.preventDefault(); // Prevent the default action
        selectedGenre = $(this).data("genre"); // Get selected genre
        $('#genre').val(selectedGenre); // Update hidden input

        // Update the button text, keeping the dropdown caret 
         $('#genreDropdownMovie').html(selectedGenre + ' <span class="caret"></span>');
    });

    // Add movie button click handler
    $("#btn1").click(function() {
        addmovies();
    });

    // Year selection dropdown
    $("#yearDropdownMenu a").click(function(event){
            event.preventDefault()
            selectedYear=$(this).text()
            $('#yearDropdown').html(selectedYear)
    })
    // Genre Selection dropdown
    $("#genreDropdownMenu a").click(function(event){
        event.preventDefault()
        selectedGenre1=$(this).data("genre");
        $('#genreDropdown').html(selectedGenre1)
    })

    $("#genreDropdownMenu a").click(function(event) {
        
        let SpecificGenreMovie=listMoviesByGenre(genreDropdown.innerHTML);
    
        for (let index = 0; index < SpecificGenreMovie.length; index++) {
            const element = SpecificGenreMovie[index];
            addSpecificGenre(element)
        }
    });

    $("#yearDropdownMenu a").click(function(event) {
        
        let SpecificYearMovie=listMoviesByYear(yearDropdown.innerHTML);
        console.log(SpecificYearMovie);
        
        for (let index = 0; index < SpecificYearMovie.length; index++) {
            const element = SpecificYearMovie[index];
            addSpecificYear(element)
        }
    });

});

function addmovies() {
    let title1 = document.getElementById("movieName").value;
    let oldgenre=document.getElementById("genreDropdownMovie").innerHTML;
    let genre1 = selectedGenre;
    let rating1 = document.getElementById("rating").value;
    let release_year1 = document.getElementById("releaseYear").value;
    let movie = {
        title: title1,
        genre: genre1,
        rating: rating1,
        release_year: release_year1
    };
    movies.push(movie);
    let row = document.createElement("tr");
    let a = document.createElement("td");
    a.innerHTML = movie.title;
    let b = document.createElement("td");
    b.innerHTML = movie.genre;
    let c = document.createElement("td");
    c.innerHTML = movie.rating;
    let d = document.createElement("td");
    d.innerHTML = movie.release_year;
    row.append(a, b, c, d);
    let temp = document.getElementById("movieTableBody");
    temp.append(row);
        //  document.getElementById("movieName").value=" ";
        //  document.getElementById("rating").value=" ";
        //  document.getElementById("releaseYear").value=" ";
    //  document.getElementById("genreDropdownMovie").innerHTML=ol;

    //highest rated in collection

    addHighestRated(movies);
}

function addSpecificGenre(Specific_Movie) {
    document.getElementById("genreTableBody").innerHTML="";
    let title1 =Specific_Movie.title
    let genre1 = Specific_Movie.genre
    let rating1 = Specific_Movie.rating
    let release_year1 = Specific_Movie.release_year
    let movie = {
        title: title1,
        genre: genre1,
        rating: rating1,
        release_year: release_year1
    };
    let row = document.createElement("tr");
    let a = document.createElement("td");
    a.innerHTML = movie.title;
    let b = document.createElement("td");
    b.innerHTML = movie.genre;
    let c = document.createElement("td");
    c.innerHTML = movie.rating;
    let d = document.createElement("td");
    d.innerHTML = movie.release_year;
    row.append(a, b, c, d);
    let temp = document.getElementById("genreTableBody");
    temp.append(row);
}

function addSpecificYear(Specific_Movie) {
    document.getElementById("yearTableBody").innerHTML="";
    let title1 =Specific_Movie.title
    let genre1 = Specific_Movie.genre
    let rating1 = Specific_Movie.rating
    let release_year1 = Specific_Movie.release_year
    let movie = {
        title: title1,
        genre: genre1,
        rating: rating1,
        release_year: release_year1
    };
    let row = document.createElement("tr");
    let a = document.createElement("td");
    a.innerHTML = movie.title;
    let b = document.createElement("td");
    b.innerHTML = movie.genre;
    let c = document.createElement("td");
    c.innerHTML = movie.rating;
    let d = document.createElement("td");
    d.innerHTML = movie.release_year;
    row.append(a, b, c, d);
    let temp = document.getElementById("yearTableBody");
    temp.append(row);
}

function addHighestRated(movies)
{
    document.getElementById("ratingTableBody").innerHTML="";
    let HighestMovieIndex=0;
    for (let index = 1; index < movies.length; index++) {
        const element = movies[index];
        if(element.rating>movies[HighestMovieIndex].rating)
        {
            HighestMovieIndex=index;
        }
    }

    let Specific_Movie=movies[HighestMovieIndex]
    let title1 =Specific_Movie.title
    let genre1 = Specific_Movie.genre
    let rating1 = Specific_Movie.rating
    let release_year1 = Specific_Movie.release_year
    let movie = {
        title: title1,
        genre: genre1,
        rating: rating1,
        release_year: release_year1
    };
    let row = document.createElement("tr");
    let a = document.createElement("td");
    a.innerHTML = movie.title;
    let b = document.createElement("td");
    b.innerHTML = movie.genre;
    let c = document.createElement("td");
    c.innerHTML = movie.rating;
    let d = document.createElement("td");
    d.innerHTML = movie.release_year;
    row.append(a, b, c, d);
    let temp = document.getElementById("ratingTableBody");
    temp.append(row);
}