import { useState, useEffect } from "react";
const URL = 'https://dummyjson.com/users';

export default function App() {
    const [list, setList] = useState([]);
    const [isOk, setIsOk] = useState(false);
    useEffect(() => {
        async function getList() {
            const res = await fetch(URL);
            if (res.ok) {
                const data = await res.json();
                setList(data.users);
                setIsOk(true);
            }
            else {
                console.log(res.status, res.statusText);
            }
        }
        getList();
    })


    return (
        <div>
            This is App
            <ul>
                {isOk ? list.map((item) => <li key={item.id}>{item.firstName}</li>) : "loading"}
            </ul>
        </div>
    );
}
