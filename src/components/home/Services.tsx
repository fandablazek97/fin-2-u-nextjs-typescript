import Heading from "@components/Heading";
import Link from "next/link";
import { BsFillHouseFill, BsFillShieldLockFill } from "react-icons/bs";
import { HiArrowRight, HiPresentationChartLine } from "react-icons/hi";
import { IoWallet } from "react-icons/io5";

type Props = {
  className?: string;
};

const services = [
  {
    name: "HYPOTÉKY A REFINANCOVÁNÍ",
    description: "Spočítejte si hypotéku podle sebe",
    href: "/sluzby/hypoteky",
    icon: BsFillHouseFill,
  },
  {
    name: "FIRMY A PODNIKATELÉ",
    description: "Individuální pomoc pro rozvoj",
    href: "/sluzby/firemni-financovani",
    icon: IoWallet,
  },
  {
    name: "WEALTH MANAGEMENT",
    description: "Pro současné i budoucí rentiéry.",
    href: "/sluzby/financni-nezavislost",
    icon: HiPresentationChartLine,
  },
  {
    name: "DOPLŇKOVÉ SLUŽBY",
    description: "Řízení rizik, vzdělávání a daňové poradenství.",
    href: "/sluzby/dalsi-sluzby",
    icon: BsFillShieldLockFill,
  },
];

export default function Services({ className = "" }: Props) {
  return (
    <div className={`grid grid-cols-1 gap-8 lg:grid-cols-2 ${className}`}>
      {services.map((item) => (
        <Link href={item.href} key={item.name}>
          <a className="group relative col-span-1 flex origin-center flex-col gap-5 rounded-xl py-12 px-6 outline-none transition duration-300 hover:scale-105 hover:bg-primary/15 focus-visible:ring-4 focus-visible:ring-primary/70 md:py-16 md:px-14">
            <div className="flex items-center justify-start gap-5">
              <div className="rounded-lg bg-primary/20 p-4">
                <item.icon className="text-xl text-primary transition-colors duration-300 sm:text-3xl lg:text-4xl" />
              </div>
              <Heading level={3} size="base">
                {item.name}
              </Heading>
            </div>
            <p>{item.description}</p>
            <HiArrowRight className="absolute right-0 top-1/2 -translate-x-24 -translate-y-1/2 text-lg text-primary opacity-0 transition duration-300 group-hover:-translate-x-12 group-hover:opacity-100 sm:text-2xl" />
          </a>
        </Link>
      ))}
    </div>
  );
}
