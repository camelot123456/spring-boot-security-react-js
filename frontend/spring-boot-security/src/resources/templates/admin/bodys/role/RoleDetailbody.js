import RoleService from "../../../../../services/RoleService"
import { useState, useEffect } from "react";
import {useParams, useRouteMatch} from "react-router-dom"

function RoleDetail(idRole) {
    const [role, setRole] = useState({})

    useEffect(() => {
        RoleService.findOneById(idRole).then((resp) => {
            setRole(resp.data)
        })
    }, [idRole])

    return (
        <div>
            <div className="card text-center">
                <div className="card-header">
                    {role.id}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{role.name}</h5>
                    <p className="card-text">{role.code}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                <div className="card-footer text-muted">
                    2 days ago
                </div>
            </div>
        </div>
    )
}

export default RoleDetail