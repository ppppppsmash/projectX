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
    <div>
      {filteredData.map((data, index) => (
        <div key={index}>
          <p>My id: {data.id}</p>
          <p>My Title: {data.title}</p>
          <p>My Feature: {data.feature}</p>
          <p>My img: <img src={data.img} /></p>
          <p>My description: {data.description}</p>
        </div>
      ))}
    </div>
  );
}