import { NextRequest, NextResponse } from "next/server";
import ReportModel from "../../../../../model/report.model";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const reportData = await ReportModel.find();

    return NextResponse.json(reportData);
  } catch (err: any) {
    return NextResponse.json({ error: err.messege }, { status: 500 });
  }
}
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
export async function PUT(req: NextRequest, res: NextResponse) {
  const data = await req.json();

  console.log(data);

  try {
    const { id, name, description, date } = data;
    const res = await ReportModel.findByIdAndUpdate(
      id,
      {
        name,
        description,
        date,
      },
      { new: true }
    );
    return NextResponse.json(res);
  } catch (error: any) {
    console.error("Error creating AboutUs record:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
export async function DELETE(req: NextRequest, res: NextResponse) {
  const data = await req.json();

  try {
    const { id } = data;
    const res = await ReportModel.findByIdAndDelete(id);
    return NextResponse.json(res);
  } catch (error: any) {
    console.error("Error creating AboutUs record:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
