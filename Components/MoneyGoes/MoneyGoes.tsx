// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const MoneyGoes = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2500,
        cssEase: "linear"
    };
    return (
        <div>
            <h2 className="text-2xl font-bold text-center lg:text-3xl mt-4">Where the money goes?</h2>
            <Slider className="mt-4" {...settings}>
                <div>
                    <img src="/none.png" alt="" />
                </div>
                <div>
                    <img src="/ntwo.png" alt="" />
                </div>
                <div>
                    <img src="/nthree.png" alt="" />
                </div>
                <div>
                    <img src="/nfour.png" alt="" />
                </div>
                <div>
                    <img src="/nfive.png" alt="" />
                </div>
                <div>
                    <img src="/nsix.png" alt="" />
                </div>
                <div>
                    <img src="/nseven.png" alt="" />
                </div>
                <div>
                    <img src="/neight.png" alt="" />
                </div>
                <div>
                    <img src="/nnine.png" alt="" />
                </div>
                <div>
                    <img src="/nten.png" alt="" />
                </div>
                <div>
                    <img src="/neleven.png" alt="" />
                </div>
                <div>
                    <img src="/nlast.png" alt="" />
                </div>
            </Slider>
        </div>
    );
};

export default MoneyGoes;