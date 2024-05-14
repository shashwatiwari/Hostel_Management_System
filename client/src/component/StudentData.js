import React from 'react';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const Receipt = ({ data }) => (
    <Document>
        <Page style={styles.page} className="min-h-screen bg-gray-100 flex items-center justify-center">
            <View style={styles.section}>
                <Text style={styles.title} className="text-3xl font-bold mb-4">Receipt</Text>
                <View style={styles.content} className="space-y-2">
                    {/* Display the receipt content */}
                    <Text>Name: {data.firstName} {data.middleName} {data.lastName}</Text>
                    <Text>Date of Birth: {data.dob}</Text>
                    <Text>Gender: {data.gender}</Text>
                    <Text>Phone: {data.phoneNumber}</Text>
                    <Text>Email: {data.email}</Text>
                    <Text>Emergency Contact: {data.eContact}</Text>
                    <Text>Address: {data.Address}</Text>
                    <Text>University Name: {data.univer}</Text>
                    <Text>Course: {data.course}</Text>
                    <Text>Year: {data.year}</Text>
                    <Text>Student Id: {data.sId}</Text>
                    <Text>Block Name: {data.block}</Text>
                    <Text>Hostel Name: {data.hostel}</Text>
                    <Text>Floor: {data.floor}</Text>
                    {/* Add other data here */}
                </View>
            </View>
        </Page>
    </Document>
);

// Styles for both StudentData and Receipt
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
    },
    content: {
        fontSize: 12,
    },
});
// Styles for PDF


const StudentData = () => {
    // Fetch data from sessionStorage or props
    const data = {
        firstName: sessionStorage.getItem('fName'),
        lastName: sessionStorage.getItem('lName'),
        middleName: sessionStorage.getItem('mName'),
        dob: sessionStorage.getItem('DOB'),
        gender: sessionStorage.getItem('Gender'),
        phoneNumber: sessionStorage.getItem('PNo'),
        email: sessionStorage.getItem('email'),
        eContact: sessionStorage.getItem('EContact'),

        Address: sessionStorage.getItem('Address'),
        univer: sessionStorage.getItem('univer'),
        sId: sessionStorage.getItem('sId'),
        course: sessionStorage.getItem('course'),
        year: sessionStorage.getItem('year'),

        block: sessionStorage.getItem('Block'),
        hostel: sessionStorage.getItem('Hostel'),
        floor: sessionStorage.getItem('Floor'),
        room: sessionStorage.getItem('Room'),
        // Add other data here based on your sessionStorage keys
    };

    const handleDownload = () => {
        // This function generates the PDF for download
        console.log('Receipt downloaded!');
        // Additional logic for PDF generation goes here
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold mb-4">Student Details</h1>
                <div className="grid grid-cols-2 gap-4">
                    {/* Display Personal Information */}
                    <div className="text-gray-700">
                        <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                        <div className="space-y-2">
                            <p><strong>Name:</strong> {data.firstName} {data.middleName} {data.lastName}</p>
                            <p><strong>Date of Birth:</strong> {data.dob}</p>
                            <p><strong>Gender:</strong> {data.gender}</p>
                            <p><strong>Phone:</strong> {data.phoneNumber}</p>
                            <p><strong>Email:</strong> {data.email}</p>
                            <p><strong>Emergency Contact:</strong> {data.eContact}</p>
                            <p><strong>Address:</strong> {data.Address}</p>
                        </div>
                    </div>

                    {/* Display Academic Details */}
                    <div className="text-gray-700">
                        <h2 className="text-xl font-semibold mb-4">Academic Details</h2>
                        <div className="space-y-2">
                            <p><strong>University:</strong> {data.univer}</p>
                            <p><strong>Student ID:</strong> {data.sId}</p>
                            <p><strong>Course:</strong> {data.course}</p>
                            <p><strong>Year of Study:</strong> {data.year}</p>
                        </div>
                    </div>
                    <div className="text-gray-700">
                        <h2 className="text-xl font-bold  mb-4">Hostel Details</h2>
                        <div className="space-y-2">
                            <p><strong>Hostel Name:</strong> {data.hostel}</p>
                            <p><strong>Block No.:</strong> {data.block}</p>
                            <p><strong>Floor:</strong> {data.floor}</p>
                            <p><strong>Room No.:</strong> {data.room}</p>
                        </div>
                    </div>
                </div>

                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-6 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"><PDFDownloadLink document={<Receipt data={data} />} fileName="receipt.pdf">
                    {({ blob, url, loading, error }) =>
                        loading ? 'Loading document...' : 'Download Receipt'
                    }
                </PDFDownloadLink>
                </button>
            </div>
        </div>
    );
};

export default StudentData;


