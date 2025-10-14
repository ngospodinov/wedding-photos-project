// src/App.tsx

import { useState } from "react";
import "./App.css";

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
          onClick={async () => {
            try {
              const res = await fetch("/test"); // endpoint from your Worker
              if (!res.ok) throw new Error("Failed to fetch");
              const data = await res.json();
              setName(data.name ?? "(no value)");
            } catch (err) {
              console.error(err);
              setName("(error)");
            }
          }}
          aria-label="get name"
        >
          Name from KV is: {name || "(none yet)"}
        </button>
      </div>
    </>
  );
}

export default App;
