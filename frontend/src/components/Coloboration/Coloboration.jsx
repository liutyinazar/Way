import "./Coloboration.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Coloboration = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/v1/coloboration/"
        );
        console.log(response.data);
        setData(response.data); // Ви маєте встановити response.data в стан data
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="coloboration">
      <div className="container_menu">
        <div className="coloboration_title">
          <p>
            <Link to="/" className="url_menu">
              Головна
            </Link>
            /
            <Link to="/collaboration" className="url_menu">
              Колоборації
            </Link>
          </p>
          <h1>КОЛОБОРАЦІЇ</h1>
        </div>
        <div className="coloboration_item">
          {data &&
            data.map((data) => (
              <div key={data.id} className="coloboration_link">
                <div className="coloboration_items_image">
                  <img
                    src={data.cover}
                    alt="collaboration"
                    width={"438px"}
                    height={"255px"}
                  />
                </div>
                <div className="coloboration_items_text">
                  <h1>{data.title}</h1>
                  <p>{data.content.slice(0, 250)}...</p>
                  <button className="coloboration_button">ПРОДОВЖИТИ</button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Coloboration;
