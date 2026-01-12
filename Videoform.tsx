"use client"
import { useState } from "react"

export default function VideoForm() {
  const [prompt, setPrompt] = useState("")
  const [loading, setLoading] = useState(false)
  const [video, setVideo] = useState<string | null>(null)

  async function generate() {
    setLoading(true)
    const form = new FormData()
    form.append("prompt", prompt)

    const res = await fetch("/api/generate-video", { method: "POST", body: form })
    const data = await res.json()
    setVideo(data.video?.[0])
    setLoading(false)
  }

  return (
    <section className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Generate AI Video</h2>
      <textarea
        className="w-full p-3 bg-zinc-900 rounded"
        placeholder="Describe your product video"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        onClick={generate}
        className="mt-4 px-6 py-2 bg-cyan-500 rounded text-black"
      >
        {loading ? "Generating…" : "Generate"}
      </button>

      {video && (
        <video src={video} controls className="mt-6 w-full rounded" />
      )}
    </section>
  )
}
