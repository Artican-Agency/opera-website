import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "microsoft.txt");
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    return NextResponse.json({ content: fileContent });
  } catch (error) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}
