document.getElementById('greetingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('nameInput').value;
    
    fetch('/greet', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('greetingMessage').innerText = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
