import Replicate from "replicate"
import { NextResponse } from "next/server"

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
})

export async function POST(req: Request) {
  const data = await req.formData()
  const prompt = data.get("prompt") as string

  const output = await replicate.run(
    "lucataco/animatediff:latest",
    { input: { prompt, num_frames: 16 } }
  )

  return NextResponse.json({ video: output })
}
