import { NextRequest, NextResponse } from "next/server";
import resourcesModel from "../../../../../../model/resources.model";

export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id"); // Get 'id' from query parameters
  console.log(id);

  try {
    const res = await resourcesModel.findById(id);

    return NextResponse.json(res);
  } catch (err: any) {
    return NextResponse.json({ error: err.messege }, { status: 500 });
  }
}
