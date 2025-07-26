import Link from "next/link";

export default async function Home() {
  return (
    <div className="h-dvh w-screen bg-gray-950">
      <header className="relative flex items-end justify-center size-full overflow-hidden">
        <div className="relative z-30 p-5 text-shadow-white text-white text-center mb-40">
          <h1 className="2xl:text-8xl xl:text-6xl max-xl:text-4xl font-extralight font-(family-name:--font-bebas-neue)">
            CodeColorist
          </h1>
          <p className="2xl:text-4xl xl:text-2xl max-xl:text-xl font-extralight font-(family-name:--font-bebas-neue)">
            Security researcher and wannabe photographer
          </p>
          <div className="mt-6 font-light text-lg">
            <Link href="/posts/1" className="px-6 py-3 hover:text-gray-50">
              Posts
            </Link>
            <Link href="/talks" className="px-6 py-3 hover:text-gray-50">
              Talks
            </Link>
          </div>
        </div>
        <video
          controls={false}
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          x-webkit-airplay="deny"
          autoPlay
          loop
          muted
          className="absolute z-10 h-dvh w-dvw object-cover"
        >
          <source
            src="/background-hdr.mp4"
            type="video/mp4"
            media="(dynamic-range: high)"
          />
          <source src="/background-sdr.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </header>
    </div>
  );
}
