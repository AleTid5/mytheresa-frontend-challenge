export default function Container({ children }) {
  return (
    <section className="container">
      <div className="app-container">{children}</div>
    </section>
  );
}
