class Exercise3 {
  #movies = new Map();
  //key is the genre: string, value is array of movies
  // example: { thriller: [{ id: '1', title: 'The American'}, { id: '2', title: 'Arcadian'}] }
  add_genre(genre) {
    // add genre if genre does not exist
    if (!this.#movies.has(genre)) {
      this.#movies.set(genre, []);
      // return true if the genre is added successfully, false otherwise
      return true;
    }
    return false;
  }
  add_movie_in_genre(genre, new_movie) {
    // add movie if movie id does not exist
    if (!this.#movies.has(genre)) return false;

    const movies = this.#movies.get(genre);

    // return true if the movie is added successfully, false otherwise
    if (movies.some((movie) => movie.id == new_movie.id)) {
      return false;
    }
    movies.push(new_movie);
    return true;
  }
  update_movie_title_by_genre_and_movie_id(genre, movie_id, new_title) {
    if (!this.#movies.get(genre)) return false;

    // update a movie within a certain genre
    const movies = this.#movies.get(genre);

    const movie = movies.find((movie) => movie.id == movie_id);

    if (!movie) return false;

    movie.title = new_title;

    // return true if the movie's title is updated successfully, false otherwise
    return true;
  }
  delete_movie_by_genre_and_movie_id(genre, movie_id) {
    // delete movie
    if (!this.#movies.has(genre)) return false;

    const movies = this.#movies.get(genre);

    const index = movies.findIndex((m) => m.id == movie_id);

    if (index == -1) return false;

    movies.splice(index, 1);
    // return true if the movie is delete successfully, false otherwise
    return true;
  }
  get_movie_title_by_id(genre, movie_id) {
    // return the movie title
    if (!this.#movies.has(genre)) return null;
    const movies = this.#movies.get(genre);
    const movie = movies.find((m) => m.id == movie_id);

    return movie ? movie.title : null;
  }
}

const ex = new Exercise3();

// Add genres
console.log(ex.add_genre("thriller")); // true
console.log(ex.add_genre("comedy")); // true
console.log(ex.add_genre("thriller")); // false (already exists)

// Add movies
console.log(
  ex.add_movie_in_genre("thriller", { id: "1", title: "The American" })
); // true
console.log(ex.add_movie_in_genre("thriller", { id: "2", title: "Arcadian" })); // true
console.log(ex.add_movie_in_genre("thriller", { id: "1", title: "Duplicate" })); // false

// Update title
console.log(
  ex.update_movie_title_by_genre_and_movie_id(
    "thriller",
    "2",
    "Arcadian Updated"
  )
); // true
console.log(
  ex.update_movie_title_by_genre_and_movie_id("thriller", "3", "No Movie")
); // false

// Get title
console.log(ex.get_movie_title_by_id("thriller", "2")); // Arcadian Updated

// Delete movie
console.log(ex.delete_movie_by_genre_and_movie_id("thriller", "1")); // true
console.log(ex.delete_movie_by_genre_and_movie_id("thriller", "3")); // false
