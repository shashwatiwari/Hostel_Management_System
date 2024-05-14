import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HostelSelect = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/Hostel');
                const data = await response.json();
                setData(data);
                // console.log(data);
            } catch (err) {
                console.log(err);
            }

        };
        fetchData();
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-blue-200">
            <h2 className="text-3xl font-bold mb-6">Choose Your Hostel</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.map((hostel) => (

                    <div
                        onClick={() => {
                            sessionStorage.setItem('Hostel', hostel.HostelName)
                            navigate('/blockselect')
                        }}
                        className="rounded-lg overflow-hidden shadow-md hover:shadow-lg"
                    >
                        <img
                            src={`${hostel.HostelName}.jpg`}
                            alt={hostel.HostelName}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4 bg-white">
                            <h3 className="text-lg font-semibold mb-2">{hostel.HostelName}</h3>
                            {/* <h3 className="text-1xl  mb-2"><span>Total Room - </span>{hostel.TotalRoom}</h3> */}
                            <h3 className="text-1xl  mb-2"><span>Booked Room - </span>{hostel.BookedRoom}</h3>
                            <h3 className="text-1xl  mb-2"><span>Available Room - </span>{hostel.TotalRoom - hostel.BookedRoom}</h3>
                            <h3 className="text-1xl  mb-2"><span>Room Rent - </span>{`₹${hostel.Rent}`}</h3>
                            <h3 className="text-1xl  mb-2"><span>Mess Charge - </span>{`₹${hostel.MessCharge}`}</h3>
                            {/* <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HostelSelect;
