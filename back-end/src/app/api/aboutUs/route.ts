import { NextRequest, NextResponse } from "next/server";
import AboutUsModel from "../../../../model/aboutUs.model";
import Error from "next/error";

// //  numericalIndicators: {
//     natureMonument: Number,
//     memorialPlaceNumber: Number,
//     groundKM_Number: Number,
//     population: Number,
//     teamsNumber: Number,
//     wardNumber: Number,
//   },
//   name: {
//     type: String,
//     reqiured: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   phoneNumber: {
//     phoneNumber1: {
//       type: Number,
//       required: true,
//     },
//     phoneNumber2: Number,
//   },

//   offerNumber: Number,
//   offers: {
//     name: { type: String, required: true },
//     count: {
//       type: Number,
//       required: true,
//     },
//   },
//   mainImg: String,
//   about: String,
//   aboutOffice: String,
//   porpose: String,
//   objective: String,
//   employees: {
//     name: { type: String, required: true },
//     position: { type: String, required: true },
//     phoneNumber: Number,
//     links: {
//       fbLink: String,
//       IG_Link: String,
//       twitterLink: String,
//     },
//   },

export async function GET(req: Request, res: Response) {
  try {
    const res = await AboutUsModel.find();
    return NextResponse.json({ res });
  } catch (err: any) {
    throw new Error(err);
  }
}
export async function POST(req: Request, res: Response) {
  if (req) {
    const {
      numericalIndicators,
      name,
      email,
      phoneNumbers,
      offerNumber,
      offers,
      mainImg,
      about,
      aboutOffice,
      porpose,
      objective,
      employees,
    } = await req.json();
    try {
      const res = await AboutUsModel.create({
        numericalIndicators: {
          natureMonument: numericalIndicators.natureMonument,
          memorialPlaceNumber: numericalIndicators.memorialPlaceNumber,
          groundKM_Number: numericalIndicators.groundKM_Number,
          population: numericalIndicators.population,
          teamsNumber: numericalIndicators.teamsNumber,
          wardNumber: numericalIndicators.wardNumber,
        },
        name: name,
        email: email,
        phoneNumbers: {
          phoneNumber1: phoneNumbers.phoneNumber1,
          phoneNumber2: phoneNumbers.phoneNumber2,
        },

        offerNumber: offerNumber,
        offers: [
          {
            name: offers.name,
            count: offers.count,
          },
        ],
        mainImg: mainImg,
        about: about,
        aboutOffice: aboutOffice,
        porpose: porpose,
        objective: objective,
        employees: {
          name: employees.name,
          position: employees.position,
          phoneNumber: employees.phoneNumber,
          links: {
            fbLink: employees.links.fbLink,
            IG_Link: employees.links.IG_Link,
            twitterLink: employees.links.twitterLink,
          },
        },
      });
    } catch (err) {}
  }
}
