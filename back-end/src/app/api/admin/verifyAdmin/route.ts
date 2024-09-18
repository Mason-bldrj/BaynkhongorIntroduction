import { NextRequest, NextResponse } from "next/server";
import AdminModel from "../../../../../model/admin.model";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const res = await AdminModel.find();
    return NextResponse.json(res);
  } catch (error: any) {
    return NextResponse.json({ error: error.messege }, { status: 500 });
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  const { adminEmail, adminPassword } = data;
  try {
    const admin: any = await AdminModel.find({
      adminEmail,
    });
    console.log(adminPassword);

    if (admin.length == 1 && adminPassword === admin[0]?.adminPassword) {
      return NextResponse.json(admin);
    } else if (admin.length == 1 && adminPassword !== admin[0]?.adminPassword) {
      return NextResponse.json("Incorrect Password");
    } else {
      return NextResponse.json("Хэрэглэгч олдоогүй");
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.messege }, { status: 500 });
  }
}
