import { NextResponse } from "next/server";

const projects = [
  {
      id: 1,
      url: "/konan",
      title: "Konan AI: Case Study",
      keywords:"konan, mlops, case study",
      description: "Automated & accurate decision making",
      thumbnail: "/live.png",
  },
]

export async function GET(request) {
  return NextResponse.json(projects, { status: 200 });

}
