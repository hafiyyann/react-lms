import React, { Component, Fragment } from "react";

class Chapter extends Component{
    state = {
        chapter: []
    }
    componentDidMount(){
        this.setState({
            chapter: this.props.chapter
        })
    }
    render() {
        return (
            <Fragment>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{this.state.chapter.title}</h5>
                        <p className="card-text">{this.state.chapter.description}</p>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Chapter