import React, {useEffect, useState} from "react";

import Header from "@/components/Header";
import {redirect} from "next/navigation";
import DeleteCredentialsTable from "@/components/DeleteCredentialsTable";

function DeleteCredentials() {

    const [credentials, setCredentials] = useState([]);

    const retrieveCredentials = async () => {
        const response = await fetch('/api/credentials');
        const credentials = await response.json();
        setCredentials(credentials);
    }

    const onDeleteCredential = async _id => {
        const response = fetch(`/api/credentials/${_id}`, {method: 'DELETE'});
        if (response.status === 204) {
            const getResponse = await fetch('/api/credentials');
            const credentials = await getResponse.json();
            setCredentials(credentials);
            alert(`The credential with _id = ${_id} was deleted successfully! \n status code = ${response.status}`)
        } else {
            alert(`The credential with _id = ${_id} was not deleted successfully! \n status code = ${response.status}`)
        }
    }

    useEffect(() => {
        retrieveCredentials();
    }, []);

    return (
        <>
            <Header/>
            <main>
                <section>
                    <DeleteCredentialsTable
                        credentials={credentials}
                        onDelete={onDeleteCredential}
                    />
                </section>
            </main>
            <footer>
                <p>&copy; 2023 Justin Dickerson. All rights reserved.</p>
            </footer>
        </>
    )
}

export default DeleteCredentials;
