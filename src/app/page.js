import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col  w-screen ">
      <div className="flex flex-col justify-center items-center mx-auto mt-16 gap-4">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-2xl">Konditore Cafe LInks</h1>
          <h2>Survey and Social Media</h2>
        </div>
        <div className="max-w-lg rounded-md">
          <div>Feedback Survey for $5 off</div>
          <div>Feedback Survey for $5 off</div>
        </div>
        <div className="flex">
          <a className="max-w-[4rem]">Instagram</a>
          <a>YouTube</a>
          <a>Konditorei</a>
        </div>
      </div>
    </main>
  );
}
