import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentDetailsForm = () => {
    const navigate = useNavigate();

    const Block = sessionStorage.getItem('Block');
    const HostelName = sessionStorage.getItem('Hostel');
    const Floor = sessionStorage.getItem('Floor');
    const room = sessionStorage.getItem('Room');

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        middleName: '',
        dob: '',
        gender: '',
        phoneNumber: '',
        email: '',
        emergencyContact: '',
        address: '',
        university: '',
        studentId: '',
        course: '',
        yearOfStudy: '',
        HostelName: HostelName,
        Block: Block,
        Floor: Floor,
        room: room,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            sessionStorage.setItem('fName', formData.firstName);
            sessionStorage.setItem('lName', formData.lastName);
            sessionStorage.setItem('mName', formData.middleName);
            sessionStorage.setItem('DOB', formData.dob);

            sessionStorage.setItem('Gender', formData.gender);
            sessionStorage.setItem('PNo', formData.phoneNumber);
            sessionStorage.setItem('email', formData.email);
            sessionStorage.setItem('EContact', formData.emergencyContact);

            sessionStorage.setItem('Address', formData.address);
            sessionStorage.setItem('univer', formData.university);
            sessionStorage.setItem('sId', formData.studentId);
            sessionStorage.setItem('course', formData.course);
            sessionStorage.setItem('year', formData.yearOfStudy);


            const response = await fetch('http://localhost:5000/submitFormData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Data posted successfully:', data);
            } else {
                console.error('Error posting data:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
        navigate('/data');


    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold mb-4">Student Details Form</h1>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    {/* Personal Information */}
                    <h2 className="text-xl font-semibold mt-4 mb-2">Personal Information</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="border-2 border-gray-300 p-2 rounded-md"
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="border-2 border-gray-300 p-2 rounded-md"
                        />
                        {/* Middle Name */}
                        <input
                            type="text"
                            name="middleName"
                            placeholder="Middle Name (if applicable)"
                            value={formData.middleName}
                            onChange={handleChange}
                            className="border-2 border-gray-300 p-2 rounded-md"
                        />
                        {/* Date of Birth */}
                        <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            className="border-2 border-gray-300 p-2 rounded-md"
                        />
                        {/* Gender */}
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="border-2 border-gray-300 p-2 rounded-md"
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        {/* Phone Number */}
                        <input
                            type="tel"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="border-2 border-gray-300 p-2 rounded-md"
                        />
                        {/* Email */}
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border-2 border-gray-300 p-2 rounded-md"
                        />
                        {/* Emergency Contact */}
                        <input
                            type="text"
                            name="emergencyContact"
                            placeholder="Emergency Contact"
                            value={formData.emergencyContact}
                            onChange={handleChange}
                            className="border-2 border-gray-300 p-2 rounded-md"
                        />
                        {/* Address */}
                        <textarea
                            name="address"
                            placeholder="Address"
                            value={formData.address}
                            onChange={handleChange}
                            className="border-2 border-gray-300 p-2 rounded-md resize-none"
                        ></textarea>
                    </div>

                    {/* Academic Details */}
                    <h2 className="text-xl font-semibold mt-6 mb-2">Academic Details</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {/* University */}
                        <input
                            type="text"
                            name="university"
                            placeholder="University/College Name"
                            value={formData.university}
                            onChange={handleChange}
                            className="border-2 border-gray-300 p-2 rounded-md"
                        />
                        {/* Student ID */}
                        <input
                            type="text"
                            name="studentId"
                            placeholder="Student ID Number"
                            value={formData.studentId}
                            onChange={handleChange}
                            className="border-2 border-gray-300 p-2 rounded-md"
                        />
                        {/* Course */}
                        <input
                            type="text"
                            name="course"
                            placeholder="Course/Program"
                            value={formData.course}
                            onChange={handleChange}
                            className="border-2 border-gray-300 p-2 rounded-md"
                        />
                        {/* Year of Study */}
                        <input
                            type="text"
                            name="yearOfStudy"
                            placeholder="Year of Study"
                            value={formData.yearOfStudy}
                            onChange={handleChange}
                            className="border-2 border-gray-300 p-2 rounded-md"
                        />
                    </div>

                    {/* Submit button */}
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-6">
                        Book Hostel
                    </button>
                </form>
            </div>


        </div>
    );
};

export default StudentDetailsForm;
