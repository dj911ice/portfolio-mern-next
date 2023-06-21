import React from "react";
import {router} from "next/client";

function EditCourseDescriptionData({course, onEdit}) {
    const viewCourses = () => {
        router.push('/courses/');
    }

    const courseAdmin = () => {
        router.push('/course/');
    }

    return (
        <dt className={"courseDT"}>
            <dd> {course.courseIdentifier}<span>: </span>{course.courseName}</dd>
            <br/>
            <dd>{course.courseDescription}</dd>
            <br/>
            <dd><span>Course Issuer: </span>{course.courseIssuer}</dd>
            <dd><span>Status: </span>{course.courseCompleted === true ? "Completed": "In Progress"}</dd>
            <br/>
            <button id={"editButton"} onClick={() => onEdit(course)}>Modify</button>
            <button id={"viewCourses"} onClick={viewCourses} >View Courses</button>
            <button className={"admin"} onClick={courseAdmin}>Courses Admin</button>

        </dt>

    )
}

export default EditCourseDescriptionData