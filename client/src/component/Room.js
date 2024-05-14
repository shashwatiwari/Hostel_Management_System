import React from 'react';
import { useNavigate } from 'react-router-dom';

const RoomGrid = () => {
    const navigate = useNavigate();
    const handleroom = (room) => {
        sessionStorage.setItem('Room', room);
        navigate('/form')
    }

    // Example room data (you can replace this with your actual data)
    const roomsData = [
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
        {
            id: 5,
        },
        {
            id: 6,
        },
        {
            id: 7,
        },
        {
            id: 8,
        },
        {
            id: 9,
        },
    ];

    return (
        <>
            <h2 className="text-3xl font-bold mb-6 text-center mt-2">Select Room Number</h2>
            <div className="grid grid-cols-3 gap-8">
                {roomsData.map((room) => (
                    <div key={room.id} className="border rounded-lg p-4 transition-transform hover:scale-105">
                        <img
                            src={`${process.env.PUBLIC_URL}/room.webp`}
                            alt={`Room ${room.id}`}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <div className="text-center">
                            {/* <h3 className="mb-0">{`Room ${sessionStorage.getItem('Floor')}${room.id}`}</h3> */}
                            <button className="mt-2 ml-4 bg-blue-500 text-white px-4 py-2 rounded transition-colors hover:bg-blue-700"
                                onClick={() => handleroom(`Room ${sessionStorage.getItem('Block')}${sessionStorage.getItem('Floor')}${room.id}`)}>
                                {` ${sessionStorage.getItem('Block')}${sessionStorage.getItem('Floor')}${room.id}`}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default RoomGrid;
