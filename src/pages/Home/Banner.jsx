import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    // CarouselNext,
    // CarouselPrevious,
} from "@/components/ui/carousel"

const Banner = () => {
    return (
        <Carousel
            className='mt-8 mb-20'
            plugins={[
            Autoplay({
                delay: 2000,
            }),
        ]}>
            <CarouselContent className='h-[82dvh] -ml-0 rounded-xl *:bg-cover *:bg-no-repeat *:bg-center *:rounded-xl *:pl-0'>
                <CarouselItem style={{backgroundImage: 'url(https://media-cdn2.greatbritishchefs.com/media/ribbanef/img81602.whqc_2044x1362q80.webp)'}}></CarouselItem>
                <CarouselItem style={{backgroundImage: 'url(https://media-cdn2.greatbritishchefs.com/media/0rtjeean/img85503.whqc_1320x880q80.webp)'}}></CarouselItem>
                <CarouselItem style={{backgroundImage: 'url(https://media-cdn2.greatbritishchefs.com/media/fzgozlyf/img81384.whqc_1320x880q80.webp)'}}></CarouselItem>
                <CarouselItem style={{backgroundImage: 'url(https://media-cdn2.greatbritishchefs.com/media/dpiigoaq/img85513.whqc_1320x880q80.webp)'}}></CarouselItem>
                <CarouselItem style={{backgroundImage: 'url(https://media-cdn2.greatbritishchefs.com/media/wzbdfu0k/img81553.whqc_1320x880q80.webp)'}}></CarouselItem>
                <CarouselItem style={{backgroundImage: 'url(https://media-cdn2.greatbritishchefs.com/media/t4fmlnq5/img81381.whqc_1320x880q80.webp)'}}></CarouselItem>
                <CarouselItem style={{backgroundImage: 'url(https://media-cdn2.greatbritishchefs.com/media/ev5b4352/img85514.whqc_1320x880q80.webp)'}}></CarouselItem>
                <CarouselItem style={{backgroundImage: 'url(https://media-cdn2.greatbritishchefs.com/media/x1ifrwul/img81389.whqc_1320x880q80.webp)'}}></CarouselItem>
            </CarouselContent>
            {/*<CarouselPrevious />*/}
            {/*<CarouselNext />*/}
        </Carousel>

    );
};

export default Banner;
