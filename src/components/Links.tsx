import { SUBMISSION_LINK, REPO_URL } from "../constants"

export default function Links() {
    return (
        <>
            <div id="links" className="p-[1rem] bg-2 border-2 rounded-[.5rem]">
                <ul>
                    <li><a href={SUBMISSION_LINK} target="_blank">Submit a Binary <strong>(Email)</strong></a></li>
                    <li><a href="https://github.com/boyninja1555/GrantBin-Hub" target="_blank">View Source Code <strong>(GitHub)</strong></a></li>
                    <li><a href={REPO_URL} target="_blank">View Current Repository <strong>(GrantBin Repo)</strong></a></li>
                </ul>
            </div>
        </>
    )
}
