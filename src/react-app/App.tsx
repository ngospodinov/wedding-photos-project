// src/App.tsx

import { useState } from "react";
import "./App.css";
import { env } from "cloudflare:workers";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("unknown");

  return (
    <>
      <h1>TEST</h1>
      <div className="card">
        <button
          onClick={() => setCount((count) => count + 1)}
          aria-label="increment"
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <button
          onClick={() => {
            fetch("/api/")
              .then((res) => res.json() as Promise<{ name: string }>)
              .then((data) => setName(data.name));
          }}
          aria-label="get name"
        >
          Name from API is: {name}
        </button>

        <button
          onClick={() => {
            setName(env.weddingKv.get("test"));
          }}
          aria-label="get name"
        >
          Name from API is: {name}
        </button>
      </div>
    </>
  );
}

export default App;
