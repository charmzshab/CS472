export default function A({ onGetMsg }) {
    const name = 'this is from A';
    return (
        <div style={{ border: "1px solid blue", margin: "10px", padding: "10px" }}>
            It is a A. <button onClick={() => onGetMsg(name)}>Click me</button>
        </div>


    )
}
