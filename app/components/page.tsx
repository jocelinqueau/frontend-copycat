'use server'

import Link from "next/link";
import getRoutes from '@/actions/getRoutes'

const Page = async () => {
  const routes = getRoutes({ startingPoint:'components'});

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

      <div style={{ backgroundColor: "var(--red)" }}>
        <h1>Hello World</h1>
      </div>
    </div>
  );
}

export default Page;