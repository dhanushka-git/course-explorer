import {Box, Grid, Select, Spinner} from "@chakra-ui/react";
import React, {useState} from "react";
import CourseCard from "../components/CourseCard";
import {useNavigate} from "react-router-dom";

const Courses = () => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [courses, setCourses] = React.useState<any>([{}, {}, {}, {}]);
    const [form, setForm] = useState();
    const navigate = useNavigate();


    const handleInputChange = (event: any) => {
        const {name, value, type, checked} = event.target;

        if (type === "checkbox") {
            setForm((prevState: any) => ({
                ...prevState,
                interests: checked
                    ? [...prevState.interests, value]
                    : prevState.interests.filter((item: any) => item !== value),
            }));
        } else {
            setForm((prevState: any) => ({
                ...prevState,
                [name]: type === "number" ? parseInt(value) : value,
            }));
        }
    };

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
            <Box className="">
                <Box className={"p-3 flex flex-row gap-3 shadow-lg"}>
                    <Box className="flex-1 gap-2">
                        <label className="font-bold">Education</label>
                        <Select
                            placeholder="Filter by Educational Level"
                            color={"gray.800"}
                            className={""}
                            name="edu_level"
                            onChange={handleInputChange}
                        >
                            <option value={"Ordinary Level"}>Ordinary Level</option>
                            <option value={"Advanced Level"}>Advanced Level Level</option>
                            <option value={"Diploma"}>Diploma</option>
                            <option value={"Degree"}>Degree</option>
                        </Select>
                    </Box>
                    <Box className="flex-1 gap-2">
                        <label className="font-bold">Category</label>
                        <Select
                            placeholder="Filter by category"
                            color={"gray.800"}
                            name="category"
                            onChange={handleInputChange}
                        >
                            <option value={"Science"}>Science</option>
                            <option value={"Mathematics"}>Mathematics</option>
                            <option value={"IT"}>Information Technology</option>
                        </Select>
                    </Box>
                    <Box className="flex-1 gap-2">
                        <label className="font-bold">Duration</label>
                        <Select
                            placeholder="Filter by duration"
                            color={"gray.800"}
                            name="duration"
                            onChange={handleInputChange}
                        >
                            <option value={"One Year"}>One Year</option>
                            <option value={"Two Years"}>Two Years</option>
                            <option value={"Three Years"}>Three Years</option>
                            <option value={"Four Years"}>Four Years</option>
                        </Select>
                    </Box>
                    <Box className="flex-1 gap-2">
                        <label className="font-bold">Medium</label>
                        <Select
                            placeholder="Filter by medium"
                            color={"gray.800"}
                            name="medium"
                            onChange={handleInputChange}
                        >
                            <option value={"English"}>English</option>
                            <option value={"Sinhala"}>Sinhala</option>
                            <option value={"Tamil"}>Tamil</option>
                        </Select>
                    </Box>
                </Box>
                {isLoading ? (
                    <div className="text-center pt-20 h-[80vh]">
                        <Spinner className="" color="red.500"/>
                    </div>
                ) : (
                    <Box className="min-h-[80vh] py-3">
                        <Grid templateColumns="repeat(4, 1fr)" gap={3}>
                            {cardMarkup}
                        </Grid>
                    </Box>
                )}
            </Box>
        </>
    )
}

export default Courses;