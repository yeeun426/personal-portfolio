import MainHero from "@/components/main/MainHero";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gradient-to-b from-white/10 to-white/10 bg-[url('/images/main/background.webp')] bg-no-repeat bg-cover bg-center relative">
      <MainHero />
    </main>
  );
}
