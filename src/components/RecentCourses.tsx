import {Box, Grid, Spinner} from "@chakra-ui/react";
import React, {useState} from "react";
import CourseCard from "./CourseCard";
import {useNavigate} from "react-router-dom";

const RecentCourses = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [courses, setCourses] = useState<any>([{}, {}, {}, {}]);


    const onClickHandler = (data: any) => {
        navigate("/course-view", {state: {message: data}});
    };

    const cardMarkup = courses.map((line: any) => {
        return (
            <CourseCard
                key={line?.id}
                courseTitle={line?.name}
                instituteName={line?.institute}
                image={line?.image}
                description={line?.description}
                onClick={() => {
                    onClickHandler(line);
                }}
            />
        );
    });

    return (
        <>
            <section className="recent-courses">
                <Box className="py-10">
                    <Box className="text-center pb-8">
                        <h1 className="text-4xl font-bold">Latest Courses</h1>
                    </Box>
                    {isLoading ? (
                        <Box className="text-center pt-10 ">
                            <Spinner className="" color="red.500"/>
                        </Box>
                    ) : (
                        <Grid templateColumns="repeat(4, 1fr)" gap={3}>
                            {cardMarkup}
                        </Grid>
                    )}
                </Box>
            </section>
        </>
    )
}

export default RecentCourses