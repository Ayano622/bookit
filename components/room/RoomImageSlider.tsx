import React from 'react';
import { IImage } from "@/backend/models/room";  // Adjust the path as per your project structure
import { Carousel } from 'react-bootstrap';
import Image from 'next/image';  // Assuming you are using Next.js for `layout="fill"`

interface Props {
    images: IImage[];
}

const RoomImageSlider: React.FC<Props> = ({ images }) => {
    return (
        <Carousel>
            {images.length > 0 ? (
                images.map((image) => (
                    <Carousel.Item>
                        <div style={{ width: '100%', height: '460px' }}>
                            <Image
                                className="d-block m-auto"
                                src={"/images/default_room_image.jpg"}
                                alt={"/images/default_room_image.jpg"}
                                layout="fill"
                            />
                        </div>
                    </Carousel.Item>
                ))
            ) : (
                <Carousel.Item>
                    <div>No images available</div>
                </Carousel.Item>
            )}
        </Carousel>
    );
};

export default RoomImageSlider;
