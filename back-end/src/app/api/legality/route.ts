import { NextRequest, NextResponse } from "next/server";
import AboutUsModel from "../../../../model/aboutUs.model";
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
