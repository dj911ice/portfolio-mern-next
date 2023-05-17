import React from "react";
import DeleteCourseRow from "@/components/DeleteCourseRow";

function DeleteCoursesTable({courses, onDelete}) {
    return (
        <>
            <table className="center-middle" id="destinations">
                <caption>
                </caption>
                <thead>
                <tr>
                    <th>Identifier</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Issuer</th>
                    <th>Status</th>
                    <th>Remove</th>
                </tr>
                </thead>
                <tbody>
                {courses.map((course, courseIndex) =>
                    <DeleteCourseRow
                        course={course}
                        key={courseIndex}
                        onDelete={onDelete}
                    />)}
                </tbody>
            </table>
        </>
    )
}

export default DeleteCoursesTable