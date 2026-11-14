import { Hero } from '@/components/home/Hero'
import { Marquee } from '@/components/home/Marquee'
import { Stats } from '@/components/home/Stats'
import { ProductGrid } from '@/components/sections/ProductGrid'
import { Faq } from '@/components/sections/Faq'
import { CtaBand } from '@/components/sections/CtaBand'

export default function HomePage() {
  return (<><Hero /><Marquee /><Stats /><ProductGrid /><Faq /><CtaBand /></>)
}
