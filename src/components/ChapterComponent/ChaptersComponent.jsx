import React, { Component, Fragment } from "react";
import axios from "axios";
import Chapter from "./ChapterComponent";

class Chapters extends Component {
    state = {
        chapters: []
    }
    componentDidMount(){
        axios.get('http://localhost:8000/api/v1/chapter', {
            headers: {
                "Authorization" : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY3MzE2MjY1MCwiZXhwIjoxNjczMTY2MjUwLCJuYmYiOjE2NzMxNjI2NTAsImp0aSI6IlhJUnVJTDR2R1BKdHkxYXUiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.IyB0VrqDctdHVrVOiO7a8foVuGboLTwxEP35b5ur7eg'
            }
        })
        .then((res) => {
            this.setState({
                chapters: res.data.chapters
            })
        })
    }
    render() {
        return (
            <Fragment>
                {
                    this.state.chapters.map(chapter => {
                        return (
                            <Chapter key={chapter.id} chapter={chapter}></Chapter>
                        )
                    })
                }
            </Fragment>
        )
    }
}

export default Chapters