export type Data = {
  id?: string;
  img: string;
  title: string;
  description: string;
  feature: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};