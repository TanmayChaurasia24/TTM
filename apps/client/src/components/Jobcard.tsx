"use client";

import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function ThreeDCardDemo(props: any) {
  const currentDate = new Date(Date.now());

  const date = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  return (
    <>
      <CardContainer className="inter-var">
        <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-neutral-800 border-white/[0.2]  w-[30vw] sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem translateZ="50" className="text-3xl font-bold text-white">
            {props.post}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-sm max-w-sm mt-2 text-neutral-300"
          >
            {props.company}, {props.location}
          </CardItem>
          <div className="flex justify-between">
            <CardItem
              as="p"
              translateZ="60"
              className="text-sm max-w-sm mt-2 font-bold text-green-600"
            >
              {props.stipend}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-sm max-w-sm mt-2 text-neutral-300"
            >
              posted on: {date + "-" + month + "-" + year}
            </CardItem>
          </div>
          <div className="flex justify-between items-center mt-8">
            <CardItem
              translateZ={20}
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal bg-black text-white"
            >
              {props.type}
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-blue-300 text-black  text-xs font-bold"
            >
              Apply
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

    </>
  );
}
