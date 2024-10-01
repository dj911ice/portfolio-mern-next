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
                            onClick={addCourse} disabled={true} >Add a Course</button>
                        <button
                            onClick={updateCourse} disabled={true} >Update a Course</button>
                        <button
                            onClick={deleteCourse} disabled={true} >Delete a Course</button>
                        <button
                            onClick={viewCourses} disabled={true} >View Courses</button>
                    </div>
                    <p style={{textAlign:'center'}}>
                        CRUD Admin Panel <br/> Buttons for CRUD actions are disabled for the public
                    </p>
                </section>
            </main>
            <footer>
                <p>&copy; 2023 Justin Dickerson. All rights reserved.</p>
            </footer>
        </>
    )
}

export default CourseIndex