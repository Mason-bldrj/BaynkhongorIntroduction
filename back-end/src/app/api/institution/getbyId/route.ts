import { NextRequest, NextResponse } from "next/server";
import InstitutionModel from "../../../../../model/Institution.model";

export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id"); // Get 'id' from query parameters
  console.log(id);

  try {
    const res = await InstitutionModel.findById(id);

    return NextResponse.json(res);
  } catch (err: any) {
    return NextResponse.json({ error: err.messege }, { status: 500 });
  }
}
