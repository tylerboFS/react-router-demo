import {useNavigate } from "react-router-dom";

const users = [
  { id: 1, name: "Billy" },
  { id: 2, name: "Mortimer" },
  { id: 3, name: "Absalom" },
];

const AllUsers = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>All Users</h2>
      {users.map((user) => {
        return (
          <h4
            onClick={() => {
              //When the h4 is clicked navigate to the /users/:id route
              navigate(`/users/${user.id}`);
            }}
            key={user.id}
          >
            {user.name}
          </h4>
        );
      })}
    </>
  );
};
export default AllUsers;
