function submitData(userName, userEmail) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        })
    })
    .then(res => res.json())
    .then(object => {
        let h1 = document.createElement('h1');
        h1.textContent = object.id;
        document.body.appendChild(h1);
    })
    .catch(error => {
        let h1 =document.createElement('h1');
        h1.textContent = error.message;
        document.body.appendChild(h1);
    })
}