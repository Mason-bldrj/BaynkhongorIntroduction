import { NextRequest, NextResponse } from "next/server";
import ReportModel from "../../../../../model/report.model";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { name, date, description } = await req.json();
    const res = await ReportModel.create({
      name,
      date,
      description,
    });
    return NextResponse.json(res);
  } catch (err: any) {
    console.error("Error creating AboutUs record:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
