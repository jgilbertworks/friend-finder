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
            question1: document.getElementById('input1').value,
            question2: document.getElementById('input2').value,
            question3: document.getElementById('input3').value,
            question4: document.getElementById('input4').value,
            question5: document.getElementById('input5').value,
            question6: document.getElementById('input6').value,
            question7: document.getElementById('input7').value,
            question8: document.getElementById('input8').value,
            question9: document.getElementById('input9').value,
            question10: document.getElementById('input10').value
        };


        console.log(user);

        const url = 'http://localhost:8080/api/public/survey';
        // The data we are going to send in our request

        fetch(url, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                headers: {
                    'Content-Type': 'application/json',
                },
                referrer: 'no-referrer', // no-referrer, *client
                body: JSON.stringify(user), // body data type must match "Content-Type" header
            })
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data)
            });

    } else {
        alert('form incomplete');
    }

});