import React from "react";
import Header from "@/components/Header";
import {useRouter} from "next/router";

function CredentialIndex(){
    const router = useRouter();

    const addCredential = () => {
        router.push('/credential/add');
    }

    const updateCredential = () => {
        router.push('/credential/edit');
    }

    const deleteCredential = () => {
        router.push('/credential/delete');
    }

    const viewCredentials = () => {
        router.push('/credentials/');
    }

    return (
        <>
            <Header/>
            <main>
                <section>
                    <h2>Credential Actions</h2>
                    {/*<span>Index of Actions</span>*/}
                    <div className={"dashboard"}>
                        <button
                            onClick={addCredential} >Add a Credential</button>
                        <button
                            onClick={updateCredential} >Update a Credential</button>
                        <button
                            onClick={deleteCredential} >Delete a Credential</button>
                        <button
                            onClick={viewCredentials} >View Credentials</button>
                    </div>
                    <p style={{textAlign:'center'}}>
                        CRUD Admin Panel: Unless Admin, click on: "View Credentials" button.
                    </p>
                </section>
            </main>
            <footer>
                <p>&copy; 2023 Justin Dickerson. All rights reserved.</p>
            </footer>
        </>
    )
}

export default CredentialIndex