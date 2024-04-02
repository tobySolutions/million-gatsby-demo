import * as React from "react";
import { block } from "million/react";


const App = () => {
  return (
    <div>
      <h1>Hello, Million with Gatsby!</h1>
      <OmoOlogo />
      <OmoOlogoBlock />
    </div>
  );
};

const OmoOlogoBlock = block(() => {
  return <p>OmoOlogo Block</p>;
});

const OmoOlogo = () => {
  return <p style={{ color: "green", fontSize: "30px" }}>OmoOlogo React Component demo</p>;
};


export default App;

export const Head = () => <title>Home Page</title>
