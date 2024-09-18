import { NextRequest, NextResponse } from "next/server";
import resourcesModel from "../../../../../model/resources.model";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { name, img } = await req.json();
    const res = await resourcesModel.create({
      name,
      img,
    });
    return NextResponse.json(res);
  } catch (err: any) {
    console.error("Error creating AboutUs record:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const resourcesData = await resourcesModel.find();

    return NextResponse.json(resourcesData);
  } catch (err: any) {
    return NextResponse.json({ error: err.messege }, { status: 500 });
  }
}
export async function PUT(req: NextRequest, res: NextResponse) {
  const data = await req.json();

  try {
    const { id, name, img } = data;
    const res = await resourcesModel.findByIdAndUpdate(
      id,
      {
        name,

        img,
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
    const res = await resourcesModel.findByIdAndDelete(id);
    return NextResponse.json(res);
  } catch (error: any) {
    console.error("Error creating AboutUs record:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
