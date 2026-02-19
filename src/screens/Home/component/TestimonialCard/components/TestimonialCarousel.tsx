"use client";

import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialCarousel() {
    const testimonials = [
        {
            quote: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
            name: "Olivia Perez",
            role: "Member",
        },
        {
            quote: "Suspendisse per risus senectus malesuada cras volutpat.",
            name: "Leo Tanaka",
            role: "Member",
        },
        {
            quote: "Another testimonial content goes here.",
            name: "John Carter",
            role: "Member",
        },
        {
            quote: "Fourth testimonial card example.",
            name: "Emma Watson",
            role: "Member",
        },
    ];

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            {testimonials.map((item, index) => (
                <TestimonialCard key={index} {...item} />
            ))}
        </Slider>
    );
}
