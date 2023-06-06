import React, {useEffect} from "react";
import {useState} from "react";
import Header from "@/components/Header";
import {retrieveCourses} from "../../../backend/model.mjs";

export const AddNewCourse = () => {
    const [courseIdentifier, setCourseIdentifier] = useState('');
    const [courseName, setCourseName] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [courseIssuer, setCourseIssuer] = useState('');

    const AddCourse = async () => {
        const newCourse = {courseIdentifier, courseName, courseDescription, courseIssuer};
        const response = await fetch('/api/courses', {
            method: 'post',
            body: JSON.stringify(newCourse),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 201) {
            alert(`The course was added successfully!`);
        } else {
            alert(`Unsuccessful operation, the course was not added! \n status ${response.status}`);
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
                    <h2>Add A New Course</h2>
                    <span>
                        <form action={"/courses"} method={"post"}>
                            <fieldset>
                                <legend>New Course Form</legend>
                                <label htmlFor={"courseIdentifier"}>Course Identifier:
                                <input type={"text"} id={"courseIdentifier"} name={"courseIdentifier"}
                                       value={courseIdentifier}
                                       aria-setsize={25} maxLength={25} required={true}
                                       placeholder={"CS XXX"} autoFocus={true}
                                       onChange={e => setCourseIdentifier(e.target.value)}/>
                                </label>

                                <label htmlFor={"courseName"}>Course Name:
                                <input type={"text"} id={"courseName"} name={"courseName"}
                                       value={courseName}
                                       aria-setsize={25} maxLength={25} required={true}
                                       placeholder={"Web Development"} autoFocus={false}
                                       onChange={e => setCourseName(e.target.value)}/>
                                </label>

                                <label htmlFor={"courseDescription"}>Course Description:
                                <input type={"text"} id={"courseDescription"} name={"courseDescription"}
                                       value={courseDescription}
                                       aria-colspan={35} aria-rowspan={5}
                                       aria-setsize={120} maxLength={250} required={true}
                                       placeholder={"Course Description"} autoFocus={false}
                                       onChange={e => setCourseDescription(e.target.value)}/>
                                </label>

                                <label htmlFor={"courseIssuer"}>Issuing Authority:
                                <input type={"text"} id={"courseIssuer"} name={"courseIssuer"}
                                       value={courseIssuer}
                                       aria-setsize={50} maxLength={50} required={true}
                                       placeholder={"University of CompSci"} autoFocus={false}
                                       onChange={e => setCourseIssuer(e.target.value)}/>
                                </label>
                                <p>
                                    <button type={"submit"}
                                            aria-disabled={false}
                                            id={"add"}
                                            onClick={AddCourse}>Add Course
                                    </button>
                                </p>
                            </fieldset>
                        </form>
                    </span>
                </section>
            </main>
            <footer>
                <p>&copy; 2023 Justin Dickerson. All rights reserved.</p>
            </footer>
        </>
    )
}

export default AddNewCourse