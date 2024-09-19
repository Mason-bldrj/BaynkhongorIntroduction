import { NextRequest, NextResponse } from "next/server";
import AdminModel from "../../../../../model/admin.model";
import jwt from "jsonwebtoken";
export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const res = await AdminModel.find();
    return NextResponse.json(res);
  } catch (error: any) {
    return NextResponse.json({ error: error.messege }, { status: 500 });
  }
}
const secretKey = "baynkhongorAdmin";
export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  const { adminEmail, adminPassword } = data;
  try {
    const admin: any = await AdminModel.find({
      adminEmail,
    });

    if (admin.length == 1 && adminPassword === admin[0]?.adminPassword) {
      const token = jwt.sign(
        {
          adminEmail: admin[0]?.adminEmail,
          adminPassword: admin[0]?.adminPassword,
        },
        secretKey,
        { expiresIn: "30s" }
      );
      return NextResponse.json({ admin: admin, token: token });
    } else if (admin.length == 1 && adminPassword !== admin[0]?.adminPassword) {
      return NextResponse.json("Incorrect Password");
    } else {
      return NextResponse.json("Хэрэглэгч олдоогүй");
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.messege }, { status: 500 });
  }
}
