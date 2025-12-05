import Image from "next/image";
import { Lobster_Two } from "next/font/google";
import {
  CheckCircle,
  BadgeDollarSign,
  UserCheck,
  Truck,
  ThumbsUp,
} from "lucide-react";

const lobster = Lobster_Two({ weight: "400", subsets: ["latin"] });

export default function WhyChooseUs() {
  return (
    <main className="mt-20 sm:mt-24 md:mt-32 lg:mt-40 px-4 max-w-7xl mx-auto">
      <h1
        className={`${lobster.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-12`}
      >
        Why Choose Us?
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Banner Image */}
        <div className="w-full lg:w-1/2 relative rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <Image
            src="/images/whychooseus.jpg"
            alt="Why Choose Us"
            width={800}
            height={500}
            className="object-cover w-full h-full rounded-xl hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2
            className={`${lobster.className} text-2xl sm:text-3xl font-bold text-[#004D98]`}
          >
            Step Up Your Sneaker Game
          </h2>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            We’re not just selling sneakers — we’re delivering style, comfort, and confidence.
            Every pair is crafted for performance and made to turn heads wherever you go.
          </p>

          <ul className="space-y-4 mt-4">
            <li className="flex items-start gap-3 text-gray-800 text-sm sm:text-base">
              <CheckCircle size={20} className="text-[#DB0030] mt-0.5" />
              <span>100% authentic sneakers from top global brands</span>
            </li>
            <li className="flex items-start gap-3 text-gray-800 text-sm sm:text-base">
              <BadgeDollarSign size={20} className="text-[#DB0030] mt-0.5" />
              <span>Exclusive drops and transparent pricing</span>
            </li>
            <li className="flex items-start gap-3 text-gray-800 text-sm sm:text-base">
              <UserCheck size={20} className="text-[#DB0030] mt-0.5" />
              <span>Personalized service for every sneakerhead</span>
            </li>
            <li className="flex items-start gap-3 text-gray-800 text-sm sm:text-base">
              <Truck size={20} className="text-[#DB0030] mt-0.5" />
              <span>Fast and secure delivery right to your doorstep</span>
            </li>
            <li className="flex items-start gap-3 text-gray-800 text-sm sm:text-base">
              <ThumbsUp size={20} className="text-[#DB0030] mt-0.5" />
              <span>Trusted by thousands of sneaker lovers nationwide</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
