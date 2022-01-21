import { Link } from 'react-router-dom'

function HeaderFragment() {
    return (
        <div className="bg-light ">
            <div className="container hstack gap-3 py-4">
                <div className="">
                    <Link to="/accounts">Account List</Link>
                </div>
                <div className="">
                    <Link to="/roles">Role List</Link>
                </div>
                <div className="">
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default HeaderFragment