import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      Home
      <button
        style={{ width: "200px", height: "50px" }}
        onClick={() => navigate("/character/1")}
      >
        Character
      </button>
      <button
        style={{ width: "200px", height: "50px" }}
        onClick={() => navigate("/favorites")}
      >
        Favorites
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

export default Home;
