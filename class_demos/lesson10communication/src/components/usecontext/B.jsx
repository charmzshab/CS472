import C from "./C";
import D from './D'
function B() {
    // console.log('B');
    return (
        <div style={{ border: "1px solid blue", margin: "10px", padding: "10px" }}>
            <div>It is B component.</div>
            <C />
            <D />
        </div>
    );
}

export default B;