import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incrementNumber, decrementNumber } from "./Action/index";

function App() {
  const mystate = useSelector((state) => state.incDec);
  const dispatch = useDispatch();

  const handleMinusClick = () => {
    dispatch(decrementNumber()); // Invoke the decrementNumber action creator
  };

  const handlePlusClick = () => {
    dispatch(incrementNumber()); // Invoke the incrementNumber action creator
  };

  console.log("state value is");
  console.log(mystate);
  return (
    <div className="container">
      <button type="button" onClick={handleMinusClick}>Minus</button>
      <input type="text" value={mystate} readOnly />
      <button type="button" onClick={handlePlusClick}>Plus</button>
    </div>
  );
}

export default App;
