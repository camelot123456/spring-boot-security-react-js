import { useState, useEffect } from "react";
import AccountService from "../../../../../services/AccountService.js";

function AccountsBody() {

    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        AccountService.findAll()
        .then((resp) => setAccounts(resp.data))
        .catch((err) => console.error(err))
    }, []);

    return (
        <div className="container">
            <h3>Account List</h3>
            <hr />
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">username</th>
                        <th scope="col">Feature</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts.map((account, index) => (
                        <tr key={account.id}>
                            <th scope="row">{index}</th>
                            <td>{account.id}</td>
                            <td>{account.name}</td>
                            <td>{account.username}</td>
                            <td>
                                <button type="button" className="btn btn-outline-info">Detail</button>
                                <button type="button" className="btn btn-outline-warning">Edit</button>
                                <button type="button" className="btn btn-outline-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default AccountsBody