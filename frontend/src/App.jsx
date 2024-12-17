import axios from "axios";
import React from "react";

const App = () => {
  async function getData() {
    const info = await axios.get("/api/auth").then((response) => {
      return response;
    });

    console.log(info, "This is the response");
  }
  getData();

  return <div className="">Hello world</div>;
};

export default App;
