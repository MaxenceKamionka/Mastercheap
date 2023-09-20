function fetchData(number) {
    fetch(`/api/data/${number}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerText = JSON.stringify(data);
        })
        .catch(error => {
            console.error('Error with the AJAX request:', error);
        });
}