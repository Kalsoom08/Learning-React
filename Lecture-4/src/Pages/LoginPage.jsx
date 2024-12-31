import { useState } from "react";
import axios from 'axios'; 

const LoginPage = () => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });
    
    const handleChangeEmail = (event) => {
        setUserData({...userData, email: event.target.value});
    };
    
    const handleChangePassword = (event) => {
        setUserData({...userData, password: event.target.value});
    };
    
    const handleLogin = async () => {
        const { email, password } = userData;
        if (email.trim().length === 0) {
            alert("Please Enter Email!");
            return;
        }
        if (password.trim().length === 0) {
            alert("Please Enter Password!");
            return;
        }

        setUserData({ email: "", password: "" });
        console.log(userData);

        
            const response = await axios.post(
                "https://c5a2-2400-adcc-105-d700-c1c8-b49d-67ad-c43e.ngrok-free.app/user/addUser",
                { email, password }
            );
            console.log(response.data);
        
      
    };
    
    return (
        <>
            <div className="flex justify-center items-center">
                <div className="flex flex-col w-[400px] bg-gray-100 p-3 justify-center text-center mt-24 h-[400px] text-gray-500 rounded-md shadow-md">
                    <h2 className="font-bold text-[28px] m-3">LOGIN</h2>
                    <div className="m-2">
                        <span className="text-[14px]">Email:</span>
                        <input
                            className="p-2  w-full focus:outline-none mt-2 rounded-md"
                            onChange={handleChangeEmail}
                            value={userData.email}
                            type="email"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="m-2">
                        <span className="text-[14px]">Password:</span>
                        <input
                            className="p-2  w-full focus:outline-none mt-2 rounded-md"
                            onChange={handleChangePassword}
                            value={userData.password}
                            type="password"
                            placeholder="Enter your Password"
                        />
                    </div>
                    <button
                        className="bg-gray-500 m-4 p-2 text-white hover:bg-gray-600 rounded-md"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
