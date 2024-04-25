import BurgerSlider from "@/components/BurgerSlider";
import FoodPromotion from "@/components/FoodPromotion";
import Hero from "@/components/Hero";
import Kapcsolat from "@/components/Kapcsolat";
import MenuPromotion from "@/components/MenuPromotion";
import QR from "@/components/QR";
import { Kumbh_Sans } from 'next/font/google'

const kumbh = Kumbh_Sans({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {

  return (
    <main className={kumbh.className}>
      <Hero />
      <BurgerSlider />
      <MenuPromotion />
      <FoodPromotion />
      <QR />
      <Kapcsolat />
    </main>
  );
}