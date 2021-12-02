import { useSelector } from "react-redux";
import { useGetUserByUserIdQuery } from "../services/githubUser";

export const Profile = () => {
  const user = useSelector(state => state.user.value);
  const themeColor = useSelector(state => state.theme.value);

  const { data, error, isLoading } =
    useGetUserByUserIdQuery("RicardoBrito1938");

  return (
    <div style={{ color: themeColor }}>
      {error && <h1>Error loading your user picture</h1>}
      {isLoading && <h1>Loading...</h1>}
      {data && (
        <>
          <img src={data.avatar_url} alt={data.id} />
          <h1>Profile Page</h1>
          <p>Name: {user.name} </p>
          <p>Age: {user.age} </p>
          <p>Email: {user.email} </p>
        </>
      )}
    </div>
  );
};
