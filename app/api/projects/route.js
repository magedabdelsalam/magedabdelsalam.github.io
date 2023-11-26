import { NextResponse } from "next/server";

const projects = [
  {
      id: '1',
      url: "/Konan",
      title: "Konan AI",
      keywords:"konan, mlops, case-study",
      description: "A business focused MLOPs tool",
      thumbnail: "/live.png",
  },
]

export async function GET(request) {
  return NextResponse.json(projects, { status: 200 });

}
