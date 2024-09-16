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
      offerCount: 0,
      offer,
      visitedNumber: 0,
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
    const { offerCount, offer, _id, visitedNumber } = data;
    const res = await OffersModel.findByIdAndUpdate(
      _id,
      {
        offerCount,
        offer,
        visitedNumber,
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
    const res = await OffersModel.findByIdAndDelete(_id);
    return NextResponse.json(res);
  } catch (error: any) {
    console.error("Error creating AboutUs record:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
