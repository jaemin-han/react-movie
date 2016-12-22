const db = require('../lib/dbConnect');

// GET ALL MOVIES
function getAllMovies(req, res, next) {
  console.log('inside the getAllMovies function');
  db.any(`SELECT *
          FROM movies;`)
  .then(movies => {
    res.movies = movies;
    next();
  })
  .catch(err => next(err));
}

// SAVE MOVIE TO DATABASE
function saveToDatabase(req, res, next) {
  db.none(`INSERT INTO movies (title, poster)
           VALUES ($/title/, $/poster/);`, req.body)
  .then(movies => {
    res.results = movies;
    next();
  })
  .catch(err => next(err));
}

// DELETE MOVIE FROM DATABASE
function deleteMovie(req, res, next) {
  db.result(`DELETE FROM movies
              WHERE movie_id = $1`, [req.params.movie_id])
  .then(movies => {
    res.result = movies;
    next();
  })
  .catch(err => next(err));
}

// UPDATE MIVE INFO
function editMovie(req, res, next) {
  db.none(`UPDATE movies
           SET title = $1, imdbrating = $2, runtime = $3
           WHERE movie_id = $4,` [req.body.title, req.body.imdbRating, req.body.runtime, req.body.movie_id])
  .then(() => {
    next();
  })
  .catch(err => {
    next(err);
  });
}

module.exports = {
  getAllMovies,
  saveToDatabase,
  deleteMovie,
  editMovie,
};


