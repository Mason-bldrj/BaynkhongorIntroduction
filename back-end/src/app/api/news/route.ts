import { NextRequest, NextResponse } from "next/server";
import VideoModel from "../../../../model/video.model";
import ReportModel from "../../../../model/report.model";
import resourcesModel from "../../../../model/resources.model";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const videoData = await VideoModel.find();
    const reportData = await ReportModel.find();
    const resourcesData = await resourcesModel.find();
    const data = {
      videoData,
      reportData,
      resourcesData,
    };
    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ error: err.messege }, { status: 500 });
  }
}
