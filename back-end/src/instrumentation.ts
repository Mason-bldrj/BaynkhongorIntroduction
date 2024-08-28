import dbConnect from "@/lib/mongoose";

export async function register() {
  await dbConnect();
}
