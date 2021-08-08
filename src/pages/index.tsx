import React from "react";
import { Carousel } from 'components/Carousel'
import { NextPage } from "next";

const datas = [
  {
    id: 1,
    title: "hi",
    description: "hihihi",
    thumbnail: "https://picsum.photos/1000?random=1",
    tag: ["hihi", "hihi"],
  },
  {
    id: 2,
    title: "hi2",
    description: "hihihi2",
    thumbnail: "https://picsum.photos/1000?random=2",
    tag: ["hihi2", "hihi"],
  },
  {
    id: 3,
    title: "hi3",
    description: "hihihi3",
    thumbnail: "https://picsum.photos/1000?random=3",
    tag: ["hihi2", "hihi"],
  },
]
const IndexPage: NextPage = () => {
  return (
    <>
      <Carousel {...{ datas }} />
    </>
  );
};

export default IndexPage;
