import React from 'react'
import ReactDOM from 'react-dom/client';
import Login from './login';
import Register from './register';
import Home from './home';
import Layout from './layout';
import Forgetpassword from './forgetpassword';
import Religion from './religion';
import Language from './language';
import Coursedetail from './coursedetail';
import BuddhCourses from './buddh_courses';
import CritianCourses from './chritian_courses';
import AllCourses from './all_courses';
import IslamCourses from './islam_course';
import JainCourses from './jain_course';
import ShikhCourses from './shikh_course';
import EnrollCourses from './enroll_course';
import Teacher from './teacher';
import Aboutus from './aboutus';
import Admission from './admission';
import Login_teacher from './login_teacher';
import ChangeUser from './changepassword';
import ChangeTeacher from './changepassword_teacher';
import Register_teacher from './register_teacher';
import Thanks from './thanks.js';
import AllData from './all_data';


import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index path='/home' element={<Home/>}/>
            <Route index path='/thanks' element={<Thanks/>} /> 
            <Route index path='/login' element={<Login/>} /> 
            <Route index path='/login_teacher' element={<Login_teacher/>} /> 
            <Route index path='/changepassword' element={<ChangeUser/>} /> 
            <Route index path='/changepassword_teacher' element={<ChangeTeacher/>} /> 
            <Route index path='/register_teacher' element={<Register_teacher/>} /> 
            <Route index path='/register' element={<Register/>} />
            <Route index path='/forgetpassword' element={<Forgetpassword/>} />
            <Route index path='/religion' element={<Religion/>} />
            <Route index path='/language' element={<Language/>} />
            <Route index path='/coursedetail' element={<Coursedetail/>} />
            <Route index path='/buddh_courses' element={<BuddhCourses/>} />
            <Route index path='/chritian_courses' element={<CritianCourses/>} />
            <Route index path='/all_courses/:religionid' element={<AllCourses/>} />
            <Route index path='/islam_course' element={<IslamCourses/>} />
            <Route index path='/jain_course' element={<JainCourses/>} />
            <Route index path='/shikh_course' element={<ShikhCourses/>} />
            <Route index path='/enroll_course' element={<EnrollCourses/>} />
            <Route index path='/teacher' element={<Teacher/>} />
            <Route index path='/aboutus' element={<Aboutus/>} />
            <Route index path='/admission/:id' element={<Admission/>} />
            <Route index path='/all_data' element={<AllData/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);