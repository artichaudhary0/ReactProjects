import React from "react";
import { useState, useEffect } from "react";

function DataFetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    }, 5000);
  }, [data, loading]); // empty dependency array means runs only when mount

  return (
    <div>
      <button onClick={() => setLoading(!loading)}>onClick</button>
      <h2>Posts</h2>
      {loading ? (
        <p>Loading</p>
      ) : (
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default DataFetch;
