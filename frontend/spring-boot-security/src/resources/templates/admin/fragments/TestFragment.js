import {memo} from "react"

function TestFragment(props) {
    return (
        <div className="text-primary">
            {console.log("TestFragment")}
            {props.content}
        </div>
    )
}

export default memo(TestFragment)