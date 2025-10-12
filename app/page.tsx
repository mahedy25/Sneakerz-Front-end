import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import PopularNow from "@/components/BestSellers";
import WhyChooseUs from "@/components/whyChooseUs";
import Branding from "@/components/Branding";
import FAQsTwo from "@/components/Faq";
import TopRated from "@/components/TopRated";


export default function Home() {
  return (
    <main className="">
      <Hero />
      <Categories />
      <PopularNow />
      <WhyChooseUs />
      <TopRated />
      <Newsletter />
      <Branding />
      <FAQsTwo />
    </main>
  );
}
