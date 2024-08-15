import fs from 'fs';
import path from 'path';

interface GetRoutesProps {
  startingPoint?: string;
  maxDepth?: number;
}

const getRoutes = ({ startingPoint = '', maxDepth }: GetRoutesProps = {}) => {
  const pagesDir = path.join(process.cwd(), 'app', startingPoint);
  const routes: { path: string; name: string }[] = [];

  const readDir = (dir: fs.PathLike, currentDepth: number = 0) => {
    if (maxDepth !== undefined && currentDepth > maxDepth) return;

    const files = fs.readdirSync(dir, 'utf-8');
    files.forEach((file) => {
      const filePath = path.join(dir.toString(), file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        readDir(filePath, currentDepth + 1);
      } else if (file === 'page.tsx') {
        const relativePath = path.relative(pagesDir, filePath);
        let routePath = '/' + path.join(startingPoint, relativePath).replace(/\\/g, '/').replace('/page.tsx', '');
        if (routePath === `/${startingPoint}`) {
          routePath = '/';
        } else if (routePath.endsWith('/')) {
          routePath = routePath.slice(0, -1);
        }
        routes.push({ path: routePath, name: routePath });
      }
    });
  };

  readDir(pagesDir);
  return routes;
};

export default getRoutes;