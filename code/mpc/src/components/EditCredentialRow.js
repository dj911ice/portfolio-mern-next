import React from "react";

function EditCredentialRow({credential, onEdit}) {
    return (
        <tr>
            <td>{credential.credentialType}</td>
            <td>{credential.credentialLevel}</td>
            <td>{credential.credentialField}</td>
            <td>{credential.credentialCertifier}</td>
            <td>{credential.credentialCompleted === true ? "Completed": "In Progress"}</td>
            {/*<td>{credential.conferralDate}</td>*/}
            <td><button onClick={() => onEdit(credential)} disabled={true}>Edit</button></td>
        </tr>
    )
}

export default EditCredentialRow