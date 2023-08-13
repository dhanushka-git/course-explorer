import {useState} from "react";

const Profile = () => {
    const [user, setUser] = useState({
        name: "John Doe",
        email: ""
    })

    return (
        <div>
            <h1>Profile</h1>
        </div>
    )
}

export default Profile;