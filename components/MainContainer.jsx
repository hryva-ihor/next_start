import Head from "next/head";
import LinkComponent from "../components/Link/LinkComponent";
import { useRouter } from "next/router";
const MainContainer = ({ children, title }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <nav>
        <LinkComponent href={"/"} text="Main page"></LinkComponent>
        <LinkComponent href={"/users"} text="To users page"></LinkComponent>
      </nav>
      <div>{children}</div>
      <button onClick={() => router.back()}>Back</button>
    </>
  );
};

export default MainContainer;
