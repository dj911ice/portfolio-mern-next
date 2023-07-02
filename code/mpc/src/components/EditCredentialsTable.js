import React from "react";
import EditCredentialRow from "@/components/EditCredentialRow";

function EditCredentialsTable({credentials, onEdit}) {
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
                    <th>Modify</th>
                </tr>
                </thead>
                <tbody>
                {credentials.map((credential, credentialIndex) =>
                    <EditCredentialRow
                        credential={credential}
                        key={credentialIndex}
                        onEdit={onEdit}
                    />)}
                </tbody>
            </table>
        </>
    )
}

export default EditCredentialsTable