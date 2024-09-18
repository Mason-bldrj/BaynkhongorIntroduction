import { NextRequest, NextResponse } from "next/server";
import InstitutionModel from "../../../../model/Institution.model";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const res = await InstitutionModel.find();

    return NextResponse.json(res);
  } catch (err: any) {
    return NextResponse.json({ error: err.messege }, { status: 500 });
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { institutionType, name, description, img, phoneNumbers } =
      await req.json();

    const createdRecord = await InstitutionModel.create({
      institutionType,
      name,
      description,
      img,
      phoneNumbers: {
        phoneNumber1: phoneNumbers.phoneNumber1,
        phoneNumber2: phoneNumbers.phoneNumber2,
      },
    });
    return NextResponse.json(createdRecord);
  } catch (error: any) {
    console.error("Error creating AboutUs record:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  const { _id, institutionType, name, description, img, phoneNumbers } = data;
  try {
    const res = await InstitutionModel.findByIdAndUpdate(_id, {
      institutionType,
      name,
      description,
      img,
      phoneNumbers,
    });
  } catch (error: any) {
    console.error("Error creating AboutUs record:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
export async function DELETE(req: NextRequest, res: NextResponse) {
  const data = await req.json();

  try {
    const { id } = data;
    const res = await InstitutionModel.findByIdAndDelete(id);

    return NextResponse.json(id);
  } catch (error: any) {
    console.error("Error creating AboutUs record:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
