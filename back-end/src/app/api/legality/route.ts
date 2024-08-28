import { NextRequest, NextResponse } from "next/server";
import AboutUsModel from "../../../../model/aboutUs.model";
import LegalityModel from "../../../../model/legality.model";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const res = await LegalityModel.find();

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
    const { name, title, link, legalityType } = await req.json();

    // Create a new record in the AboutUsModel
    const createdRecord = await LegalityModel.create({
      name,
      title,
      link,
      legalityType,
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
