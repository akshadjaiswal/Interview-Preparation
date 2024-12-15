import './App.css';
import React, { Suspense, useState } from "react";

const HeavyComponent = React.lazy(() => import("./HeavyComponenet"))

const App = () => {
  const [showHeavyComponent, setShowHeavyComponent] = useState(false)

  const toggleComponent = () => {
    setShowHeavyComponent((prev) => !prev);
  }

  return (
    <div>
      <h1>Lazy Loading Exmaple</h1>
      <button
      onClick={toggleComponent}>
      {showHeavyComponent ? "Hide Heavy Component" :"Show Heavy Component"}
      </button>

    <Suspense fallback={<div>Heavy Component Loading.....</div>}>
    {showHeavyComponent && <HeavyComponent/>}</Suspense>
    </div>
  )
}
export default App;