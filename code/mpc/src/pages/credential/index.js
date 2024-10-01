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
                            onClick={addCredential} disabled={true} >Add a Credential</button>
                        <button
                            onClick={updateCredential} disabled={true}>Update a Credential</button>
                        <button
                            onClick={deleteCredential} disabled={true} >Delete a Credential</button>
                        <button
                            onClick={viewCredentials} disabled={true} >View Credentials</button>
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

export default CredentialIndex