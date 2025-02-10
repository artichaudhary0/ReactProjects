import React from "react";

function Cart({ items, onRemoveFromCart }) {
  // total price of items in cart
  //   const total = item.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "8px",
        maxWidth: "300px",
      }}
    >
      <h2 style={{ marginTop: 0 }}>Shopping cart</h2>

      {items.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "5px",
            padding: "10px",
            backgroundColor: "white",
            borderRadius: "5px",
          }}
        >
          <div>
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <p style={{ color: "black" }}>{item.name}</p>
            <p style={{ color: "black" }}>${item.price}</p>

            <button
              onClick={() => onRemoveFromCart(item.id)}
              style={{
                color: "white",
                padding: "8px 15px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
