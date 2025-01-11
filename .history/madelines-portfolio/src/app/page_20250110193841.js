import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col items-center gap-4">
          {/* Cute Animation */}
          <div className="relative w-32 h-32">
            <div className="absolute top-2 left-8 w-20 h-10 bg-yellow-400 rounded-t-[50%]"></div>
            <div className="absolute top-5 left-14 w-10 h-3 bg-gray-700 rounded"></div>
            <div className="absolute bottom-0 left-4 w-16 h-16 bg-gray-600 rounded-full animate-spin">
              <div className="w-6 h-6 bg-gray-400 rounded-full m-auto"></div>
            </div>
          </div>
          {/* Text */}
          <div className="text-2xl font-bold text-gray-800">
            Under Construction!
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div>foot</div>
      </footer>
    </div>
  );
}
