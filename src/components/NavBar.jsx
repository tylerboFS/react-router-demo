import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Link to="/">
        <h3>Home</h3>
      </Link>
      <Link to="users">
        <h3>All Users</h3>
      </Link>
    </>
  );
};

export default NavBar;
