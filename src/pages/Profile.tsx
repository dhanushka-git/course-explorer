import React, {useState} from "react";
import {Avatar, Box, Button, Center, useColorModeValue, Wrap, WrapItem} from "@chakra-ui/react";
import InstituteCourses from "../components/InstituteCourses";
import {useNavigate} from "react-router-dom";
import {useAuthContext} from "../contexts/auth-context";

const Profile = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [courses, setCourses] = useState<Array<string>>([]);
    const [profileData, setProfileData] = useState<any>({type: "institute"});
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const navigate = useNavigate();
    const {isLogged} = useAuthContext()


    return (
        <>
            <Box
                className="flex flex-col py-10 min-h-[80vh]"
                bg={useColorModeValue("gray.100", "gray.900")}
            >
                <Box className="w-[50%] m-auto p-10 rounded-xl shadow-xl bg-white">
                    <Center className="">
                        <Wrap className="m-auto">
                            <WrapItem className="">
                                <Avatar
                                    className="m-auto"
                                    size="2xl"
                                    name=""
                                    src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_960_720.png"
                                />
                            </WrapItem>
                        </Wrap>
                    </Center>
                    <Center className="my-3">
                        <h2 className="text-3xl font-bold">{profileData?.name}</h2>
                    </Center>
                    <Center>
                        <p>Email :- {profileData?.email}</p>
                    </Center>
                    <Center>
                        <p>Type :- {profileData?.type}</p>
                    </Center>
                    {profileData?.type === "student" ? (
                        <>
                            <Center className="mt-10">
                                <p>Education Level :- {profileData?.max_edu_level}</p>
                            </Center>
                            <Center className="mt-10">
                                <p>Interested Field :- {profileData?.interested_field}</p>
                            </Center>
                        </>
                    ) : null}

                    {profileData?.type === "institute" ? (
                        <div className="text-center pt-10">
                            <Button
                                className="m-10"
                                colorScheme="blue"
                                size="md"
                                width={"60%"}
                                onClick={() => {
                                    isLogged ? navigate("/upload-course") : navigate("/login");
                                }}
                            >
                                Upload Course
                            </Button>
                        </div>
                    ) : null}
                </Box>
            </Box>
            {profileData?.type === "institute" ? (
                <InstituteCourses institute={profileData?.name}/>
            ) : null}
        </>
    )
}

export default Profile;