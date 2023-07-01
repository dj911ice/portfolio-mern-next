import React, {useEffect, useState} from "react";

import Header from "@/components/Header";
import DeleteCoursesDescriptionList from "@/components/DeleteCoursesDescriptionList";
import {redirect} from "next/navigation";

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
        } else {
            console.log(`The course with _id = ${_id} was not deleted successfully! \nstatus code = ${response.status}`)
        }
        alert(`The course with id = ${_id} was deleted successfully! \nPlease refresh your browser.`)
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
