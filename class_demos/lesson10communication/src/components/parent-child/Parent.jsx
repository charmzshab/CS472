import Child from "./Child"

export default function Parent() {
    let name = "John"
    return (
        <div style={{ border: "1px solid blue", margin: "10px", padding: "10px" }}>
            It is a Parent.
            <Child name={name} age={20} isTrue={false} list={['React', 'Angular']}
                obj={{ x: 10, y: 20 }} cb={() => console.log(123)}
                child={<span>this is a span child</span>} >
                <div>It is a div</div>
                <span>It is a span</span>
            </Child>
        </div>
    )
}
