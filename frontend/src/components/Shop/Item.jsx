import "./Item.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const Item = (props) => {
  const { data } = props.location.state;

  const [count, setCount] = useState(1);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [showWarning, setShowWarning] = useState(false);

  const [showDetails, setShowDetails] = useState(false);

  const handleInputChange = (event) => {
    const newValue = parseInt(event.target.value);

    if (newValue > data.quantity) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
      setCount(newValue);
    }
  };

  function toggleMenu() {
    setShowDetails(!showDetails);
  }

  return (
    <div className="item">
      <div className="container_menu">
        <div className="item_wrapper">
          <p>
            <Link to="/" className="url_menu">
              Головна
            </Link>
            /
            <Link to="/shop" className="url_menu">
              Магазин
            </Link>
            /<p className="url_menu">{data.title}</p>
          </p>
          <h1>{data.type.toUpperCase()}</h1>
        </div>
        <div className="item_content">
          <div className="item_image">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {data.images.map((images, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={images.file}
                    alt={`slider_img`}
                    width={"428px"}
                    height={"284px"}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {data.images.map((images, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={images.file}
                    alt={`slider_img`}
                    width={"130px"}
                    height={"121px"}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="item_info">
            <div className="item_title">
              <p>{data.title}</p>
            </div>
            <div className="item_price">
              <p>£{data.price}</p>
            </div>
            <div className="item_quantity">
              <div className="item_quantity_numb">
                <p>Кількість</p>
                <input
                  type="number"
                  min="1"
                  value={count}
                  onChange={handleInputChange}
                />
              </div>

              <div className="item_button">
                <button>Додати в корзину</button>
                <button>Купити</button>
              </div>
            </div>
            {showWarning && (
              <p className="item_warning" style={{ color: "red" }}>
                Більше товару немає на складі!
              </p>
            )}

            <div className="item_detail">
              <div className="item_detail_label">
                <p>Деталі</p>
                <button onClick={toggleMenu}>+</button>
              </div>
              {showDetails && (
                <ul className="item_detail_list">
                  <li>Метал: {data.metal}</li>
                  <li>Тип: {data.type}</li>
                  <li>
                    Камінь: {data.stone === "" ? "Без каміння" : data.stone}
                  </li>
                  <li>
                    Колоборація:{" "}
                    {data.coloboration === ""
                      ? "Немає"
                      : data.coloboration.title}
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
