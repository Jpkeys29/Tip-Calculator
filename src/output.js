export default function Output({cuenta, tip}) {
    return (
        <div>
            <h3>You pay ${cuenta + tip} (${cuenta} + ${tip} tip) </h3>
        </div>
    )
}