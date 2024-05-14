import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

import cover1 from '/slider/image-1.jpg';
import cover2 from '/slider/image-2.jpg';
import cover3 from '/slider/image-3.jpg';
import cover4 from '/slider/image-4.jpg';
import cover5 from '/slider/image-5.jpg';
import cover6 from '/slider/image-6.jpg';

const Slider = () => {
    return (
        <Carousel
            className='mt-8 mb-20 shadow rounded-xl'
            plugins={[
            Autoplay({
                delay: 2000,
            }),
        ]}>
            <CarouselContent className='h-[70dvh] -ml-0 rounded-xl *:bg-contain *:bg-no-repeat *:bg-center *:rounded-xl *:pl-0'>
                <CarouselItem style={{ backgroundImage: `url(${cover1})` }}></CarouselItem>
                <CarouselItem style={{ backgroundImage: `url(${cover2})` }}></CarouselItem>
                <CarouselItem style={{ backgroundImage: `url(${cover3})` }}></CarouselItem>
                <CarouselItem style={{ backgroundImage: `url(${cover4})` }}></CarouselItem>
                <CarouselItem style={{ backgroundImage: `url(${cover5})` }}></CarouselItem>
                <CarouselItem style={{ backgroundImage: `url(${cover6})` }}></CarouselItem>
            </CarouselContent>
        </Carousel>

    );
};

export default Slider;
