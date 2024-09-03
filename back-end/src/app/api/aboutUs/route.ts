import { NextRequest, NextResponse } from "next/server";
import AboutUsModel from "../../../../model/aboutUs.model";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const res = await AboutUsModel.find();

    return NextResponse.json(res);
  } catch (err: any) {
    return NextResponse.json({ error: err.messege }, { status: 500 });
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const {
      name,
      numericalIndicators,
      email,
      phoneNumbers,
      offerNumber,
      mainImg,
      about,
      aboutOffice,
      porpose,
      objective,
    } = await req.json();

    const createdRecord = await AboutUsModel.create({
      numericalIndicators,
      name,
      email,
      phoneNumbers,
      offerNumber,
      mainImg,
      about,
      aboutOffice,
      porpose,
      objective,
    });

    return NextResponse.json(createdRecord);
  } catch (error: any) {
    console.error("Error creating AboutUs record:", error);

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
