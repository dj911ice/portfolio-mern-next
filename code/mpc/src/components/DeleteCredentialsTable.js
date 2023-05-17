import React from "react";
import DeleteCredentialRow from "@/components/DeleteCredentialRow";

function DeleteCredentialsTable({credentials, onDelete}) {
    return (
        <>
            <table className="center-middle" id="credentials">
                <caption>
                </caption>
                <thead>
                <tr>
                    <th>Type</th>
                    <th>Level</th>
                    <th>Field</th>
                    <th>Certifier</th>
                    <th>Status</th>
                    {/*<th>Conferred</th>*/}
                    <th>Remove</th>
                </tr>
                </thead>
                <tbody>
                {credentials.map((credential, credentialIndex) =>
                    <DeleteCredentialRow
                        credential={credential}
                        key={credentialIndex}
                        onDelete={onDelete}
                    />)}
                </tbody>
            </table>
        </>
    )
}

export default DeleteCredentialsTable