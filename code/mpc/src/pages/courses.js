import React, {useState, useEffect} from "react";

import Header from "@/components/Header";
import CoursesTable from "@/components/CoursesTable";
import {useRouter} from "next/router";
function Courses(){
    const [courses, setCourses] = useState([]);

    const router = useRouter();
    const courseAdmin = () => {
        router.push('/course/');
    }

    const retrieveCourses = async () => {
        const response = await fetch('/api/courses');
        const courses = await response.json();
        setCourses(courses);
    }



    useEffect(() => {
        retrieveCourses();
    }, []);

    return (
        <>
            <Header/>
            <main>
                <section>
                    <button className={"fetchData"} onClick={retrieveCourses}>Fetch Courses</button>
                    <button className={"admin"} onClick={courseAdmin}>Courses Admin</button>
                    <h2>Courses Taken</h2>
                    {/*<span>Table of Courses</span>*/}
                    <CoursesTable
                    courses={courses}
                    />
                </section>
            </main>
            <footer>
                <p>&copy; 2023 Justin Dickerson. All rights reserved.</p>
            </footer>
        </>
    )
}

export default Courses