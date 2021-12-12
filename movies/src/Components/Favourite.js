import React, { Component } from "react";
import { movies } from "./getMovies";

export default class Favourite extends Component {
  constructor() {
    super();
    this.setState = {
      genres: [],
      currgen: "All Genres",
    };
  }

  render() {
    const movie = movies.results;
    console.log(movie);
    //GENRE_IDS IS OF TYPE ARRAY IN API....SO THEIR CORRESPODING VALUES ARE THIS.
    let genreids = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Sci-Fi",
      10770: "TV",
      53: "Thriller",
      10752: "War",
      37: "Western",
    };
    //DISPLAYING THE LEFT SIDE TABLE OF ALL GENRE'S AND ALL.

    let temp = [];
    movie.forEach((movieObj) => {
      if (!temp.includes(genreids[movieObj.genre_ids[0]])) {
        temp.push(genreids[movieObj.genre_ids[0]]);
      }
    });
    temp.unshift("All Genres");
    console.log(temp);
    // console.log(this.state.currgen);

    return (
      <div>
        <>
          <div className="main">
            <div className="row">
              {/* /////////////////////////DISPLAYING GENRE HERE////////////////////////////// */}
              <div className="col-3">
                <ul class="list-group fav-genere">
                  {temp.map((genre) => (
                    <li
                      class="list-group-item common"
                      // style={{
                      //   background: "#3f51b5",
                      //   color: "white",
                      //   fontWeight: "bold",
                      // }}
                    >
                      {genre}
                    </li>
                  ))}
                </ul>
              </div>
              {/* //////////////////////IN COL9 SPACE WE NEED 2 INPUT AND A TABLE AFTER THAT////////////// */}
              <div className="col-9">
                <div className="row fav-side ">
                  <input
                    type="text"
                    className="input-group-text col common"
                    placeholder="Search"
                  ></input>
                  <input
                    type="number"
                    className="input-group-text col common"
                    placeholder="Row Count"
                  ></input>
                </div>
                {/* ///////////////////////ACQUIRING TABLE FROM BOOTSTRAP//////////////////////////////// */}
                <div className="row">
                  <table class="table">
                    <thead>
                      <tr>
                        <th className="common" scope="col">
                          Title
                        </th>
                        <th className="common" scope="col ">
                          Genre
                        </th>
                        <th className="common" scope="col">
                          Popularity
                        </th>
                        <th className="common" scope="col">
                          Rating
                        </th>
                        <th className="common" scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {movie.map((movieObj) => (
                        <tr>
                          <td>
                            {" "}
                            <img
                              src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                              alt={movieObj.title}
                              style={{ width: "5rem", marginRight: "1rem" }}
                            ></img>{" "}
                            {movieObj.original_title}
                          </td>
                          <td>{genreids[movieObj.genre_ids[0]]}</td>
                          <td>{movieObj.popularity}</td>
                          <td>{movieObj.vote_average}</td>
                          <td>
                            <button type="button" class="btn btn-danger">
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* ////////////////////////APPLYING PAGINATION/////////////////////////////////////////////                 */}
                <nav aria-label="Page navigation example ">
                  <ul class="pagination">
                    <li class="page-item ">
                      <a class="page-link common" href="#">
                        Previous
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link common" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </>
      </div>
    );
  }
}
