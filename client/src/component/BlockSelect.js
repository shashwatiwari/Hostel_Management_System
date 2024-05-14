// OptionSelectionComponent.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BlockSelect = () => {
    const [selectedBlock, setSelectedBlock] = useState(null);
    const navigate = useNavigate();
    const selectBlock = (block) => {
        setSelectedBlock(block);
    };
    const BlockSelect = () => {
        navigate('/blockselect/selectfloor');
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold mb-4">Select a Block</h1>
                <div className="grid grid-cols-2 gap-4">
                    <div
                        onClick={() => {
                            selectBlock('A')
                            sessionStorage.setItem('Block', 'A')
                            navigate('/blockselect/selectfloor')
                        }}
                        className={`bg-blue-300 cursor-pointer rounded-lg flex items-center justify-center p-6 ${selectedBlock === 'A' ? 'border-4 border-blue-500' : ''
                            }`}
                    >
                        <p className="text-2xl font-bold">A</p>
                    </div>
                    <div
                        onClick={() => {
                            selectBlock('B')
                            sessionStorage.setItem('Block', 'B')
                            navigate('/blockselect/selectfloor')
                        }}
                        className={`bg-green-300 cursor-pointer rounded-lg flex items-center justify-center p-6 ${selectedBlock === 'B' ? 'border-4 border-green-500' : ''
                            }`}
                    >
                        <p className="text-2xl font-bold">B</p>
                    </div>
                    <div
                        onClick={() => {
                            selectBlock('C')
                            sessionStorage.setItem('Block', 'C')
                            navigate('/blockselect/selectfloor')
                        }}
                        className={`bg-yellow-300 cursor-pointer rounded-lg flex items-center justify-center p-6 ${selectedBlock === 'C' ? 'border-4 border-yellow-500' : ''
                            }`}
                    >
                        <p className="text-2xl font-bold">C</p>
                    </div>
                    <div
                        onClick={() => {
                            selectBlock('D')
                            sessionStorage.setItem('Block', 'D')
                            navigate('/blockselect/selectfloor')
                        }}
                        className={`bg-red-300 cursor-pointer rounded-lg flex items-center justify-center p-6 ${selectedBlock === 'D' ? 'border-4 border-red-500' : ''
                            }`}
                    >
                        <p className="text-2xl font-bold">D</p>
                    </div>
                </div>
                {selectedBlock && (
                    <p className="mt-6 text-xl font-semibold text-center" >
                        You selected Block {selectedBlock}
                    </p>
                )}
            </div>
        </div>
    );
};

export default BlockSelect;
