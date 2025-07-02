import type { MetaFunction } from "@remix-run/node";
import HeaderMenu from '../components/HeaderMenu';
import HomePage from "~/components/HomePage";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <HomePage />
  );
}