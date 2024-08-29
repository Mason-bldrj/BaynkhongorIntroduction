import { NextRequest, NextResponse } from "next/server";
import NewsModel from "../../../../model/news.model";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const res = await NewsModel.find();

    return NextResponse.json(res);
  } catch (err: any) {
    return NextResponse.json({ error: err.messege }, { status: 500 });
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { report, video, resources } = await req.json();
    const createdRecord = await NewsModel.create({
      report: {
        name: report.name,
        date: report.date,
        description: report.description,
      },
      video: {
        name: video.name,
        date: video.date,
        url: video.url,
      },
      resources: {
        name: resources.name,
        img: resources.img,
      },
    });

    return NextResponse.json(createdRecord);
  } catch (error: any) {
    console.error("Error creating AboutUs record:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
