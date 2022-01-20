import { useState, useEffect } from "react";
import AccountService from "../services/AccountService";

function Account() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    AccountService.findAll().then((resp) => setAccounts(resp.data));
  }, []);

  console.log(accounts);

  const handleSubmit = () => {
    AccountService.send({username: 'acc1', password: '1'})
  }

  const handleSubmitTest = () => {
    AccountService.test({username: 'acc2', password: '1'}).then(resp => console.log(resp.headers))
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">username</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account, index) => (
            <tr key={account.id}>
              <th scope="row">{index}</th>
              <td>{account.id}</td>
              <td>{account.name}</td>
              <td>{account.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={handleSubmit}>
            test
      </button>
      <button
        onClick={handleSubmitTest}>
            testLogin
      </button>
    </div>
  );
}

export default Account;
