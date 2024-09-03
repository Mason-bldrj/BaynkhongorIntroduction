import { NextRequest, NextResponse } from "next/server";
import OffersModel from "../../../../../model/offers.model";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const res = await OffersModel.find();

    return NextResponse.json(res);
  } catch (err: any) {
    return NextResponse.json({ error: err.messege }, { status: 500 });
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { offerCount, offer } = await req.json();

    const createdRecord = await OffersModel.create({
      offerCount,
      offer,
    });

    return NextResponse.json(createdRecord);
  } catch (error: any) {
    console.error("Error creating AboutUs record:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
