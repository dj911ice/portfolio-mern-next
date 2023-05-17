import React from "react";

function DeleteCourseRow({course, onDelete}) {
    /*TODO route the modify button to form by id*/
    return (
        <tr>
            <td>{course.courseIdentifier}</td>
            <td>{course.courseName}</td>
            <td>{course.courseDescription}</td>
            <td>{course.courseIssuer}</td>
            <td>{course.courseCompleted === true ? "Completed": "In Progress"}</td>
            <td><button onClick={() => onDelete(course._id)}>Remove</button></td>
        </tr>
    )
}

export default DeleteCourseRow