import React from "react";
import EditCourseRow from "@/components/EditCourseRow";

function EditCoursesTable({courses, onEdit}) {
    return (
        <>
            <table className="center-middle" id="courses">
                <caption>
                </caption>
                <thead>
                <tr>
                    <th>Identifier</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Issuer</th>
                    <th>Status</th>
                    <th>Edit</th>
                </tr>
                </thead>
                <tbody>
                {courses.map((course, courseIndex) =>
                    <EditCourseRow
                        course={course}
                        key={courseIndex}
                        onEdit={onEdit}
                    />)}
                </tbody>
            </table>
        </>
    )
}

export default EditCoursesTable