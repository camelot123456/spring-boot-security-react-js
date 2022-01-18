import {useState, useEffect} from "react"

function Role () {
    const [roles, setRoles] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8081/api/roles`)
        .then(resp => resp.json())
        .then(roleArr => setRoles(roleArr))
    },[])


    return (
        <div>
            {roles.map(role => (
                <div key={role.id}>
                    <p>{role.name}</p>
                    <p>{role.code}</p>
                </div>
            ))}
        </div>
    )

}

export default Role

