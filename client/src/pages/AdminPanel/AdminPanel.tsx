import { Button, Spinner } from "components";
import { useUsers } from "hooks";

export const AdminPanel = (): React.JSX.Element => {
  const { data, isLoading, isFetching, refetch } = useUsers();

  const handleGetAllUsers = () => refetch();

  if (isLoading && isFetching) return <Spinner intent={"inner"} />;

  return (
    <div className="h-full w-full">
      <Button onClick={handleGetAllUsers}>Get Users</Button>
      {data?.users?.length ? (
        <ul className="flex flex-wrap gap-4">
          {data?.users.map(
            (
              user: {
                username: string;
                email?: string;
                profilePicture?: string;
              },
              id: number
            ) => (
              <li key={`key: ${id}`} className="w-fit rounded-md p-2 shadow-xl">
                <h1>{user.username}</h1>
                {user.email ? <p>{user.email}</p> : null}
              </li>
            )
          )}
        </ul>
      ) : null}
    </div>
  );
};
