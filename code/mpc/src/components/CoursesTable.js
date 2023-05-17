import React from "react";
import CourseRow from "@/components/CourseRow";

function CoursesTable({courses}) {
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
                </tr>
                </thead>
                <tbody>
                {courses.map((course, courseIndex) =>
                    <CourseRow
                        course={course}
                        key={courseIndex}
                    />)}
                </tbody>
            </table>
        </>
    )
}

export default CoursesTable