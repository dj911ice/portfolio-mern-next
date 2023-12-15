import React from "react";
import Link from "next/link";

function CourseDescriptionData({course}) {
    return (
        <dt className={"courseDT"}>
            <dd> {course.courseIdentifier}<span>: </span>{course.courseName}</dd>
            <br/>
            <dd>{course.courseDescription}</dd>
            <br/>
            <dd>
                <span>Course Issuer: </span>
                {course.institutionalLink === null ?
                    course.courseIssuer :
                    <Link href={course.institutionalLink} target={"_blank"}>{course.courseIssuer}</Link>}
            </dd>
            <dd><span>Status: </span>{course.courseCompleted === true ? "Completed" : "In Progress"}</dd>
            <br/>
        </dt>

    )
}

export default CourseDescriptionData