import { useLocation, useNavigate } from "react-router-dom"

function Show (){
    const data = useLocation();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1, { state: { data: data.state } });
      }

    console.log(data.state);
    const index = data.state.id;
    return (
        <>
            <button type="button" onClick={handleClick}></button>
            <img src={data.state.hits[index].largeImageURL} alt="" />
        </>
    )
}
export default Show