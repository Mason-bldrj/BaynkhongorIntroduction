import { NextRequest, NextResponse } from "next/server";
import ReportModel from "../../../../../model/report.model";
import resourcesModel from "../../../../../model/resources.model";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { name, img } = await req.json();
    const res = await resourcesModel.create({
      name,
      img,
    });
    return NextResponse.json(res);
  } catch (err: any) {
    console.error("Error creating AboutUs record:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
