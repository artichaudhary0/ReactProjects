const ProductCard = ({ product, onBuy }) => {
  console.log(product);
  return (
    <>
      <div
        style={{
          border: "1px solid purple",
          padding: "10px",
          margin: "10px",
          borderRadius: "12px",
          backgroundColor: product.isStock ? "grey" : "dark-grey",
        }}
      >
        <ul>
          {product.map((data, index) => (
            <li>{data.name}</li>
          ))}
        </ul>

        {/* <h3>{product[0]["name"]}</h3> */}
      </div>
    </>
  );
};

export default ProductCard;
