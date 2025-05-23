import React, { useState } from 'react';
import { useStudentContext } from '../Context/StudentContext/StudentContext';
import { useNavigate  } from 'react-router-dom';


function AddStudent() {
    const { studentArr, setStudentArr } = useStudentContext();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [enrollment, setEnrollment] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [course, setCourse] = useState('All Courses');

    const submitHandler = async (e) => {
        e.preventDefault();

        if (!name || !email || !age || !course) {
            alert("Please fill all the fields.");
            return;
        }

        const newStudent = { name, email, age, course, enrollment, fatherName};
        await setStudentArr(newStudent);

        // Clear the form
        setName('');
        setEmail('');
        setFatherName('');
        setEnrollment('');
        setAge('');
        setCourse('All Courses');

        console.log("New Student Added:", newStudent);
        navigate('/home');
    };

    return (
        <div className='bg-black h-[100vh] text-white flex flex-col items-center pt-40 max-sm:pt-10'>
            <h1 className='text-3xl font-bold mb-10'>ADD STUDENTS</h1>
            
            <form onSubmit={submitHandler} className="flex flex-col gap-5">
                <div className='flex gap-5 mb-5'>
                    <input 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        className='text-white border border-white p-2 rounded-md max-sm:w-[40vw]' 
                        type="text" 
                        placeholder='Enter Your Name' 
                    />
                    <input 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className='text-white border border-white p-2 rounded-md max-sm:w-[40vw]' 
                        type="email" 
                        placeholder='Enter Your Email' 
                    />
                </div>
                 <div className='flex gap-5 mb-5'>
                    <input 
                        value={enrollment} 
                        onChange={(e) => setEnrollment(e.target.value)} 
                        className='text-white border border-white p-2 rounded-md max-sm:w-[40vw]' 
                        type="text" 
                        placeholder='Enter Your Enrollment No.' 
                    />
                    <input 
                        value={fatherName} 
                        onChange={(e) => setFatherName(e.target.value)} 
                        className='text-white border border-white p-2 rounded-md max-sm:w-[40vw]' 
                        type="fathername" 
                        placeholder='Enter Your Father Name' 
                    />
                </div>
                
                <div className='flex gap-5 items-center mb-5'>
                    <input 
                        value={age} 
                        onChange={(e) => setAge(e.target.value)} 
                        className='text-white border border-white p-2 rounded-md max-sm:w-[40vw]' 
                        type="number" 
                        placeholder='Enter Your Age' 
                    />
                    <div className='max-sm:w-[40vw]'>

                        <label className='text-white max-sm:w-[40vw] cursor-pointer' htmlFor="course">Choose a course:</label>
                        <select 
                            value={course} 
                            onChange={(e) => setCourse(e.target.value)} 
                            id="course" 
                            name="course"
                            className="text-white cursor-pointer"
                            >
                            <option className='text-black' value="All Courses">All Courses</option>
                            <option className='text-black' value="BBA">BBA</option>
                            <option className='text-black' value="MBA">MBA</option>
                            <option className='text-black' value="Bcom">Bcom</option>
                            <option className='text-black' value="Mcom">Mcom</option>
                            <option className='text-black' value="BCA">BCA</option>
                            <option className='text-black' value="MCA">MCA</option>
                            <option className='text-black' value="Btech">B.tech</option>
                            <option className='text-black' value="Mtech">M.tech</option>
                        </select>
                        </div>
                        
                </div>

               
                
                <input  
                    className='w-[30vw] text-white border border-white p-2 rounded-md cursor-pointer max-sm:w-[80vw] max-sm:mx-auto hover:text-black hover:bg-white' 
                    type="submit" 
                    value='Submit' 
                />
            </form>
        </div>
    );
}

export default AddStudent;
