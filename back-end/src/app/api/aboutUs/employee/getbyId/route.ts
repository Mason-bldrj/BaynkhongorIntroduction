import { NextRequest, NextResponse } from "next/server";
import EmployeeModel from "../../../../../../model/employees.model";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id"); // Get 'id' from query parameters

  try {
    if (!id) {
      return NextResponse.json(
        { error: "ID parameter is required" },
        { status: 400 }
      );
    }
    console.log(typeof id);

    const employee = await EmployeeModel.findById(id); // Provide the 'id' parameter

    if (!employee) {
      return NextResponse.json(
        { error: "Employee not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(employee);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
