import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import "./App.css";

const numState = atom({
  key: "numState",
  default: 0,
});

const squareState = selector({
  key: "squareState",
  get: ({ get }) => {
    return get(numState) ** 2;
  },
});

function Counter() {
  const [number, setNumber] = useRecoilState(
    numState
  );

  return (
    <button
      onClick={() => setNumber(number + 1)}
    >
      Increment!
    </button>
  );
}

function Square() {
  const squareNumber = useRecoilValue(
    squareState
  );
  return <div>Square: {squareNumber}</div>;
}

function Display() {
  const number = useRecoilValue(numState);
  return <div>Number: {number}</div>;
}

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>Recoil!</h1>
        <Counter />
        <Display />
        <Square />
      </div>
    </RecoilRoot>
  );
}

export default App;
