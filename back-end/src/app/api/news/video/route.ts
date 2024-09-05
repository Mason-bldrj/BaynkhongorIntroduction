import { NextRequest, NextResponse } from "next/server";
import ReportModel from "../../../../../model/report.model";
import VideoModel from "../../../../../model/video.model";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { name, date, url } = await req.json();
    const res = await VideoModel.create({
      name,
      date,
      url,
    });
    return NextResponse.json(res);
  } catch (err: any) {
    console.error("Error creating AboutUs record:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
