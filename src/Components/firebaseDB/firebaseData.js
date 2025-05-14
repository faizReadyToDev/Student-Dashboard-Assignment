// src/firebaseDB/studentService.js
import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const studentsCollectionRef = collection(db, "students");

// Add a new student to Firestore
export const addStudent = async (student) => {
    try {
        await addDoc(studentsCollectionRef, student);
        console.log("Student added:", student);
    } catch (error) {
        console.error("Error adding student:", error);
    }
};

// Fetch all students from Firestore
export const fetchStudents = async () => {
    try {
        const snapshot = await getDocs(studentsCollectionRef);
        return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error fetching students:", error);
        return [];
    }
};
