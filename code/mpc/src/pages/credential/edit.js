import React, {useEffect, useState} from "react";

import Header from "@/components/Header";
import {useRouter} from "next/router";
import EditCredentialsTable from "@/components/EditCredentialsTable";


function EditCredentials({setCredential}) {
    const router = useRouter();
    const [credentials, setCredentials] = useState([]);


    const retrieveCredentials = async () => {
        const response = await fetch('/api/credentials');
        const credentials = await response.json();
        setCredentials(credentials);
    }

    const credentialById = async credential => {
        // setCredential(credential)
        await router.push({
            pathname: '/credential/update/',
            query: {
                id: credential._id,
                cType: credential.credentialType,
                cLevel: credential.credentialLevel ,
                cField: credential.credentialField,
                cCertifier: credential.credentialCertifier,
                cStatus: credential.credentialCompleted,
                // cConferral: credential.conferralDate
            },
            asPath: `/credential/update/`
        });
    }

    useEffect(() => {
        retrieveCredentials();
    }, []);

    return (
        <>
            <Header/>
            <main>
                <section>
                    <EditCredentialsTable
                        credentials={credentials}
                        onEdit={credentialById}
                    />
                </section>
            </main>
            <footer>
                <p>&copy; 2023 Justin Dickerson. All rights reserved.</p>
            </footer>
        </>
    )
}

export default EditCredentials;
