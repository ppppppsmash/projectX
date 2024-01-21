import { sliderData } from "@/data";

type PageProps = {
  params: {
    id: string
  }
}

export default function generateStaticParams({
  params
}: PageProps) {
  const filteredData = sliderData.filter((data) => data.id === params.id)

  return (
    <main className="px-5 md:px-10 md:pt-[120px]">
      {filteredData.map((data, index) => (
        <div key={index}>
          <p>My id: {data.id}</p>
          <p>My Title: {data.title}</p>
          <p>My Feature: {data.feature}</p>
          <p>My img: <img src={data.img} /></p>
          <p>My description: {data.description}</p>
        </div>
      ))}
    </main>
  );
}