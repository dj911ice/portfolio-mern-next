import React, {useEffect, useState} from "react";
import Header from "@/components/Header";
import {useRouter} from "next/router";
import CredentialsTable from "@/components/CredentialsTable";

function Credentials({}) {
    const router = useRouter();

    const credentialAdmin = () => {
        router.push('/credential/');
    }

    const [credentials, setCredentials] = useState([]);

    const retrieveCredentials = async () => {
        const response = await fetch('/api/credentials');
        const credentials = await response.json();
        setCredentials(credentials);
    }

    useEffect(() => {
        retrieveCredentials();
    }, []);

    return (
        <>
            <Header/>
            <main>
                <section>
                    <button className={"fetchData"} onClick={retrieveCredentials}>Fetch Credentials</button>
                    <button className={"admin"} onClick={credentialAdmin}>Credentials Admin</button>
                    <h2>My Credentials</h2>
                    <p>
                        Table of credentials earned or pursued. Most recently earned or currently being
                        pursued credential(s) are at the top of the table. Credentials are added as they are being
                        seriously pursued or been awarded/earned along with the appropriate status. Only verifiable,
                        permanent, and/or current (if credential expires) credentials are added to the database. If
                        credentials are not being displayed then click on the <q>Fetch Credentials</q> button and wait
                        for the api server to service the request.
                    </p>
                    {/*<span>Table of Credentials</span>*/}
                    <CredentialsTable
                        credentials={credentials.sort((a, b) => a.conferralDate > b.conferralDate ? -1 : 1)}
                    />
                </section>
            </main>
            <footer>
                <p>&copy; 2023 Justin Dickerson. All rights reserved.</p>
            </footer>
        </>
    )
}

export default Credentials