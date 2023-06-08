import React, {useState} from "react";

import Header from "@/components/Header";
import {useRouter} from "next/router";

function CourseIndex(){

    const router = useRouter();

    const addCourse = () => {
        router.push('/course/add');
    }

    const updateCourse = async () => {
        // setCourse(courses)
        await router.push(`/course/edit`);

    }

    const deleteCourse = () => {
        router.push('/course/delete');
    }

    const viewCourses = () => {
        router.push('/courses/');
    }

    return (
        <>
            <Header/>
            <main>
                <section>
                    <h2>Course Actions</h2>
                    {/*<h3>Index of Actions</h3>*/}
                    <div className={"dashboard"}>
                        <button
                            onClick={addCourse} >Add a Course</button>
                        <button
                            onClick={updateCourse} >Update a Course</button>
                        <button
                            onClick={deleteCourse} >Delete a Course</button>
                        <button
                            onClick={viewCourses} >View Courses</button>
                    </div>
                </section>
            </main>
            <footer>
                <p>&copy; 2023 Justin Dickerson. All rights reserved.</p>
            </footer>
        </>
    )
}

export default CourseIndex