import React, {useEffect, useState} from "react";

import Header from "@/components/Header";
import {useRouter} from "next/router";
import EditCoursesTable from "@/components/EditCoursesTable";


function EditCourses({setCourse}) {
    const router = useRouter();
    const [courses, setCourses] = useState([]);


    const retrieveCourses = async () => {
        const response = await fetch('/api/courses');
        const courses = await response.json();
        setCourses(courses);
    }

    const courseById = async course => {
        // setCourse(course)
        await router.push({
            pathname: '/course/update/',
            query: {
                id: course._id,
                cIdentifier: course.courseIdentifier,
                cName: course.courseName,
                cDescription: course.courseDescription,
                cIssuer: course.courseIssuer
            },
            asPath: `/course/update/`
        });
    }

    useEffect(() => {
        retrieveCourses();
    }, []);

    return (
        <>
            <Header/>
            <main>
                <section>
                    <EditCoursesTable
                        courses={courses}
                        onEdit={courseById}
                    />
                </section>
            </main>
            <footer>
                <p>&copy; 2023 Justin Dickerson. All rights reserved.</p>
            </footer>
        </>
    )
}

export default EditCourses;
