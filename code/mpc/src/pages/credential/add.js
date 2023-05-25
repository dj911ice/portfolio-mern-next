import React from "react";
import {useState} from "react";
import Header from "@/components/Header";

export const AddNewCredential = () => {
    const [credentialType, setCredentialType] = useState('');
    const [credentialLevel, setCredentialLevel] = useState('');
    const [credentialField, setCredentialField] = useState('');
    const [credentialCertifier, setCredentialCertifier] = useState('');
    //const [credentialCompleted, setCredentialCompleted] = useState('');
    // const [conferralDate, setConferralDate] = useState('');

    const AddCredential = async () => {
        const newCredential = {credentialType, credentialLevel, credentialField,credentialCertifier};
        const response = await fetch('/api/credentials', {
            method: 'post',
            body: JSON.stringify(newCredential),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 201) {
            alert(`The credential was added successfully!`);
        } else {
            alert(`Unsuccessful operation, the credential was not added! \n status ${response.status}`);
        }
    }
    return (
        <>
            <Header/>
            <main>
                <section>
                    <h2>Add A New Credential</h2>
                    <span>
                        <form action={"/credentials"} method={"post"}>
                            <fieldset>
                                <legend>New Credential Form</legend>
                                <label htmlFor={"credentialType"}>Credential Type:
                                <input type={"text"} id={"credentialType"} name={"credentialType"}
                                       value={credentialType}
                                       aria-setsize={15} maxLength={25} required={true}
                                       placeholder={"Degree"} autoFocus={true}
                                       onChange={e => setCredentialType(e.target.value)}/>
                                </label>

                                <label htmlFor={"credentialLevel"}>Credential Level:
                                <input type={"text"} id={"credentialLevel"} name={"credentialLevel"}
                                       value={credentialLevel}
                                       aria-setsize={15} maxLength={25} required={true}
                                       placeholder={"Unknown"} autoFocus={false}
                                       onChange={e => setCredentialLevel(e.target.value)}/>
                                </label>

                                <label htmlFor={"credentialField"}>Credential Field:
                                <input type={"text"} id={"credentialField"} name={"credentialField"}
                                       value={credentialField}
                                       aria-colspan={35} aria-rowspan={5}
                                       aria-setsize={120} maxLength={250} required={true}
                                       placeholder={"Computer Science"} autoFocus={false}
                                       onChange={e => setCredentialField(e.target.value)}/>
                                </label>

                                <label htmlFor={"credentialCertifier"}>Issuing Authority:
                                <input type={"text"} id={"credentialCertifier"} name={"credentialCertifier"}
                                       value={credentialCertifier}
                                       aria-setsize={15} maxLength={50} required={true}
                                       placeholder={"University of CompSci"} autoFocus={false}
                                       onChange={e => setCredentialCertifier(e.target.value)}/>
                                </label>
                                <p>
                                    <button type={"submit"}
                                            aria-disabled={false}
                                            id={"add"}
                                            onClick={AddCredential}>Add Credential
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

export default AddNewCredential