import CoverCarousel from "components/carousel/cover-carousel";
import Container from "components/container";

export default function Main() {
  return (
    <>
      <Container>
        <h1>Men</h1>
      </Container>
      <CoverCarousel />
      <Container>
        <h1>Women</h1>
      </Container>
      <CoverCarousel />
      <Container>
        <h1>Kids</h1>
      </Container>
      <CoverCarousel />
    </>
  );
}
