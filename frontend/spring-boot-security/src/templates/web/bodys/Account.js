import {useState, useEffect} from "react"

function Account () {

    const [accounts, setAccounts] = useState([])
    const [title, setTitle] = useState('')
    
    useEffect(() => {
        fetch(`http://localhost:8081/api/accounts`)
        .then(resp => resp.json())
        .then(accountArr => setAccounts(accountArr))
    }, [])

    useEffect(() => {
        document.title = title
    })

    return (
        <div>
            <input type="text" onChange={e => setTitle(e.target.value)}/>
            <ul>
                {accounts.map(account => (
                    <li key={account.id}>
                        <p>{account.name}</p>
                        <p>{account.username}</p>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default Account;