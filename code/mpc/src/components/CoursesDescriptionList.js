import React from "react";
import CourseRow from "@/components/CourseRow";
import CourseDescriptionData from "@/components/CourseDescriptionData";

function CoursesDescriptionList({courses}) {
    return (
        <>
            <section>
                <dl className={"courseDL"}>
                    {courses.map((course, courseIndex) =>
                        <CourseDescriptionData
                            course={course}
                            key={courseIndex}
                        />
                    )}
                </dl>
            </section>
        </>
    )
}

export default CoursesDescriptionList