// src/Context/StudentContext/StudentContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import { addStudent, fetchStudents } from '../../firebaseDB/firebaseData';
import { students } from '../../../data';

// Create the context
const StudentContext = createContext();

// Custom hook to use the context
export function useStudentContext() {
    return useContext(StudentContext);
}


export function StudentProvider({ children }) {
    const [studentArr, setStudentArr] = useState([]);

    useEffect(() => {
        const loadStudents = async () => {
            const studentsFromFirestore = await fetchStudents();
            setStudentArr(studentsFromFirestore);
        };

        loadStudents();
    }, []);
  
    const addNewStudent = async (student) => {
        await addStudent(student);
        setStudentArr((prevStudents) => [...prevStudents, student]);
    };

   const value = {
        studentArr,
        setStudentArr: addNewStudent,
    };

    return (
        <StudentContext.Provider value={value}>
            {children}
        </StudentContext.Provider>
    );
}


