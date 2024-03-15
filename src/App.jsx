import "./App.css";
import { useState } from "react";

function App() {
  return <Component />;
}

const Component = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  ];
  function increaseIndex() {
    if (index <= 2) {
      return setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  function decreaseIndex() {
    if (index > 0) {
      return setIndex(index - 1);
    } else {
      setIndex(3);
    }
  }

  return (
    <div className="component">
      <Button arrow="⬅" onArrow={decreaseIndex} />
      <Frame images={images[index]} />
      <Button arrow="⮕" onArrow={increaseIndex} />
    </div>
  );
};

const Button = ({ arrow, onArrow }) => {
  return (
    <button className="button" onClick={onArrow}>
      {arrow}
    </button>
  );
};
const Frame = ({ images }) => {
  return (
    <div className="frame">
      <img src={images} className="images" />
    </div>
  );
};

export default App;
