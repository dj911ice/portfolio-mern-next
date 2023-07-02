import React from "react";

function DeleteCredentialRow({credential, onDelete}) {
    /*TODO route the modify button to form by id*/
    return (
        <tr>
            <td>{credential.credentialType}</td>
            <td>{credential.credentialLevel}</td>
            <td>{credential.credentialField}</td>
            <td>{credential.credentialCertifier}</td>
            <td>{credential.credentialCompleted === true ? "Completed": "In Progress"}</td>
            {/*<td>{credential.conferralDate}</td>*/}
            <td>
                <button
                    onClick={() => onDelete(credential._id)}
                    disabled={true}>Remove</button>
            </td>
        </tr>
    )
}

export default DeleteCredentialRow