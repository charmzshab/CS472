
// async function getData() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos/");
//     console.log(response);
//     if (response.ok) { //200-299
//         let json = await response.json();
//         console.log(json);
//     }
//     else {
//         console.log(response.status, response.statusText);
//     }
// }

// getData();




let postData = async () => {
    let options = {
        method: "POST",
        body: JSON.stringify({ userId: 3, id: 54, title: 'Hello it is dummy data', completed: true }),
        headers: {
            "Content-type": "application/json"
        },
    };
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/", options);
    console.log(response.ok);
}
postData()