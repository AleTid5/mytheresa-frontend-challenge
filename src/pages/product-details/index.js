import { useHistory } from "react-router-dom";

export default function ProductDetails() {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <div>
      <div>Product details</div>
      <div>
        <button onClick={handleClick}>Go home</button>
      </div>
    </div>
  );
}
