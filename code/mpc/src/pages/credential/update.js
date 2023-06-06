import React, {useEffect, useState} from "react";
import Header from "@/components/Header";
import {useRouter} from "next/router";
import {retrieveCredentials} from "/../../backend/model.mjs";


export const UpdateCredential = ({id, cType,cLevel, cField, cCertifier, cStatus} /*{credential}*/) => {
    // const router = useRouter();
    // const {
    //     query: {
    //       id, cType,cLevel, cField, cCertifier, cStatus, cConferral
    //     }
    // } = router

    const [credentialType, setCredentialType] = useState(cType);
    const [credentialLevel, setCredentialLevel] = useState(cLevel);
    const [credentialField, setCredentialField] = useState(cField);
    const [credentialCertifier, setCredentialCertifier] = useState(cCertifier);
    const [credentialCompleted, setCredentialCompleted] = useState(cStatus);
    // const [conferralDate, setConferralDate] = useState(cConferral);

    const modifyCredential = async () => {
        const response = await fetch(`/api/credentials/${id}`, {
            method: 'put',
            body: JSON.stringify({
                credentialType: credentialType,
                credentialLevel: credentialLevel ,
                credentialField: credentialField,
                credentialCertifier: credentialCertifier,
                credentialCompleted: credentialCompleted,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 200) {
            alert("The existing credential was successfully updated!");
        } else {
            const errMsg = await response.json();
            alert(`Unsuccessful operation, the credential was not updated! \n status ${response.status}. ${errMsg.Error}`);
        }
    };

    useEffect(() => {
        retrieveCredentials();
    }, []);

    return (
        <>
            <Header/>
            <main>
                <section>
                    <h2>Update A Credential</h2>
                    <span>
                        <form action={`/credentials`} method={"put"}>
                            <fieldset>
                                <legend>Credential Update Form</legend>
                                <label htmlFor={"credentialType"}>Type:
                                <input type={"text"} id={"credentialType"} name={"credentialType"}
                                       value={credentialType}
                                       aria-setsize={15} maxLength={25} required={true}
                                       placeholder={"Degree"} autoFocus={true}
                                       onChange={e => setCredentialType(e.target.value)}/>
                                </label>

                                <label htmlFor={"credentialLevel"}>Level:
                                <input type={"text"} id={"credentialLevel"} name={"credentialLevel"}
                                       value={credentialLevel}
                                       aria-setsize={15} maxLength={25} required={true}
                                       placeholder={"Unknown"} autoFocus={false}
                                       onChange={e => setCredentialLevel(e.target.value)}/>
                                </label>

                                <label htmlFor={"credentialField"}>Field:
                                <input type={"text"} id={"credentialField"} name={"credentialField"}
                                       value={credentialField}
                                       aria-colspan={35} aria-rowspan={5}
                                       aria-setsize={120} maxLength={250} required={true}
                                       placeholder={"Unknown"} autoFocus={false}
                                       onChange={e => setCredentialField(e.target.value)}/>
                                </label>

                                <label htmlFor={"credentialCertifier"}>Certifier:
                                <input type={"text"} id={"credentialCertifier"} name={"credentialCertifier"}
                                       value={credentialCertifier}
                                       aria-setsize={50} maxLength={50} required={true}
                                       placeholder={"University of CompSci"} autoFocus={false}
                                       onChange={e => setCredentialCertifier(e.target.value)}/>
                                </label>

                                {/*<label htmlFor={"credentialCompleted"}>Status:*/}
                                {/*<input type={"text"} id={"credentialCompleted"} name={"credentialCompleted"}*/}
                                {/*       value={credentialCompleted}*/}
                                {/*       aria-setsize={7} maxLength={7} required={true} autoFocus={false}*/}
                                {/*       onChange={e => setCredentialCompleted(e.target.value)}/>*/}
                                {/*</label>*/}
                                <p>
                                    <button type={"submit"}
                                            aria-disabled={false}
                                            id={"update"}
                                            onClick={modifyCredential}>Update Credential
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

UpdateCredential.getInitialProps = async ({query: {id, cType,cLevel, cField, cCertifier, cStatus}}) => {
    return {id, cType,cLevel, cField, cCertifier, cStatus}
}

// export async function getServerSideProps({id}) {
//     const courseData = await fetch(`/api/courses/${id}`);
//     const course = await courseData.json();
//     return {props: {course}}
// }

export default UpdateCredential