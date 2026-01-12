import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import VideoForm from "@/components/VideoForm"
import VideoGallery from "@/components/VideoGallery"
import Pricing from "@/components/Pricing"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="space-y-24 px-6">
        <VideoForm />
        <VideoGallery />
        <Pricing />
      </main>
      <Footer />
    </>
  )
}
