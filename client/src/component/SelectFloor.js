import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SelectFloor = () => {
    const [selectedFloor, setSelectedFloor] = useState(null);
    const navigate = useNavigate();

    const setSelectedFloorAndNavigate = (floor) => {
        sessionStorage.setItem('Floor', floor);
        setSelectedFloor(floor);
        navigate('/room');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold mb-4 text-center"> Block: {sessionStorage.getItem('Block')}</h1>
                <h2 className="text-3xl text-center mb-4">Select a Floor:</h2>
                <div className="flex justify-center">
                    <div
                        onClick={() => setSelectedFloorAndNavigate(1)}
                        className={`cursor-pointer bg-blue-300 rounded-md px-6 py-4 m-2 ${selectedFloor === 1 ? 'border-4 border-blue-500' : ''
                            }`}
                    >
                        <p className="text-xl font-semibold">Floor 1</p>
                    </div>
                    <div
                        onClick={() => setSelectedFloorAndNavigate(2)}
                        className={`cursor-pointer bg-green-300 rounded-md px-6 py-4 m-2 ${selectedFloor === 2 ? 'border-4 border-green-500' : ''
                            }`}
                    >
                        <p className="text-xl font-semibold">Floor 2</p>
                    </div>
                    <div
                        onClick={() => setSelectedFloorAndNavigate(3)}
                        className={`cursor-pointer bg-yellow-300 rounded-md px-6 py-4 m-2 ${selectedFloor === 3 ? 'border-4 border-yellow-500' : ''
                            }`}
                    >
                        <p className="text-xl font-semibold">Floor 3</p>
                    </div>
                </div>
                {selectedFloor && (
                    <p className="mt-6 text-xl font-semibold text-center">
                        You selected Floor {selectedFloor} in Block {sessionStorage.getItem('Block')}
                    </p>
                )}
            </div>
        </div>
    );
};

export default SelectFloor;
