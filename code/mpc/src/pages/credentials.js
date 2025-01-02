import React, {useEffect, useState} from "react";
import Header from "@/components/Header";
import {useRouter} from "next/router";
import CredentialsTable from "@/components/CredentialsTable";
import Footer from "@/components/Footer";

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
                    <h2>Relevant Credentials</h2>
                    <p>
                        Table of relevant credentials earned or being pursued. If
                        credentials are not being displayed then click on the <q>Fetch Credentials</q> button and wait
                        for the api server to service the request
                    </p>
                    {/*<span>Table of Credentials</span>*/}
                    <CredentialsTable
                        credentials={credentials.sort((a, b) => a.conferralDate > b.conferralDate ? -1 : 1)}
                    />
                </section>
            </main>
           <Footer/>
        </>
    )
}

export default Credentials