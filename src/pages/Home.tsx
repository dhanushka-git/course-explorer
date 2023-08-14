import React from "react";
import HeroSection from "../components/HeroSection";
import RecentCourses from "../components/RecentCourses";
import TestimonialSection from "../components/TestimonialSection";
import NewsLetterSection from "../components/NewsLetterSection";

const Home = () => {
    return (
        <>
            <HeroSection/>
            <RecentCourses/>
            <TestimonialSection/>
            <NewsLetterSection/>
        </>
    )
}

export default Home;