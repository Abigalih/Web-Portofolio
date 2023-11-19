import Image from 'next/image'
import HeroSection from './component/HeroSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#191919]">
      <div class="container mx-auto py-4 px-12">
        <HeroSection />
      </div>
    </main>
  )
}
