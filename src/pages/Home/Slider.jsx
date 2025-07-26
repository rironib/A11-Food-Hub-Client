import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

import cover1 from '/slider/slider1.webp';
import cover2 from '/slider/slider2.webp';
import cover3 from '/slider/slider3.webp';
import cover4 from '/slider/slider4.webp';

const Slider = () => {
    return (
        <Carousel
            className='mt-8 mb-20 shadow rounded-xl'
            plugins={[
            Autoplay({
                delay: 2000,
            }),
        ]}>
            <CarouselContent className='h-[80dvh] -ml-0 rounded-xl *:bg-contain *:bg-no-repeat *:bg-center *:rounded-xl *:pl-0 *:border-0 *:shadow-none'>
                <CarouselItem style={{ backgroundImage: `url(${cover1})` }}></CarouselItem>
                <CarouselItem style={{ backgroundImage: `url(${cover2})` }}></CarouselItem>
                <CarouselItem style={{ backgroundImage: `url(${cover3})` }}></CarouselItem>
                <CarouselItem style={{ backgroundImage: `url(${cover4})` }}></CarouselItem>
            </CarouselContent>
        </Carousel>

    );
};

export default Slider;
