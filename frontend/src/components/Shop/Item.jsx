const Item = (props) => {
    const productId = props.match.params.id;
    const product = props.data.find((product) => product.id === productId);
  
    if (!product) {
      return <div>Product not found</div>;
    }
  
    const { title, description, price, images } = product;
  
    return (
      <div className="item">
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{price}£</p>
        <img src={images[0].file} alt="images" width={"200px"} height={"200px"} />
      </div>
    );
  };

export default Item;
