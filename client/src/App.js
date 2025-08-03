import React from "react";
import UrlForm from "./components/UrlForm";
import Stats from "./components/Stats";

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>🔗 URL Shortener</h1>
      <UrlForm />
      <Stats />
    </div>
  );
}

export default App;

