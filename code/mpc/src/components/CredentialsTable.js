import React from "react";
import CredentialRow from "@/components/CredentialRow";

function CredentialsTable({credentials}) {
    return (
        <>
            <table className="center-middle" id="credentialss">
                <caption>
                </caption>
                <thead>
                <tr>
                    <th>Type</th>
                    <th>Level</th>
                    <th>Field</th>
                    <th>Certifier</th>
                    <th>Status</th>
                    {/*<th>Conferral Date</th>*/}
                </tr>
                </thead>
                <tbody>
                {credentials.map((credential, credentialIndex) =>
                    <CredentialRow
                        credential={credential}
                        key={credentialIndex}
                    />)}
                </tbody>
            </table>
        </>
    )
}

export default CredentialsTable