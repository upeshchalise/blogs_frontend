import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <>
      <section className="w-full">
        <div className="flex flex-col p-4 w-3/4 mx-auto text-center">

          <strong className="text-3xl font-bold underline">
            Blogzz
          </strong>
          <p>Discover insights, stories, and trends in technology, design, and more.</p>
        </div>
        <div>
        <Input placeholder="Search blogzz" className="w-1/2 mx-auto"/>
        </div>
      </section>
    </>
  );
}
