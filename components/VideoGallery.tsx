export default function VideoGallery() {
  return (
    <section className="max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Example Videos</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-zinc-900 p-4 rounded">Sneaker Ad</div>
        <div className="bg-zinc-900 p-4 rounded">Phone Promo</div>
        <div className="bg-zinc-900 p-4 rounded">Skincare Reel</div>
      </div>
    </section>
  )
}
