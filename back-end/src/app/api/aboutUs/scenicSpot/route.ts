import { NextRequest, NextResponse } from "next/server";
import ScenicSpotModel from "../../../../../model/scenicSpot.model";

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
    const { _id, name, img, description } = data;
    const res = await ScenicSpotModel.findByIdAndUpdate(
      _id,
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
    const { _id } = data;
    const res = await ScenicSpotModel.findByIdAndDelete(_id);
    return NextResponse.json(res);
  } catch (error: any) {
    console.error("Error creating AboutUs record:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
