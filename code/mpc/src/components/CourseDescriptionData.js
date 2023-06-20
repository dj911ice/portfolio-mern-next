import React from "react";

function CourseDescriptionData({course}) {
    return (
        <dt className={"courseDT"}>
            <dd> {course.courseIdentifier}<span>: </span>{course.courseName}</dd>
            <br/>
            <dd>{course.courseDescription}</dd>
            <br/>
            <dd><span>Course Issuer: </span>{course.courseIssuer}</dd>
            <dd><span>Status: </span>{course.courseCompleted === true ? "Completed": "In Progress"}</dd>
            <br/>
        </dt>

    )
}

export default CourseDescriptionData