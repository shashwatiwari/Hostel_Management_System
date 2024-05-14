import React, { useState } from 'react';

const StudentLoginForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });
    const [studentDetails, setStudentDetails] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/checkStudentEmail', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: formData.email
                })
            });
            const data = await response.json();
            if (data) {
                setStudentDetails(data);
            } else {
                setStudentDetails(null);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <div className="container mx-auto p-4">
            {!studentDetails && (
                <div>
                    <h1 className="text-4xl font-bold mb-8 mt-8 text-center">Student Login</h1>
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="w-full border border-gray-300 rounded-md p-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full border border-gray-300 rounded-md p-2"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                        >
                            Login
                        </button>
                    </form>
                </div>)}

            {studentDetails && (
                <div className="container mx-auto p-4">
                    <h1 className="text-4xl font-bold mb-8 mt-8 text-center">Student Details</h1>
                    <div className="w-600 mx-auto bg-white p-6 rounded-md shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <p><span className="font-semibold">Name:</span> {studentDetails.firstName} {studentDetails.lastName}</p>
                            <p><span className="font-semibold">Date of Birth:</span> {studentDetails.dateOfBirth}</p>
                            <p><span className="font-semibold">Gender:</span> {studentDetails.gender}</p>
                            <p><span className="font-semibold">Phone Number:</span> {studentDetails.phoneNumber}</p>
                            <p><span className="font-semibold">Email:</span> {studentDetails.email}</p>
                            <p><span className="font-semibold">Emergency Contact:</span> {studentDetails.emergencyContact}</p>
                            <p><span className="font-semibold">Address:</span> {studentDetails.address}</p>
                            <p><span className="font-semibold">University:</span> {studentDetails.university}</p>
                            <p><span className="font-semibold">Student ID:</span> {studentDetails.studentId}</p>
                            <p><span className="font-semibold">Course:</span> {studentDetails.course}</p>
                            <p><span className="font-semibold">Year of Study:</span> {studentDetails.yearOfStudy}</p>
                            <p><span className="font-semibold">Hostel Name:</span> {studentDetails.HostelName}</p>
                            <p><span className="font-semibold">Block:</span> {studentDetails.Block}</p>
                            <p><span className="font-semibold">Floor:</span> {studentDetails.Floor}</p>
                            <p><span className="font-semibold">Room:</span> {studentDetails.room}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StudentLoginForm;
