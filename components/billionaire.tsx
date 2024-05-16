import { IBillionaire } from "@/interfaces/billionaire";
import Image from "next/image";
import Link from "next/link";

interface IBillionaireProps {
  billionaire: IBillionaire;
  index: number;
}

export function Billionaire({ billionaire, index }: IBillionaireProps) {
  return (
    <div className="flex flex-col items-center text-left relative hover:bg-neutral-700 active:bg-neutral-600 rounded-xl transition-all hover:scale-105">
      <Link href={`billionaire/${billionaire.id}`} className="relative w-full">
        <div className="w-full h-64 relative rounded-xl overflow-hidden">
          <Image
            src={
              billionaire.squareImage.includes("undefined")
                ? "/avatar.svg"
                : billionaire.squareImage
            }
            alt={billionaire.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col w-full px-4 space-y-0.5 my-2">
          <span className="font-semibold text-sm lg:text-lg">
            {billionaire.name} #{index}
          </span>
          <span className="font-light text-xs lg:text-sm">
            {Math.round(billionaire.netWorth / 1000)} Billion /{" "}
            {billionaire.industries.join(",")}
          </span>
        </div>
      </Link>
    </div>
  );
}
