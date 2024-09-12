import { NextRequest, NextResponse } from "next/server";

import VideoModel from "../../../../../model/video.model";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const videoData = await VideoModel.find();

    return NextResponse.json(videoData);
  } catch (err: any) {
    return NextResponse.json({ error: err.messege }, { status: 500 });
  }
}
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
export async function PUT(req: NextRequest, res: NextResponse) {
  const data = await req.json();

  console.log(data);

  try {
    const { _id, name, date, url } = data;
    const res = await VideoModel.findByIdAndUpdate(
      _id,
      {
        name,
        date,
        url,
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
    const res = await VideoModel.findByIdAndDelete(_id);
    return NextResponse.json(res);
  } catch (error: any) {
    console.error("Error creating AboutUs record:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
