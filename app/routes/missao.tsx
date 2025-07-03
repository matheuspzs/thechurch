import type { MetaFunction } from "@remix-run/node";
import Banner from "~/components/Banner";

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
        <h1>Nossa <br /> Missão</h1>
      </Banner>
    </div>
  );
}