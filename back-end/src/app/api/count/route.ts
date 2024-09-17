import { NextRequest, NextResponse } from "next/server";
import CountModel from "../../../../model/countModel";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const res = await CountModel.find();
    return NextResponse.json(res);
  } catch (err: any) {
    return NextResponse.json({ error: err.messege }, { status: 500 });
  }
}
export async function POST(req: NextRequest, res: NextResponse) {
  const { number } = await req.json();
  try {
    const res = await CountModel.create({
      number,
    });
    return NextResponse.json(res);
  } catch (err: any) {
    return NextResponse.json({ error: err.messege }, { status: 500 });
  }
}
export async function PUT(req: NextRequest, res: NextResponse) {
  const { number, id } = await req.json();
  try {
    const res = await CountModel.findByIdAndUpdate(id, {
      number,
    });
    return NextResponse.json(res);
  } catch (err: any) {
    return NextResponse.json({ error: err.messege }, { status: 500 });
  }
}
