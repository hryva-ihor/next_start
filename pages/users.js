import LinkComponent from "../components/Link/LinkComponent";

import MainContainer from "../components/MainContainer";
const Users = ({ users }) => {
  return (
    <MainContainer title="Users Page">
      <h1>Users page</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <LinkComponent
                href={`/users/${user.id}`}
                text={user.name}
              ></LinkComponent>
            </li>
          );
        })}
      </ul>
    </MainContainer>
  );
};
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return {
    props: { users }, // will be passed to the page component as props
  };
}

export default Users;
