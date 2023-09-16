import "./App.css";
import { Header } from "./Components/Header";
import { Movie } from "./Components/Movie/Movie";
import Moviedetail from "./Components/MovieJsonFile/Moviedetail.json";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        {Moviedetail.map((element) => (
          <Movie
            poster={element.Poster}
            title={element.Title}
            year={element.Year}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
