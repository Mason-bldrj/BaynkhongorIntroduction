import { NextRequest, NextResponse } from "next/server";
import ScenicSpotModel from "../../../../../model/scenicSpot.model";
export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const res = await ScenicSpotModel.find();
    return NextResponse.json(res);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
export async function POST(req: NextRequest, res: NextResponse) {
  console.log(req);

  try {
    const { name, img, description } = await req.json();

    const createdRecord = await ScenicSpotModel.create({
      name,
      img,
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
    const { id, name, img, description } = data;
    const res = await ScenicSpotModel.findByIdAndUpdate(
      id,
      {
        name,
        img,
        description,
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
    const res = await ScenicSpotModel.findByIdAndDelete(id);
    return NextResponse.json(res);
  } catch (error: any) {
    console.error("Error creating AboutUs record:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
