import {Box, Button, FormControl, FormLabel, Input, Select, useColorModeValue} from "@chakra-ui/react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
// @ts-ignore
import $ from "jquery";
import {toast} from "react-toastify";
import {
    getDocs,
    query,
    addDoc,
    collection,
    where,
    serverTimestamp,
} from "firebase/firestore";
import {db} from "../firebase/firebase";

const CourseUpload = () => {
    const [name, setName] = useState<string>();
    const [eduLevel, setEduLevel] = useState<string>();
    const [duration, setDuration] = useState<string>();
    const [medium, setMedium] = useState<string>();
    const [category, setCategory] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [institute, setInstitute] = useState<string>();
    const [image, setImage] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const navigate = useNavigate();

    const sendEmails = (mailList: Array<string>) => {
        let data = {
            service_id: "service_cjj8p0o",
            template_id: "template_9huk4gg",
            user_id: "VoSRq32gOtH9L1l-e",
            template_params: {
                message: ` ${institute} just posted a new course on Course Finder. You received this email because you are interested in ${category}`,
                to_mails: mailList,
            },
        };

        $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
            type: "POST",
            data: JSON.stringify(data),
            contentType: "application/json",
        })
            .done(function () {
                console.log("Your mail is sent!");
            })
            .fail(function (error: any) {
                console.log("Oops... " + JSON.stringify(error));
            });
    };


    const onSubmitHandler = async () => {
        setIsLoading(true);
        addDoc(collection(db, "courses"), {
            name: name,
            duration: duration,
            edu_level: eduLevel,
            description: description,
            medium: medium,
            institute: institute,
            image: image,
            category: category,
            timestamp: serverTimestamp(),
        })
            .then((docRef: any) => {
                setIsLoading(false);
                // @ts-ignore
                toast("The course has been uploaded successfully!", {duration: 8000});

                getDocs(
                    query(
                        collection(db, "users"),
                        where("interested_field", "==", category)
                    )
                )
                    .then((users: any) => {
                        const userEmails = users?.docs.map((doc: any) => doc.data().email);
                        if (userEmails) {
                            sendEmails(userEmails);
                            navigate("/profile");
                        }
                    })
                    .catch((error: any) => {
                        console.error(error?.message);
                        navigate("/profile");
                    });
            })
            .catch((error: any) => {
                toast(error?.message);
            });
    };


    return (
        <>
            <Box
                flexDirection="column"
                bg={useColorModeValue("gray.100", "gray.900")}
                blur={"md"}
                justifyContent="center"
                alignItems="center"
                paddingY={10}
            >
                <Box className="w-[50%] m-auto p-4 bg-white shadow-xl" flexDir="column">
                    <h2 className="text-2xl font-bold">Add Course Details</h2>
                    <FormControl
                        onChange={(e: any) => {
                            setName(e?.target?.value);
                        }}
                        isRequired
                    >
                        <FormLabel>Course Name</FormLabel>
                        <Input type=""/>
                    </FormControl>
                    <FormControl
                        onChange={(e: any) => {
                            setEduLevel(e.target.value);
                        }}
                        isRequired
                    >
                        <FormLabel>Educational Level</FormLabel>
                        <Select placeholder="Select Educationnal level">
                            <option value={"Ordinary Level"}>Ordinary Level</option>
                            <option value={"Advanced Level"}>Advanced Level Level</option>
                            <option value={"Diploma"}>Diploma</option>
                            <option value={"Degree"}>Degree</option>
                        </Select>
                    </FormControl>
                    <FormControl
                        onChange={(e: any) => {
                            setDuration(e.target.value);
                        }}
                        isRequired
                    >
                        <FormLabel>Duration</FormLabel>
                        <Select placeholder="Select the duration of the course">
                            <option value={"One Year"}>One Year</option>
                            <option value={"Two Years"}>Two Years</option>
                            <option value={"Three Years"}>Three Years</option>
                            <option value={"Four Years"}>Four Years</option>
                        </Select>
                    </FormControl>
                    <FormControl
                        onChange={(e: any) => {
                            setMedium(e.target.value);
                        }}
                        isRequired
                    >
                        <FormLabel>Medium</FormLabel>
                        <Select placeholder="Select the medium of the course">
                            <option value={"English"}>English</option>
                            <option value={"Sinhala"}>Sinhala</option>
                            <option value={"Tamil"}>Tamil</option>
                        </Select>
                    </FormControl>
                    <FormControl
                        onChange={(e: any) => {
                            setCategory(e.target.value);
                        }}
                        isRequired
                    >
                        <FormLabel>Category</FormLabel>
                        <Select placeholder="Select the category of the course">
                            <option value={"Science"}>Science</option>
                            <option value={"Mathematics"}>Mathematics</option>
                            <option value={"IT"}>Information Technology</option>
                        </Select>
                    </FormControl>
                    <FormControl
                        onChange={(e: any) => {
                            setDescription(e.target.value);
                        }}
                        isRequired
                    >
                        <FormLabel>Description</FormLabel>
                        <Input type="text-area"/>
                    </FormControl>
                    <FormControl
                        onChange={(e: any) => {
                            setInstitute(e.target.value);
                        }}
                        isRequired
                    >
                        <FormLabel>Institute</FormLabel>
                        <Input type=""/>
                    </FormControl>
                    <FormControl
                        onChange={(e: any) => {
                            setImage(e.target.value);
                        }}
                        isRequired
                    >
                        <FormLabel>Image Link</FormLabel>
                        <Input type=""/>
                    </FormControl>
                    <Button
                        colorScheme="blue"
                        size="lg"
                        width={"100%"}
                        marginTop={4}
                        onClick={onSubmitHandler}
                        isLoading={isLoading}
                        loadingText="Uploading..."
                    >
                        Submit
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default CourseUpload;