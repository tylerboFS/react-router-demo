import { useParams } from "react-router-dom";

const SingleUser = () => {
  const { id } = useParams();

  //TODO: use id to fetch info
  
  return (
    <h4>
      {localStorage.getItem("currentUserName")} Id: {id}
    </h4>
  );
};

export default SingleUser;
