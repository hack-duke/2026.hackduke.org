import { Marquee } from "@/components/ui/marquee";

// Dynamically import all sponsor logos
const sponsorLogos = import.meta.glob('../assets/sponsors/*.svg', { eager: true, import: 'default' });
const sponsors = Object.values(sponsorLogos);

const firstRow = sponsors.slice(0, Math.ceil(sponsors.length / 2));
const secondRow = sponsors.slice(Math.ceil(sponsors.length / 2));

const SponsorCard = ({ logo }) => {
  return (
    <div className="flex items-center justify-center px-16 py-12">
      <img
        src={logo}
        alt="Sponsor"
        className="h-32 w-auto max-w-[320px] object-contain transition-transform duration-300 hover:scale-110"
      />
    </div>
  );
};

export function SponsorsMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-12 gap-8">
      <Marquee pauseOnHover className="[--duration:25s]">
        {firstRow.map((logo, i) => (
          <SponsorCard key={i} logo={logo} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:25s]">
        {secondRow.map((logo, i) => (
          <SponsorCard key={i} logo={logo} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#1a1a1a]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#1a1a1a]"></div>
    </div>
  );
}

export default SponsorsMarquee;
