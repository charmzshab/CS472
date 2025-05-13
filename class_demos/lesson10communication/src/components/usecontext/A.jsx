import B from "./B";
function A() {
    // console.log('A');
    return (
        <div style={{ border: "1px solid blue", margin: "10px", padding: "10px" }}>
            <div>It is A component.</div>
            <B />
        </div>
    );
}

export default A;