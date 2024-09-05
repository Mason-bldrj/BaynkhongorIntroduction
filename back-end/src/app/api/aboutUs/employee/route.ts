import { NextRequest, NextResponse } from "next/server";
import EmployeeModel from "../../../../../model/employees.model";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const res = await EmployeeModel.find();

    return NextResponse.json(res);
  } catch (err: any) {
    return NextResponse.json({ error: err.messege }, { status: 500 });
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  console.log(req);

  try {
    const { name, position, phoneNumber, links } = await req.json();

    const createdRecord = await EmployeeModel.create({
      name,
      position,
      phoneNumber,
      links: {
        fbLink: links.fbLink ?? "",
        IG_Link: links.IG_Link ?? "",
        twitterLink: links.twitterLink ?? "",
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

  console.log(data);

  try {
    const { _id, name, position, phoneNumber, links } = data;
    const res = await EmployeeModel.findByIdAndUpdate(
      _id,
      {
        name,
        position,
        phoneNumber,
        links: {
          fbLink: links.fbLink,
          IG_Link: links.IG_Link,
          twitterLink: links.twitterLink,
        },
      },
      { new: true }
    );
    return NextResponse.json(res);
  } catch (error: any) {
    console.error("Error creating AboutUs record:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
