import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export type dataType = { id: number; title: number; tag: Array<string>; description: string; thumbnail: string };

const Carousel: React.FC<{ datas: [dataType] }> = ({ datas }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedItem, setSelectedItem] = useState<dataType>();
    const carouselItemsRef = useRef<HTMLDivElement[] | null[]>([]);

    useEffect(() => {
        if (datas && datas[0]) {
            carouselItemsRef.current = carouselItemsRef.current.slice(
                0,
                datas.length
            );

            setSelectedIndex(0);
            setSelectedItem(datas[0]);
        }
    }, [datas]);

    const handleSelectedImageChange = (newIdx: number) => {
        if (datas && datas.length > 0) {
            setSelectedItem(datas[newIdx]);
            setSelectedIndex(newIdx);
            if (carouselItemsRef?.current[newIdx]) {
                carouselItemsRef?.current[newIdx]?.scrollIntoView({
                    inline: "center",
                    behavior: "smooth"
                });
            }
        }
    };

    const handleRightClick = () => {
        if (datas && datas.length > 0) {
            let newIdx = selectedIndex + 1;
            if (newIdx >= datas.length) {
                newIdx = 0;
            }
            handleSelectedImageChange(newIdx);
        }
    };

    const handleLeftClick = () => {
        if (datas && datas.length > 0) {
            let newIdx = selectedIndex - 1;
            if (newIdx < 0) {
                newIdx = datas.length - 1;
            }
            handleSelectedImageChange(newIdx);
        }
    };

    return (
        <CarouselContainer>
            <SelectedImg
                style={{ backgroundImage: `url(${selectedItem?.thumbnail})` }}
            />
            <Carousel_>
                <div className="carousel__data">
                    {datas &&
                        datas.map((data, idx) => (
                            <div
                                onClick={() => handleSelectedImageChange(idx)}
                                style={{ backgroundImage: `url(${data.thumbnail})` }}
                                key={data.id}
                                ref={(el) => (carouselItemsRef.current[idx] = el)}
                            />
                        ))}
                </div>
            </Carousel_>
            <button onClick={handleLeftClick}>
                이전
            </button>
            <button onClick={handleRightClick}>
                다음
            </button>
        </CarouselContainer>
    );
};

const CarouselContainer = styled.div`
    margin: 20px
`

const SelectedImg = styled.div`
width: 100%;
height: 500px;
margin-bottom: 8px;
background-position: center center;
background-repeat: no-repeat;
background-size: cover;
`

const Carousel_ = styled.div`
position: relative
`

export default Carousel;
