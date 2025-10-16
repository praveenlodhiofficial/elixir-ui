import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";

export async function GET(request: NextRequest) {
   try {
      const { searchParams } = new URL(request.url);
      const slug = searchParams.get("slug");

      if (!slug) {
         return NextResponse.json({ error: "Slug parameter is required" }, { status: 400 });
      }

      // Construct the path to the component file
      const componentPath = join(process.cwd(), "src", "components", "elixir-ui", `${slug}.tsx`);

      try {
         const componentCode = await readFile(componentPath, "utf-8");
         return new NextResponse(componentCode, {
            headers: {
               "Content-Type": "text/plain",
            },
         });
      } catch (fileError) {
         console.error(`Error reading component file for ${slug}:`, fileError);
         return NextResponse.json({ error: "Component file not found" }, { status: 404 });
      }
   } catch (error) {
      console.error("Error in component-code API:", error);
      return NextResponse.json({ error: "Internal server error" }, { status: 500 });
   }
}
