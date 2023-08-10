import * as React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./components/MainLayout";
import Courses from "./pages/Courses";
import CourseView from "./pages/CourseView";
import Profile from "./pages/Profile";
import CourseUpload from "./pages/CourseUpload";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SignUp from "./pages/SignUp";

export const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<MainLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path={'/courses'} element={<Courses/>}/>
                        <Route path={'/course-view'} element={<CourseView/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route
                            path="/add-course"
                            element={<CourseUpload/>}
                        />
                        <Route path="/contact" element={<Contact/>}/>
                    </Route>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}
