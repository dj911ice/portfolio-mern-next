import React from "react";
import CourseRow from "@/components/CourseRow";
import CourseDescriptionData from "@/components/CourseDescriptionData";
import EditCourseDescriptionData from "@/components/EditCourseDescriptionData";

function EditCoursesDescriptionList({courses, onEdit}) {
    return (
        <>
            <section>
                <dl className={"courseDL"}>
                    {courses.map((course, courseIndex) =>
                        <EditCourseDescriptionData
                            course={course}
                            key={courseIndex}
                            onEdit={onEdit}
                        />
                    )}
                </dl>
            </section>
        </>
    )
}

export default EditCoursesDescriptionList