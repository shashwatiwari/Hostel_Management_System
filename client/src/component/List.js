import React from 'react'

const List = ({ title, messages = [] }) => {
    return (
        <ul className="list-disc list-inside my-3 bg-white text-dark-700 shadow rounded p-3 px-8 mx-3">
            <p className="my-2 uppercase">{title}</p>
            {messages.map(obj => (<li className="my-1">{obj}</li>))}
        </ul>
    )
}

export default List