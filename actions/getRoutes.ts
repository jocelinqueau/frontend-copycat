import fs from 'fs';
import path from 'path';

const getRoutes = () => {
  const pagesDir = path.join(process.cwd(), 'app');
  const routes: { path: string; name: string }[] = [];

  const readDir = (dir: fs.PathLike) => {
    const files = fs.readdirSync(dir, 'utf-8');
    files.forEach((file) => {
      const filePath = path.join(dir.toString(), file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        readDir(filePath);
      } else if (file === 'page.tsx') {
        const relativePath = path.relative(pagesDir, filePath);
        let routePath = '/' + relativePath.replace(/\\/g, '/').replace('/page.tsx', '');
        if (routePath === '/page.tsx') {
          routePath = '/';
        }
        routes.push({ path: routePath, name: routePath });
      }
    })
  }

  readDir(pagesDir);
  return routes;
};

export default getRoutes;