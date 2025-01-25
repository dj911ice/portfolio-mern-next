import React, {useEffect, useState} from "react";
import Header from "@/components/Header";
import {useRouter} from "next/router";
import {credentialsStatic} from "@/utils/credentials";
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
        if (!response.ok) {
            setCredentials(credentialsStatic);
        } else {
            const credentials = await response.json();
            setCredentials(credentials);
        }
    }


    useEffect(() => {
        setCredentials(credentialsStatic);
        retrieveCredentials();
    }, []);

    return (
        <>
            <Header/>
            <main>
                <section>
                    <button hidden={true} className={"fetchData"} onClick={retrieveCredentials}>Fetch Credentials</button>
                    <button hidden={true} className={"admin"} onClick={credentialAdmin}>Credentials Admin</button>
                    <h2>Credentials, Courses, and Trainings</h2>
                    <p style={{textAlign: "center"}}>
                        Table of highlighted & relevant credentials, courses, and trainings.
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