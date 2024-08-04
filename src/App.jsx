import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DemoFormReact from "./components/DemoFormReact/DemoFormReact";

function App() {
  const [count, setCount] = useState(0);

  return <DemoFormReact />;
}

export default App;
