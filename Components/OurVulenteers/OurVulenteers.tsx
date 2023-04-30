
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const OurVulenteers = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <h2 className="text-3xl font-bold text-center">Our Vulenteers</h2>
            {/* <Carousel className="mt-14  ">
                <div>
                    <img src="/vone.png" alt="image1" />
                    <p className="legend">Image 1</p>

                </div>
                <div>
                    <img src="/vtwo.png" alt="image2" />
                    <p className="legend">Image 2</p>

                </div>
                <div>
                    <img src="/vthree.png" alt="image3" />
                    <p className="legend">Image 3</p>

                </div>
                <div>
                    <img src="/vfour.png" alt="image4" />
                    <p className="legend">Image 4</p>

                </div>
                <div>
                    <img src="/vfive.png" alt="image5" />
                    <p className="legend">Image 5</p>

                </div>
            </Carousel> */}
            <div className="mt-4 ">
                <Slider  {...settings}>   
                    <div className="w-full h-72">
                        <img className="px-2" src="/vone.png" alt="" /><br />
                        <h3 className="text-center font-bold">JONEY</h3>
                    </div>
                    <div className="w-full h-72">
                        <img className="px-2" src="/vone.png" alt="" /><br />
                        <h3 className="text-center font-bold">JONEY</h3>
                    </div>
                    <div className="w-full h-68">
                        <img className="px-2" src="/vone.png" alt="" /><br />
                        <h3 className="text-center font-bold">JONEY</h3>
                    </div>
                    <div className="w-full h-68">
                        <img className="px-2" src="/vone.png" alt="" /><br />
                        <h3 className="text-center font-bold">JONEY</h3>
                    </div>
                    <div className="w-full h-68">
                        <img className="px-2" src="/vone.png" alt="" /><br />
                        <h3 className="text-center font-bold">JONEY</h3>
                    </div>

                </Slider>
            </div>
        </div>
    );
};

export default OurVulenteers;