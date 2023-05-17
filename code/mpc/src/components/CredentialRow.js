import React from "react";

function CredentialRow({credential}) {
    return (
        <tr>
            <td>{credential.credentialType}</td>
            <td>{credential.credentialLevel}</td>
            <td>{credential.credentialField}</td>
            <td>{credential.credentialCertifier}</td>
            <td>{credential.credentialCompleted === true ? "Completed": "In Progress"}</td>
            {/*<td>{credential.conferralDate}</td>*/}
        </tr>
    )
}

export default CredentialRow