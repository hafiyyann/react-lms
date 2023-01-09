import React, { Component, Fragment } from "react";
import axios from "axios";
import Course from "./CourseComponent";

class Courses extends Component {
    state = {
        courses: []
    }
    componentDidMount(){
        axios.get('http://localhost:8000/api/v1/course', {
            headers: {
                "Authorization" : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY3MzE2MjY1MCwiZXhwIjoxNjczMTY2MjUwLCJuYmYiOjE2NzMxNjI2NTAsImp0aSI6IlhJUnVJTDR2R1BKdHkxYXUiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.IyB0VrqDctdHVrVOiO7a8foVuGboLTwxEP35b5ur7eg'
            }
        })
        .then((res) => {
            console.log(res.data.courses)
            this.setState({
                courses: res.data.courses
            })
        })
    }
    render(){
        return (
            <Fragment>
                {
                    this.state.courses.map(course => {
                        return (
                            <Course key={course.id} course={course}></Course>
                        )
                    })
                }
            </Fragment>
        )
    }
}

export default Courses