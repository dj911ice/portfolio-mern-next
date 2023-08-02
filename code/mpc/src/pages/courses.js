import React, {useState, useEffect} from "react";

import Header from "@/components/Header";
import {useRouter} from "next/router";
import CoursesDescriptionList from "@/components/CoursesDescriptionList";

function Courses() {
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
                    <h2>Computer Science Courses</h2>
                    <p>Courses in computer science & mathematics along with other related course work. Course work is
                        added to the database prior to each term and updated at the end of each term. Most recent
                        courses are shown at the top along with its status. Descriptions are taken directly from the
                        college/university catalog that is enforced at time of registration. In the event, that
                        description data is unavailable then the most recent description or equivalent is used. If
                        courses are not being displayed then click on the <q>Fetch Courses</q> button and wait for the
                        api server to service the request.

                    </p>
                    {/*<span>Table of Courses</span>*/}
                    {/*<CoursesTable*/}
                    {/*courses={courses}*/}
                    {/*/>*/}
                    <CoursesDescriptionList
                        courses={courses.sort((a, b) => a.courseDate > b.courseDate ? -1 : 1)}
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