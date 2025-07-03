import type { MetaFunction } from "@remix-run/node";
import PageIgreja from "~/components/PageIgreja";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <PageIgreja />
    </div>
  );
}