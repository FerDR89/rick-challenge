import { useNavigate } from "react-router";

const Favorites = () => {
  const navigate = useNavigate();

  return (
    <div>
      Favorites
      <button
        style={{ width: "200px", height: "50px" }}
        onClick={() => navigate("/character/1")}
      >
        Character
      </button>
      <button
        style={{ width: "200px", height: "50px" }}
        onClick={() => navigate("/")}
      >
        Home
      </button>
      <button
        style={{ width: "200px", height: "50px" }}
        onClick={() => navigate("/NOEXISTE")}
      >
        Not-Found
      </button>
    </div>
  );
};
export default Favorites;
