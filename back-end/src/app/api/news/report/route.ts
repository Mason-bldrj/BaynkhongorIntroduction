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
export async function PUT(req: NextRequest, res: NextResponse) {
  const data = await req.json();

  console.log(data);

  try {
    const { _id, name, description, date } = data;
    const res = await ReportModel.findByIdAndUpdate(
      _id,
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
    const { _id } = data;
    const res = await ReportModel.findByIdAndDelete(_id);
    return NextResponse.json(res);
  } catch (error: any) {
    console.error("Error creating AboutUs record:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
