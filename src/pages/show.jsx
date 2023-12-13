import { useLocation } from "react-router-dom";

function Show() {
  const location = useLocation();

  console.log(location);

  return (
    <>
      <button type="button"></button>
      <img src={location.state.largeImageURL} alt="" />
    </>
  );
}
export default Show;
