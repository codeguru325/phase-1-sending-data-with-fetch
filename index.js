function submitData(name, email) {
    const userData = {
      name: name,
      email: email,
    };
  
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // Access the new id from the response data
        const newId = data.id;
        // Append the new id to the DOM
        document.body.innerHTML = newId;
      })
      .catch(function (error) {
        // Handle errors by appending the error message to the DOM
        document.body.innerHTML = error.message;
      });
  }
  
  // Call the submitData function with name and email values
  submitData('John Doe', 'john@example.com');
  