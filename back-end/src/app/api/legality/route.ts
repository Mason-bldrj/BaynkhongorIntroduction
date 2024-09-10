import { NextRequest, NextResponse } from "next/server";
import LegalityModel from "../../../../model/legality.model";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const res = await LegalityModel.find();

    return NextResponse.json(res);
  } catch (err: any) {
    return NextResponse.json({ error: err.messege }, { status: 500 });
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { name, title, link, legalityType } = await req.json();
    const createdRecord = await LegalityModel.create({
      name,
      title,
      link,
      legalityType,
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
    const { _id, name, title, legalityType, link } = data;
    const res = await LegalityModel.findByIdAndUpdate(
      _id,
      {
        name,
        title,
        legalityType,
        link,
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
    const res = await LegalityModel.findByIdAndDelete(_id);
    return NextResponse.json(res);
  } catch (error: any) {
    console.error("Error creating AboutUs record:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
