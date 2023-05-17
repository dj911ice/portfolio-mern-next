import React from "react";

function EditCourseRow({course, onEdit}) {
    /*TODO route the modify button to form by id*/
    return (
        <tr>
            <td>{course.courseIdentifier}</td>
            <td>{course.courseName}</td>
            <td>{course.courseDescription}</td>
            <td>{course.courseIssuer}</td>
            <td>{course.courseCompleted === true ? "Completed": "In Progress"}</td>
            <td><button onClick={() => onEdit(course)}>Modify</button></td>
        </tr>
    )
}

export default EditCourseRow