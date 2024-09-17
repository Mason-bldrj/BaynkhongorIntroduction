import { NextRequest, NextResponse } from "next/server";
import AboutUsModel from "../../../../model/aboutUs.model";
import KeepsakeModel from "../../../../model/keepsake.model";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const res = await KeepsakeModel.find();

    return NextResponse.json(res);
  } catch (err: any) {
    return NextResponse.json({ error: err.messege }, { status: 500 });
  }
}
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { name, title, description, img } = await req.json();

    const createdRecord = await KeepsakeModel.create({
      name,
      title,
      description,
      img,
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
    const { id, name, title, description, img } = data;
    const res = await KeepsakeModel.findByIdAndUpdate(
      id,
      {
        name,
        description,
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
  console.log(data);

  try {
    const { id } = data;
    console.log("1");

    const res = await KeepsakeModel.findByIdAndDelete(id);
    console.log(2);

    return NextResponse.json(id);
  } catch (error: any) {
    console.error("Error creating AboutUs record:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
