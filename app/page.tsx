'use server'

import Link from "next/link";

const Page = async () => {
  const routes = [
    { path: "/backgrounds/gridblock", name: "Grid Block Background" },
    { path: "/braydoncoyer", name: "Braydon Coyer" },
    { path: "/aceternity/template/ai-saas-template", name: "AI SaaS Template" },
  ];

  return (
    <div>
      <nav>
        <ul>
          {routes.map((route) => (
            <li key={route.path} className="hover:text-blue-500">
              <Link href={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Page;