import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminOption = () => {
    const navigate = useNavigate();

    const handleAdminLogin = () => {
        navigate('/login');
    };

    const handleStudentLogin = () => {
        navigate('/student-login')
    }

    return (
        <div>
            <div
                className="min-h-screen flex flex-col justify-center items-center"
                style={{
                    backgroundImage: `url(/hostelimg.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="w-3/4 md:w-1/2 lg:w-1/3 bg-white p-8 rounded-md shadow-lg text-center">
                    <img
                        src='/admin.jpg'
                        alt="Admin"
                        className="w-20 h-20 rounded-full mx-auto mb-6"
                    />
                    <h2 className="text-2xl font-semibold mb-4">Login</h2>
                    <button
                        onClick={handleAdminLogin}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    >
                        Login as Admin
                    </button>
                    {/* <h2 className="text-2xl font-semibold mb-4 mt-4">Admin Login</h2> */}
                    <button
                        onClick={handleStudentLogin}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 ml-8 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    >
                        Login as Student
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminOption;
