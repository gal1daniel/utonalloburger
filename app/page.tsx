import BurgerSlider from "@/components/BurgerSlider";
import FoodPromotion from "@/components/FoodPromotion";
import Hero from "@/components/Hero";
import Kapcsolat from "@/components/Kapcsolat";
import MenuPromotion from "@/components/MenuPromotion";
import QR from "@/components/QR";

export default function Home() {

  return (
    <main>
      <Hero />
      <BurgerSlider />
      <MenuPromotion />
      <FoodPromotion />
      <QR />
      <Kapcsolat />
    </main>
  );
}