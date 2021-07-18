import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { movieId } = useParams();

  console.log(movieId);

  return (
    <div>
      <div>Product details</div>
      <div></div>
    </div>
  );
}
