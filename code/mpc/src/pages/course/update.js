import React, {useEffect, useState} from "react";
import Header from "@/components/Header";


export const UpdateCourse = ({id, cIdentifier,cName, cDescription, cIssuer} /*{course}*/) => {
    // const router = useRouter();
    // const {
    //     query: {
    //         id,cIdentifier,cName, cDescription, cIssuer
    //     }
    // } = router

    const [courseIdentifier, setCourseIdentifier] = useState(cIdentifier);
    const [courseName, setCourseName] = useState(cName);
    const [courseDescription, setCourseDescription] = useState(cDescription);
    const [courseIssuer, setCourseIssuer] = useState(cIssuer);

    const modifyCourse = async () => {
        const response = await fetch(`/api/courses/${id}`, {
            method: 'put',
            body: JSON.stringify({
                courseIdentifier: courseIdentifier,
                courseName: courseName,
                courseDescription: courseDescription,
                courseIssuer: courseIssuer
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 200) {
            alert("The existing course was successfully updated!");
        } else {
            const errMsg = await response.json();
            alert(`Unsuccessful operation, the course was not updated! \n status ${response.status}. ${errMsg.Error}`);
        }
    };

    // useEffect(() => {
    //     retrieveCourses();
    // }, []);

    return (
        <>
            <Header/>
            <main>
                <section>
                    <h2>Update A Course</h2>
                    <span>
                        <form action={`/courses`} method={"put"}>
                            <fieldset>
                                <legend>Course Update Form</legend>
                                <label htmlFor={"courseIdentifier"}>Course Identifier:
                                <input type={"text"} id={"courseIdentifier"} name={"courseIdentifier"}
                                       value={courseIdentifier}
                                       aria-setsize={15} maxLength={15} required={true}
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
                                            disabled={true}
                                            id={"update"}
                                            onClick={modifyCourse}>Update Course
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

UpdateCourse.getInitialProps = async ({query: {id, cIdentifier,cName, cDescription, cIssuer}}) => {
    return {id, cIdentifier,cName, cDescription, cIssuer}
}

// export async function getServerSideProps({id}) {
//     const courseData = await fetch(`/api/courses/${id}`);
//     const course = await courseData.json();
//     return {props: {course}}
// }

export default UpdateCourse