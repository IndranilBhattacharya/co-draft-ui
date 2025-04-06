export default function LandingGreeting() {
  return (
    <div className="w-1/2 h-full flex flex-col pt-[25vh] pb-[5vh] items-start">
      <div className="gap-2 flex flex-col items-start">
        <div className="text-7xl font-bold">
          <span className="bg-gradient-to-r from-gray-300 to-gray-700 bg-clip-text text-transparent">
            Co
          </span>
          <span>Draft</span>
        </div>
        <div className="text-xl text-muted-foreground">
          Instant collaboration. No clutter. Just draft and go.
        </div>
      </div>
      <div className="mt-auto text-xs">
        © 2025 Indranil Bhattacharya. All Rights Reserved.
      </div>
    </div>
  );
}
