import React from "react";
import DeleteCourseDescriptionData from "@/components/DeleteCourseDescriptionData";

function DeleteCoursesDescriptionList({courses, onDelete}) {
    return (
        <>
            <section>
                <dl className={"courseDL"}>
                    {courses.map((course, courseIndex) =>
                        <DeleteCourseDescriptionData
                            course={course}
                            key={courseIndex}
                            onDelete={onDelete}
                        />
                    )}
                </dl>
            </section>
        </>
    )
}

export default DeleteCoursesDescriptionList