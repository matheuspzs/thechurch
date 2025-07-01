import type { MetaFunction } from "@remix-run/node";
import HeaderMenu from '../components/HeaderMenu';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      Aqui será a página de doação
    </div>
  );
}