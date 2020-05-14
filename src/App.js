import React from "react";
import {
  RecoilRoot,
  atom,
  useRecoilState,
} from "recoil";
import "./App.css";

const numState = atom({
  key: "numState",
  default: 0,
});

function Counter() {
  const [number, setNumber] = useRecoilState(
    numState
  );

  return (
    <button
      onClick={() => setNumber(number + 1)}
    >
      {number}
    </button>
  );
}

function Display() {
  const [number] = useRecoilState(numState);
  return <div>{number}</div>;
}

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>Recoil!</h1>
        <Counter />
        <Display />
      </div>
    </RecoilRoot>
  );
}

export default App;
