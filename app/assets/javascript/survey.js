document.getElementById('contact-submit').addEventListener('click', function (event) {
    event.preventDefault();
    //form validation
    let valid = true;

    if (document.getElementById('name').value === '' || document.getElementById('photo').value === '') {
        valid = false;

    } else if (document.getElementById('input1').value === 'Please choose an option' || document
        .getElementById('input2').value === 'Please choose an option' || document.getElementById('input3')
        .value === 'Please choose an option' || document.getElementById('input4').value ===
        'Please choose an option' || document.getElementById('input5').value ===
        'Please choose an option' || document.getElementById('input6').value ===
        'Please choose an option' || document.getElementById('input7').value ===
        'Please choose an option' || document.getElementById('input8').value ===
        'Please choose an option' || document.getElementById('input9').value ===
        'Please choose an option' || document.getElementById('input10').value === 'Please choose an option'
    ) {
        valid = false;
    }

    if (valid == true) {
        // The data we are going to send in our request
        let user = {
            name: document.getElementById('name').value,
            photo: document.getElementById('photo').value.trim(),
            scores: [
                parseInt(document.getElementById('input1').value),
                parseInt(document.getElementById('input2').value),
                parseInt(document.getElementById('input3').value),
                parseInt(document.getElementById('input4').value),
                parseInt(document.getElementById('input5').value),
                parseInt(document.getElementById('input6').value),
                parseInt(document.getElementById('input7').value),
                parseInt(document.getElementById('input8').value),
                parseInt(document.getElementById('input9').value),
                parseInt(document.getElementById('input10').value)
            ]
        };

        console.log(user);
    
        postRequest('/api/friends', user)
            .then(function (data) {
                console.log(data);
                document.getElementById('survey-img').setAttribute("src", data.photo);
                document.getElementById('survey-name').innerHTML = data.name;
            })

        function postRequest(url, data) {
            return fetch(url, {
                    credentials: 'same-origin', // 'include', default: 'omit'
                    method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
                    body: JSON.stringify(data), // Coordinate the body type with 'Content-Type'
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    }),
                })
                .then(response => response.json())
        }
    } else {
        alert('form incomplete');
    }
});
