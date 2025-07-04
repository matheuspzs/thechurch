import type { MetaFunction } from "@remix-run/node";
import Banner from "~/components/Banner";
import PageOfConstruction from "~/components/PageOfConstruction";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Banner>
        <h1>Nossas <br /> Áreas</h1>
      </Banner>
      <PageOfConstruction />
    </div>
  );
}