// import { useRouter } from "next/router";
import LinkComponent from "../../components/Link/LinkComponent";
import MainContainer from "../../components/MainContainer";

export default function User({ user }) {
  const { name, id } = user;
  return (
    <MainContainer title="User page">
      <p>User's ID = {id}</p>
      <p>User's Name = {name}</p>
    </MainContainer>
  );
}

export async function getServerSideProps(context) {
  const userID = context.params.id;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userID}`
  );
  const user = await response.json();
  return {
    props: { user }, // will be passed to the page component as props
  };
}
