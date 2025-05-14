import React, { useEffect, useState } from 'react'
import { students } from '../../data'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext/AuthContext'
import { signOut } from '../firebaseDB/auth';
import { useStudentContext } from '../Context/StudentContext/StudentContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function StudentDashboard() {
  const {userLoggedIn,setUserLoggedIn, setCurrentUser, loading , setLoading} = useAuth();
  const { studentArr, setStudentArr } = useStudentContext();
  const navigate = useNavigate();
  const [div, setDiv] = useState(true);


    const [course, setCourse] = useState('All Courses')
    const onsubmit = async () => {
      setCurrentUser(null);
      await signOut()
      setUserLoggedIn(false);
      console.log("signed out");
      
     
    }
    if (!userLoggedIn) {
      navigate('/');
    } 

    useEffect(() => {
      const reloaded = localStorage.getItem("reloaded");
        
      if (!reloaded) {
          localStorage.setItem("reloaded", "true");
          window.location.reload();
      }

      const timer = setTimeout(() => setDiv(false), 3000);
      return () => clearTimeout(timer);

  }, []);
    
    


  return (
    <>
    
      <div className='bg-black h-[100vh] text-white relative'>
        <div className='absolute top-10 right-10 max-sm:top-2'>
          <button className='cursor-pointer py-2 px-4 rounded-md bg-blue-600' onClick={onsubmit} >SignOut</button>
        </div>
            <div className='w-[80vw] mx-auto p-10 max-sm:p-0 max-sm:w-[100vw]'>
                <div className='p-10 max-sm:p-0'>
                    <h1 className='text-3xl font-bold mb-10 max-sm:text-xl max-sm:p-2 '>Student Dashboard</h1>
                   
                    <div className='flex gap-10 max-sm:flex-col max-sm:justify-center max-sm:items-center'>
                    <Link to="/addstudent">
                    <div className='w-[20vw] flex items-center justify-between px-1 py-2 rounded-md mb-10 bg-blue-600 cursor-pointer max-sm:w-[80vw] max-sm:mb-0'>
                      <div className='mx-auto'>
                        <p className=' text-white font-bold'>Add Student</p>
                      </div>
                    </div>
                    </Link>
                    <div className='w-[20vw] flex items-center justify-center py-2 rounded-md mb-10 bg-blue-600 cursor-pointer text-white max-sm:w-[80vw]'>
    
                  
                    <label  className='text-white' for="course">Choose a course:</label>
                    <select onChange={(e)=> setCourse(e.target.value)} id="course" name="course">
                    <option className='text-black' value="All Courses" selected>All Courses</option>
                    <option className='text-black' value="BBA">BBA</option>
                    <option className='text-black' value="Bcom">Bcom</option>
                    <option className='text-black' value="BCA" >BCA</option>
                    <option className='text-black' value="MCA">MCA</option>
                    <option className='text-black' value="Btech">Btech</option>
                    </select>
                    </div>

                    </div>
                   
                    
                    <div >
                       <div className='flex justify-between font-bold border-b mb-5 p-2 max-sm:overflow-x-scroll '>
                        <p className='w-[10vw]  whitespace-nowrap px-4'>Name</p>
                        <p className='w-[10vw] whitespace-nowrap px-4'>Email</p>
                        <p className='w-[3vw]  whitespace-nowrap px-4'>Age</p>
                        <p className='w-[3vw]  whitespace-nowrap px-4'>Course</p>
                       </div>
                    </div>
                    <div>
                      {div ? (<div className='text-center text-5xl text-white font-bold flex items-center justify-center h-[50vh]'> <p>Fetching Data...</p></div>) :(
                        
                            studentArr.filter((student) => course === 'All Courses' || student.course === course).map((student,index) => (
                                <div key={index} className='flex justify-between border-b mb-5 p-2 max-sm:w-[100vw] overflow-x-scroll '>
                                    <p className="w-[10vw] max-sm:w-[50vw] whitespace-nowrap px-4">{student.name}</p>
                                    <p className="w-[10vw] max-sm:w-[100vw] whitespace-nowrap px-4">{student.email}</p>
                                    <p className="w-[3vw] max-sm:w-[50vw] whitespace-nowrap px-4">{student.age}</p>
                                    <p className="w-[3vw] max-sm:w-[50vw] whitespace-nowrap px-4">{student.course}</p>
                                </div>
                            )))
                         
                        }
                    </div>
                   
                    

                </div>

            </div>
      </div>
    </>
  )
}

export default StudentDashboard
