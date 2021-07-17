import { useHistory } from "react-router-dom";
import CoverCarousel from "../../components/carousel/cover-carousel";

export default function Main() {
  const history = useHistory();

  function handleClick() {
    console.log(123);
    history.push("/product-details");
  }

  return (
    <div>
      <button onClick={() => handleClick()}>Go products</button>
      <CoverCarousel />
      <CoverCarousel />
      <CoverCarousel />
    </div>
  );
}
