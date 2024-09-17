import { NextRequest, NextResponse } from "next/server";
import KeepsakeModel from "../../../../../model/keepsake.model";
import LegalityModel from "../../../../../model/legality.model";

export async function GET(req: NextRequest, res: NextResponse) {
  const { id } = await req.json();
  try {
    const res = await LegalityModel.findById(id);

    return NextResponse.json(res);
  } catch (err: any) {
    return NextResponse.json({ error: err.messege }, { status: 500 });
  }
}
