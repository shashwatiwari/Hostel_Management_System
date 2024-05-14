import React from 'react'
import { Link } from 'react-router-dom';
import List from './List';

const Home = () => {

    const loginModule = ['Used for singing in the receptionists as well as guests', 'The front desk managers can view those feedbacks']
    const CheckIn = ['The system checks room availability and status', 'Shows free rooms with room details', 'Book the room and check in the guest']
    const FeedBacks = ['The guests can give ratings and feedback according to their experience', 'The front desk managers can view those feedbacks']
    const CheckOut = ['The system makes the room vacant and checks out the guest']

    return (
        <div className="min-h-screen bg-white">
            <div className="rounded-b-lg bg-purple-200 py-5 flex justify-between my-0 shadow">
                <div className="uppercase text-2xl font-serif text-purple-600 ml-5 mt-1">Hostel Management System</div>
                <Link className="px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800 mr-8 py-2 cursor-pointer" to='/admin'>Contiue to project</Link>
            </div>
            <div style={{ height: '250px' }} className="flex items-center shadow rounded">
                <div className="px-5 bg-white w-11/12 mx-auto p-5 font-serif shadow">
                    <div className="uppercase text-xl text-purple-600 mt-1">
                        Objective
                    </div>
                    <div className="w-10/12 m-3">
                        <ul className="list-disc list-inside my-2">
                            <li className="my-1">
                                Guest Tracker and Hospitality Management system provides all the
                                action that are happened in daily operation of any hostel
                            </li>
                            <li className="my-1">
                                It mainly deals with Booking of room, Allocation details of rooms,
                                Room Attendee details, Room rent, Billing, Room vacating, Customer Feedback.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="font-serif px-10 bg-purple-50 py-5">
                <div className="uppercase text-xl text-purple-600 mt-1">
                    Modules
                </div>
                <div className=" m-3 grid grid-cols-2">
                    <List title='Login Modules' messages={loginModule} />
                    <List title='Guest check in and room booking' messages={CheckIn} />
                    <List title='Feedbacks' messages={FeedBacks} />
                    <List title='Guest check out' messages={CheckOut} />
                </div>
            </div>

        </div>
    )
}

export default Home;