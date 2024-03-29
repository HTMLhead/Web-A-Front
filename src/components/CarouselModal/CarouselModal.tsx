import React from "react";
import Image from "next/image";

import close from "assets/images/close.svg";

import {
  Dot,
  PickedImg,
  PickedVideo,
  DotWrapper,
  IndexWrapper,
  ButtonWrapper,
  CloseIconWrapper,
  ModalWrapper,
  ModalHeader,
} from "./CarouselModal.style";

import { ArrowBtn } from "components/ArrowBtn";

export interface ICarouselModal {
  selectedIndex: number;
  itemList: Array<string>;
  handlePrevClick: () => void;
  handleNextClick: () => void;
  handleModalClose: () => void;
  video?: boolean;
}

const CarouselModal: React.FC<ICarouselModal> = ({
  selectedIndex,
  itemList,
  handlePrevClick,
  handleNextClick,
  handleModalClose,
  video,
}) => {
  return (
    <>
      <ButtonWrapper style={{ left: video ? "22rem" : "36rem" }}>
        <ArrowBtn left white onClick={handlePrevClick} />
      </ButtonWrapper>
      <ModalWrapper>
        <ModalHeader>
          <IndexWrapper>
            {selectedIndex} / {video ? itemList.length : itemList.length - 2}
          </IndexWrapper>
          <CloseIconWrapper onClick={handleModalClose}>
            <Image unoptimized src={close} height={15} width={15} />
          </CloseIconWrapper>
        </ModalHeader>
        {video ? (
          <>
            <PickedVideo controls>
              <source src={itemList[selectedIndex]} type="video/mp4" />
            </PickedVideo>
            <DotWrapper>
              {itemList.map((item, i) => (
                <Dot key={`${item}-${i}`} selected={i === selectedIndex} />
              ))}
            </DotWrapper>
          </>
        ) : (
          <PickedImg
            style={{
              backgroundImage: `url(${itemList[selectedIndex]})`,
            }}
          />
        )}
      </ModalWrapper>
      <ButtonWrapper style={{ right: video ? "22rem" : "36rem" }}>
        <ArrowBtn white onClick={handleNextClick} />
      </ButtonWrapper>
    </>
  );
};

export default CarouselModal;
