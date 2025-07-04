import type { MetaFunction } from "@remix-run/node";
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
      <PageOfConstruction />
    </div>
  );
}