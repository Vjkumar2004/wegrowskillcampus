import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  imagePosition = "object-center",
}: PageHeroProps) {
  return (
    <div className="mx-auto mb-10 w-full max-w-[1440px] px-4 sm:px-6 lg:px-10">
      <section className="relative isolate min-h-[330px] overflow-hidden rounded-[24px] bg-[#0B3B8F] shadow-[0_24px_60px_rgba(11,59,143,0.18)] sm:min-h-[380px] sm:rounded-[30px] lg:min-h-[430px]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1440px"
          className={`z-0 object-cover ${imagePosition}`}
        />
        <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(7,27,58,0.97)_0%,rgba(11,59,143,0.88)_48%,rgba(11,59,143,0.18)_100%)]" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#071b3a]/55 via-transparent to-transparent" />
        <div className="relative z-20 flex min-h-[330px] items-center px-6 py-10 sm:min-h-[380px] sm:px-10 lg:min-h-[430px] lg:px-14 lg:py-14">
          <div className="max-w-3xl border-l-4 border-[#F7820E] pl-5 sm:pl-7">
            <span className="mb-4 inline-flex items-center rounded-full border border-[#F7820E]/50 bg-[#F7820E]/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-orange-100 backdrop-blur-sm sm:text-sm">
              {eyebrow}
            </span>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[3.5rem]">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8 lg:text-lg">
              {description}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 z-20 h-1 w-32 bg-[#F7820E] sm:w-48" aria-hidden="true" />
      </section>
    </div>
  );
}
