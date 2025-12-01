import { Marquee } from "@/components/ui/marquee";
import vipplayLogo from "../assets/sponsors/vipplay.svg";
import hrtLogo from "../assets/sponsors/hrt.svg";
import iidLogo from "../assets/sponsors/iid.svg";
import turboLogo from "../assets/sponsors/turbo.svg";
import brightDataLogo from "../assets/sponsors/bright data.svg";

const sponsors = [
  {
    name: "VIPPlay",
    logo: vipplayLogo,
  },
  {
    name: "HRT",
    logo: hrtLogo,
  },
  {
    name: "Rhodes Information Initiative",
    logo: iidLogo,
  },
  {
    name: "Turbo",
    logo: turboLogo,
  },
  {
    name: "Bright Data",
    logo: brightDataLogo,
  },
];

const firstRow = sponsors.slice(0, Math.ceil(sponsors.length / 2));
const secondRow = sponsors.slice(Math.ceil(sponsors.length / 2));

const SponsorCard = ({ logo, name }) => {
  return (
    <div className="flex items-center justify-center px-16 py-12">
      <img
        src={logo}
        alt={name}
        className="h-32 w-auto max-w-[320px] object-contain transition-transform duration-300 hover:scale-110"
      />
    </div>
  );
};

export function SponsorsMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-12 gap-8">
      <Marquee pauseOnHover className="[--duration:25s]">
        {firstRow.map((sponsor) => (
          <SponsorCard key={sponsor.name} {...sponsor} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:25s]">
        {secondRow.map((sponsor) => (
          <SponsorCard key={sponsor.name} {...sponsor} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#1a1a1a]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#1a1a1a]"></div>
    </div>
  );
}

export default SponsorsMarquee;
