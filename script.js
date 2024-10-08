document.getElementById('yesButton').addEventListener('click', () => {
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerHTML = `
                <h2>Your Location Information:</h2>
                <p><strong>IP Address:</strong> ${data.ip}</p>
                <p><strong>City:</strong> ${data.city}</p>
                <p><strong>Region:</strong> ${data.region}</p>
                <p><strong>Country:</strong> ${data.country_name}</p>
                <p><strong>Latitude:</strong> ${data.latitude}</p>
                <p><strong>Longitude:</strong> ${data.longitude}</p>
            `;
            document.getElementById('main').style.display = 'none';
        })
        .catch(err => console.error(err));
});

document.getElementById('noButton').addEventListener('click', () => {
    document.getElementById('main').style.display = 'none';
    document.getElementById('scare').classList.remove('hidden');

    setTimeout(() => {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }, 1000); // Updated duration to 1000 milliseconds (1 second)
});
