import { NextRequest, NextResponse } from "next/server";
import OfferModel from "../../../../../model/offers.model";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const res = await OfferModel.find();

    return NextResponse.json(res);
  } catch (err: any) {
    return NextResponse.json({ error: err.messege }, { status: 500 });
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { name, img, date, travelType, description } = await req.json();

    const createdRecord = await OfferModel.create({
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
