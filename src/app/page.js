export default function Home() {
  return (
    <main className="text-center">
      <div className="flex flex-col mt-10 gap-7 items-center">
        <h1 className="text-3xl">
          Hi, I&apos;m Adam, <br /> a Web Developer
        </h1>
        <button className="bg-purple-600 w-[35%] h-9 text-sm rounded-md">
          <a href="/projects">View My Work</a>
        </button>
      </div>
      <div className="mt-22">
        <h2 className="text-2xl">Featured Projects</h2>
      </div>
    </main>
  );
}
