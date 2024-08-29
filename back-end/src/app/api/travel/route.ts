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
