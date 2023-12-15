import React from "react";
import Link from "next/link";

function CredentialRow({credential}) {
    return (
        <tr>
            <td>{credential.credentialType}</td>
            <td>{credential.credentialLevel}</td>
            <td>{credential.credentialField}</td>
            <td>
                {credential.institutionalLink === null ?
                    credential.credentialCertifier :
                    <Link href={credential.institutionalLink} target={"_blank"}>{credential.credentialCertifier}</Link>}
            </td>
            <td>{credential.credentialCompleted === true ? "Completed" : "In Progress"}</td>
            {/*<td>{credential.conferralDate}</td>*/}
        </tr>
    )
}

export default CredentialRow