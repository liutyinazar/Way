import "./Shop.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Shop = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/v1/jewelry/"
        );
        setData(response.data); // Ви маєте встановити response.data в стан data
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="shop">
      <div className="container_menu">
        <div className="shop_title">
          <p>
            <Link to="/" className="url_menu">
              Головна
            </Link>
            /
            <Link to="/shop" className="url_menu">
              Магазин
            </Link>
          </p>
          <h1>Магазин</h1>
        </div>
        <div className="shop_item">
          {data &&
            data.map((data) => (
              <Link to={`/shop/item/${data.id}`}>
                <div key={data.id} className="shop_link">
                  <img
                    src={data.images[0].file}
                    alt="images"
                    width={"200px"}
                    height={"200px"}
                  />
                  <div className="shop_content">
                    <p>{data.title}</p>
                    <p>{data.price}£</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
