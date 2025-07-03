import type { MetaFunction } from "@remix-run/node";
import HeaderMenu from '../components/HeaderMenu';
import HomePage from "~/components/HomePage";
import Banner from "~/components/Banner";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <Banner>
        <h1>Um lugar de<br/>Adoração</h1>
      </Banner>
      <HomePage />
    </>
  );
}