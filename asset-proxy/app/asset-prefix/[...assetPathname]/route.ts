import { readFile } from "node:fs/promises";
import { join } from "node:path";

type RouteHandler = (request: Request) => Promise<Response>;

export const GET: RouteHandler = async (req) => {
  const url = new URL(req.url);
  const [, filePath] = url.pathname.split("/asset-prefix");

  const absoluteFilePath = join(
    process.cwd(),
    "..",
    "main",
    filePath.replace("_next", ".next")
  );

  const contents = await readFile(absoluteFilePath, "utf-8");

  return new Response(contents);
};

export const revalidate = 0;
