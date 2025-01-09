import { Link, useParams } from "react-router";

const Character = () => {
  const { id } = useParams();

  console.log({ id });

  return (
    <div>
      Character
      <Link style={{ width: "200px", height: "50px" }} to="/favorites">
        Favorites
      </Link>
      <Link style={{ width: "200px", height: "50px" }} to="/">
        Home
      </Link>
      <Link style={{ width: "200px", height: "50px" }} to="/NOEXISTE">
        Not-Found
      </Link>
    </div>
  );
};
export default Character;
