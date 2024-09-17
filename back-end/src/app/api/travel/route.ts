import { NextRequest, NextResponse } from "next/server";
import TravelModel from "../../../../model/travels.model";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const res = await TravelModel.find();

    return NextResponse.json(res);
  } catch (err: any) {
    return NextResponse.json({ error: err.messege }, { status: 500 });
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { name, img, date, travelType, description } = await req.json();

    const createdRecord = await TravelModel.create({
      name,
      img,
      date,
      travelType,
      description,
    });

    return NextResponse.json(createdRecord);
  } catch (error: any) {
    console.error("Error creating AboutUs record:", error);

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
export async function PUT(req: NextRequest, res: NextResponse) {
  const data = await req.json();

  console.log(data);

  try {
    const { _id, name, date, img, description, travelType } = data;
    const res = await TravelModel.findByIdAndUpdate(
      _id,
      {
        name,
        date,
        img,
        description,
        travelType,
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
    const res = await TravelModel.findByIdAndDelete(id);
    return NextResponse.json(res);
  } catch (error: any) {
    console.error("Error creating AboutUs record:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
