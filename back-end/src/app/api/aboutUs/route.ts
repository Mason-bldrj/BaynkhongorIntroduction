import { NextRequest, NextResponse } from "next/server";
import AboutUsModel from "../../../../model/aboutUs.model";
import ScenicSpotModel from "../../../../model/scenicSpot.model";
import EmployeeModel from "../../../../model/employees.model";
import OffersModel from "../../../../model/offers.model";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const res1 = await AboutUsModel.find();
    const res2 = await ScenicSpotModel.find();
    const res3 = await EmployeeModel.find();
    const res4 = await OffersModel.find();
    const data = [res1[0], res2, res3, res4];
    return NextResponse.json(data);
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
export async function PUT(req: NextRequest, res: NextResponse) {
  const data = await req.json();

  try {
    const {
      id,
      name,
      email,
      phoneNumbers,
      numericalIndicators,
      about,
      aboutOffice,
      porpose,
      objective,
    } = data;
    const res = await AboutUsModel.findByIdAndUpdate(
      id,
      {
        name,
        email,
        phoneNumbers,
        numericalIndicators,
        about,
        aboutOffice,
        porpose,
        objective,
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
    const res = await AboutUsModel.findByIdAndDelete(id);
    return NextResponse.json(res);
  } catch (error: any) {
    console.error("Error creating AboutUs record:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
