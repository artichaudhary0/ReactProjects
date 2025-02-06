import "./App.css";
import ProductCard from "./components/ProductCard";
import PropsDefault from "./components/PropsDefault";

function App() {
  // function handleSubmit() {
  //   alert("hello");
  // }

  // const handleSubmit = () => alert("hello");

  const product = [
    { name: "Laptop", isStock: true },
    { name: "Pc", isStock: true },
    { name: "Mobile", isStock: false },
  ];

  return (
    <>
      <ProductCard product={product} />
      {/* <PropsDefault onClick={handleSubmit} /> */}
    </>
  );
}

export default App;
