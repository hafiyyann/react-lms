// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Courses from './components/CourseComponent/CoursesComponent';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <div className='container py-5'>
        <Courses/>
      </div>
    </Fragment>
  );
}

export default App;
