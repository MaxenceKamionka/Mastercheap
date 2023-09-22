function fetchData(number) {
    fetch(`/assignment2/${number}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerText = JSON.stringify(data);
        })
        .catch(error => {
            console.error('Error with the AJAX request:', error);
        });
}