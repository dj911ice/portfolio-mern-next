import React from "react";

function CourseRow({course}) {
    return (
        <tr>
            <td>{course.courseIdentifier}</td>
            <td>{course.courseName}</td>
            <td>{course.courseDescription}</td>
            <td>{course.courseIssuer}</td>
            <td>{course.courseCompleted === true ? "Completed": "In Progress"}</td>
        </tr>
    )
}

export default CourseRow