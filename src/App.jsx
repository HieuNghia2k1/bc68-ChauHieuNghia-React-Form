import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import DemoFormReact from "./components/DemoFormReact/DemoFormReact";
import HomeTemplate from "./components/HomeTemplate/HomeTemplate";

function App() {
  const [count, setCount] = useState(0);

  return <DemoFormReact />;
  <HomeTemplate />;
}

export default App;
