
export default function Child(props) {
    let { name, age, isTrue, list, obj, cb, child, children } = props;

    return (
        <div style={{ border: "1px solid blue", margin: "10px", padding: "10px" }}>
            It is a Child.
            <div>{name}</div>
            <div>{age}</div>
            <div>{isTrue}</div>
            <div>{list.map(e => e + ", ")}</div>
            <div>{obj.x}, {obj.y}</div>
            <button onClick={cb}>Click me</button>
            <div>{child}</div>
            {/* {props.children} */}
            {children}
        </div>
    )
}
