import { useState, useEffect } from "react";
import "./App.css";
import Loading from "./Components/Loading";
import Body from "./Components/Body";

function App() {
  const [data, setData] = useState([]);
  const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=32a3c6d4d6544594a685f7507719369e"
      )
        .then((response) => response.json())
        .then((json) => {
          // console.log(json);
          setData(json);

          setTimeout(() => {
            setcompleted(true);
          }, 1000);
        });
    }, 2000);
  }, []);

  return (
    <>
      {!completed ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div>
          <Body />
        </div>
      )}
    </>
  );
}

export default App;
