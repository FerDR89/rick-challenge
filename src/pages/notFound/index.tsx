import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      NOT FOUND
      <button
        style={{ width: "200px", height: "50px" }}
        onClick={() => navigate("/")}
      >
        HOME
      </button>
    </div>
  );
};
export default NotFound;
