import { UserContext } from '../../contexts/UserContext'
import { useContext } from 'react';
import D from './D';
function C() {
    // console.log('C');
    // const userName = "Guest"
    const { userName, setUserName } = useContext(UserContext);
    return (
        <div style={{ border: "1px solid blue", margin: "10px", padding: "10px" }}>
            <div>It is C component.</div>
            <div>Hello, {userName}</div>
            <button onClick={() => { setUserName("John Doe") }}>change name to Jhn Doe</button>
            <D />
        </div>
    );
}

export default C;