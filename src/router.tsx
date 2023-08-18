import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Register from "./pages/Register";
import CourseView from "./pages/CourseView";
import {MainLayout} from "./components/MainLayout";
import CourseUpload from "./pages/CourseUpload";
import {useAuthContext} from "./contexts/auth-context";
import {createBrowserRouter, Navigate} from "react-router-dom";


const routes: any =
    [
        {
            path: "/",
            element: <MainLayout/>,
            children: [
                {path: "/", element: <Home/>},
                {path: "/courses", element: <Courses/>},
                {path: "/course-view", element: <CourseView/>},
                {path: "/profile", element: <PrivateRoute component={Profile}/>},
                {path: "/upload-course", element: <PrivateRoute component={CourseUpload}/>},
                {path: "/contact", element: <Contact/>}
            ],
        },
        {path: "/login", element: <Login/>},
        {path: "/register", element: <Register/>},
        {path: "/signup", element: <SignUp/>}
    ]


const AppRouter = createBrowserRouter(
    routes
);

export default AppRouter;

function PrivateRoute({component: Component, path, ...rest}: any) {
    const context = useAuthContext();

    if (context?.isLogged === false) {
        return <Navigate to="/login"/>;
    }

    return <Component {...rest} />;
}