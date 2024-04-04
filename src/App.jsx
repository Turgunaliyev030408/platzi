import { useEffect, useState } from "react";
import "./App.css";
import { apis } from "./companent/api";

function App() {
  const [data, setData] = useState([]);
  const appdata = () => {
    apis.get().then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    appdata();
  }, []);

  return (
    <>
      <div className="container">
        <div className="cart-wrapper">
          {data?.map((item) => (
            <div key={item.id} className="card">
              <img className="cart-images" src={item.images} alt="images" />
              <h1>{item.description}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
