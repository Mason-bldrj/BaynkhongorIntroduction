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

// export async function POST(req: any, res: Response) {
//   const first = await NextResponse.json(req);
//   console.log(req.body);

//   return NextResponse.json(req);
// }
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    // Parse the JSON data from the request body
    const { report, video, resources } = await req.json();

    // Create a new record in the AboutUsModel
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

    // Return the created record in the response
    return NextResponse.json(createdRecord);
  } catch (error: any) {
    // Log the error to the console for debugging
    console.error("Error creating AboutUs record:", error);

    // Return an error response with a 500 status code
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
