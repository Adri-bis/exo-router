import "./styles.css";

export default function LandingPage({ data }) {
  console.log(data);
  return (
    <>
      <h1>LandingPage</h1>
      <div className="container">
        {data.hits.map((image, index) => (
          <div key={index} id={`item-${index}`}>
            <img src={image.largeImageURL} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}
