import { NextRequest, NextResponse } from "next/server";
import AdminModel from "../../../../model/admin.model";

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
  const { adminName, adminEmail, adminPassword } = data;
  try {
    const res = await AdminModel.create({
      adminName,
      adminEmail,
      adminPassword,
    });
    return NextResponse.json(res);
  } catch (error: any) {
    return NextResponse.json({ error: error.messege }, { status: 500 });
  }
}
