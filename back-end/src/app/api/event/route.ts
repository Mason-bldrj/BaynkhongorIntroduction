import { NextRequest, NextResponse } from "next/server";
import eventModel from "../../../../model/event.model";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const res = await eventModel.find();

    return NextResponse.json(res);
  } catch (err: any) {
    return NextResponse.json({ error: err.messege }, { status: 500 });
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { name, description, img } = await req.json();

    const createdRecord = await eventModel.create({
      name,
      description,
      img,
    });
    return NextResponse.json(createdRecord);
  } catch (error: any) {
    console.error("Error creating AboutUs record:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
