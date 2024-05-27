import { NextResponse } from "next/server";

const workshops = [
    {
        id: 1,
        title: "Ex3 UX Bootcamp",
        description: "Mentor teams and judging panel",
        img: "/eslsca.png",
    },
    {
        id: 2,
        title: "Social Design Talk",
        description: "Impact focused design",
        img: "/mica.png",
    },
    {
        id: 3,
        title: "Design Thinking",
        description: "Collabrative problem solving",
        img: "/ashoka.png",
    },
]

export async function GET(request) {
  return NextResponse.json(workshops, { status: 200 });

}
