import { NextRequest, NextResponse } from "next/server";
import VideoModel from "../../../../model/video.model";
import ReportModel from "../../../../model/report.model";
import resourcesModel from "../../../../model/resources.model";
import NewsModel from "../../../../model/news.model";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const videoData = await VideoModel.find();
    const reportData = await ReportModel.find();
    const resourcesData = await resourcesModel.find();
    const data = {
      videoData: videoData,
      reportData: reportData,
      resourcesData: resourcesData,
    };
    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ error: err.messege }, { status: 500 });
  }
}
export async function DELETE(req: NextRequest, res: NextResponse) {
  const data = await req.json();

  try {
    const { _id } = data;
    const res = await NewsModel.findByIdAndDelete(_id);
    return NextResponse.json(res);
  } catch (error: any) {
    console.error("Error creating AboutUs record:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
