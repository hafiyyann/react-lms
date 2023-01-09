import React, { Component, Fragment } from "react";
import Chapter from "../ChapterComponent/ChapterComponent";

class Course extends Component{
    state = {
        course: [],
        chapters: []
    }
    componentDidMount(){
        console.log(this.props.course.chapters)
        this.setState({
            course: this.props.course,
            chapters: this.props.course.chapters
        })
    }
    render(){
        return (
            <Fragment>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{this.state.course.title}</h5>
                        <p className="card-sub-title">{this.state.course.quota}</p>
                        <p className="card-text">{this.state.course.description}</p>
                        <div className="accordion">
                            {
                                this.state.chapters.map(chapter => {
                                    return (
                                        <Fragment key={chapter.id}>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-${chapter.id}" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                        {chapter.title}
                                                    </button>
                                                </h2>
                                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                                    <div className="accordion-body">
                                                        <Chapter key={chapter.id} chapter={chapter}></Chapter>
                                                    </div>
                                                </div>
                                            </div>
                                        </Fragment>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Course