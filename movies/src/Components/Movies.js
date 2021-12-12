import React, { Component } from "react";
import axios from "axios";

export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      hover: "",
      pArr: [1],
      currPage: 1,
      movies: [],
    };
  }

  async componentDidMount() {
    // const res = await axios.get(
    //   `https://api.themoviedb.org/3/movie/popular?api_key=f1affc5603c4d5b32ab137a0b8f355ce&language=en-US&page=${this.state.currPage}`
    // );

    // let data = res.data;
    // // console.log(data);
    // this.setState({
    //   movies: [...data.results],
    // });
    this.changeMovies();
    console.log("MOUNTING PROCESS");
  }

  changeMovies = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=f1affc5603c4d5b32ab137a0b8f355ce&language=en-US&page=${this.state.currPage}`
    );

    let data = res.data;
    this.setState({
      movies: [...data.results],
    });
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////////
  // HANDLING PAGE NAVIGATION...WHEN WE MOVE FROM 1ST PAGE TO 2ND
  handleRightClick = () => {
    console.log("NEXT");
    let tempArr = [];
    for (let i = 1; i <= this.state.pArr.length + 1; i++) {
      tempArr.push(i);
      //parr = 1, tempArr = 1,2...need to display tempArr..right
    }
    this.setState(
      {
        pArr: [...tempArr],
        currPage: this.state.currPage + 1,
      },
      this.changeMovies
    );
    // PASSING CHANGEMOIVES AS A CALLBACK TO SETSTATE..
    // SET STATE IS AN ASYNC Function...IF CALL IT SEPARATELY THEN BOTH THE CALLING AND UPDATING THE STATE WOULD GO ON
    // PARALLELY...WHICH WE DON'T WANT. WE WANT FIRST STATE TO GET CHANGE AND ONCE IT UPDATE & REFLECT THE CHANGE THEN CALL
    // THE changeMovies()
    // console.log(tempArr);

    // this.changeMovies();
  };

  handleLeftClick = () => {
    if (this.state.currPage != 1) {
      this.setState(
        {
          currPage: this.state.currPage - 1,
        },
        this.changeMovies
      );
    }
  };

  handleOnPageClick = (value) => {
    if (value != this.state.currPage) {
      this.setState(
        {
          currPage: value,
        },
        this.changeMovies
      );
    }
  };

  render() {
    // let movie = movies.results;
    // console.log(movie); movie = array.
    return (
      // ////////////////////////////////////////////////////////////////////////////////////////////////////////
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////
      //APPLYING LOADER IF MOVIES IS BEING LOADED...IF LOADING COMPLETES THEN DISPLAYING IT USING BOOTSTRAP CARD.
      <>
        {this.state.movies.length == 0 ? (
          <div class="spinner-border text-info" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div>
            <h3
              className="text-center common trend"
              style={{ marginTop: "2rem" }}
            >
              <strong>TRENDING TODAY</strong>
            </h3>
            {/* //ADDING CARD TO SHOW REST OF THE MOVIES. */}
            <div className="movies-list common">
              {this.state.movies.map((movieObj) => (
                <div
                  className="card movies-card "
                  onMouseEnter={() => this.setState({ hover: movieObj.id })}
                  onMouseLeave={() => this.setState({ hover: "" })}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                    alt={movieObj.title}
                    className="card-img-top banner-img movies-img"
                  />
                  {/* <div className="card-body"> */}
                  <h5 className="card-title movies-title">
                    {movieObj.original_title}
                  </h5>
                  {/* <p className="card-text movies-text">{movieObj.overview}</p> */}
                  <div
                    className="button-wrapper"
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center",
                    }}
                  >
                    {this.state.hover == movieObj.id && (
                      <a className="btn btn-info movies-button common">
                        Add To Favourites
                      </a>
                    )}
                  </div>
                  {/* </div> */}
                </div>
              ))}
            </div>
            {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* APPLYING PAGINATION  */}
            <div
              className="page"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link common" onClick={this.handleLeftClick}>
                      Previous
                    </a>
                  </li>
                  {this.state.pArr.map((val) => (
                    <li class="page-item common">
                      <a
                        class="page-link common"
                        onClick={() => this.handleOnPageClick(val)}
                      >
                        {val}
                      </a>
                    </li>
                  ))}
                  <li class="page-item">
                    <a class="page-link common" onClick={this.handleRightClick}>
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </>
    );
  }
}
