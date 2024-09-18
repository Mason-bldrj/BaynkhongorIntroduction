import { NextRequest, NextResponse } from "next/server";
import ScenicSpotModel from "../../../../../../model/scenicSpot.model";

export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id"); // Get 'id' from query parameters

  try {
    const res = await ScenicSpotModel.findById(id);

    return NextResponse.json(res);
  } catch (err: any) {
    return NextResponse.json({ error: err.messege }, { status: 500 });
  }
}
