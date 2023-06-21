import React, {useEffect, useState} from "react";

import Header from "@/components/Header";
import {redirect} from "next/navigation";
import DeleteCoursesDescriptionList from "@/components/DeleteCoursesDescriptionList";

function DeleteCourses() {

    const [courses, setCourses] = useState([]);

    const retrieveCourses = async () => {
        const response = await fetch('/api/courses');
        const courses = await response.json();
        setCourses(courses);
    }

    const onDeleteCourse = async _id => {
        const response = fetch(`/api/courses/${_id}`, {method: 'DELETE'});
        if (response.status === 204) {
            const getResponse = await fetch('/api/courses');
            const courses = await getResponse.json();
            setCourses(courses);
            alert(`The course with _id = ${_id} was deleted successfully! \n status code = ${response.status}`)
        } else {
            console.log(`The course with _id = ${_id} was not deleted successfully! \n status code = ${response.status}`)
        }
    }

    useEffect(() => {
        retrieveCourses();
    }, []);

    return (
        <>
            <Header/>
            <main>
                <section>
                    <DeleteCoursesDescriptionList
                        courses={courses}
                        onDelete={onDeleteCourse}
                    />
                    {/*<DeleteCoursesTable*/}
                    {/*    courses={courses}*/}
                    {/*    onDelete={onDeleteCourse}*/}
                    {/*/>*/}
                </section>
            </main>
            <footer>
                <p>&copy; 2023 Justin Dickerson. All rights reserved.</p>
            </footer>
        </>
    )
}

export default DeleteCourses;
