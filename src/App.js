import React from "react";
import axios from "axios";
/*
  1. 네트워크에 존재하는 데이터를 가져와서 const 변수에 넣는다.
    How?
    : fetch - promise (x)
    : axios
  2. const 변수를 View 시킨다.
*/
// componentDidMount
// 라이프사이클 - 리엑트가 구현되는 순서
// 컴포넌트(App) 만들어진 후 -> 자동으로 실행하는 함수
// render() -> didMount();

const API_KEY = "2e3465c88b40bfa4111a4d4a975a17ec";
const URL = "https://api.themoviedb.org/3/";
const param = {
  path: "movie/popular",
  lan: "en"
};

function App() {
  const axios = require("axios"); //네트워크에 있는 데이터를 불러오는 기능

  let movies = null;

  axios
    .get(
      "https://api.themoviedb.org/3/movie/popular?api_key=2e3465c88b40bfa4111a4d4a975a17ec&language=en-US&page=1"
    )
    .then(function(response) {
      // handle success

      movies = response.data.results; // 영화 20개
      console.log(movies);

      const movieList = document.getElementById("movieList");

      for (let i = 0; i < movies.length; i++) {
        const li = document.createElement("li");
        const span = document.createElement("span");
        const img = document.createElement("img");

        console.log(movies[i].poster_path);
        img.src = "https://image.tmdb.org/t/p/w500" + movies[i].poster_path;
        span.innerHTML = movies[i].title;
        li.appendChild(span);
        li.appendChild(img);
        movieList.appendChild(li);
      }
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .finally(function() {
      // always executed
    });

  // -> 자바스크립트
  // React Source

  return <ol id="movieList"></ol>;
}

export default App;
