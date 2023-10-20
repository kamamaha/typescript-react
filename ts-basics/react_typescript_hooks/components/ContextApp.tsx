import React from "react";
import Counter from "./Counter3";
import { CounterProvider } from "./context/CounterContext";
import { initState } from "./context/CounterContext";

function App() {
  return (
    <>
      <CounterProvider count={initState.count} text={initState.text}>
        <Counter>{(num: number) => <>Current Count {num}</>}</Counter>
      </CounterProvider>
    </>
  );
}

export default App;
