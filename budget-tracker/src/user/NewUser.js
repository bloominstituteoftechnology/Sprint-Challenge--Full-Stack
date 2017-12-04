

export function createNewProfile(users) {
  const formData = new FormData();
  formData.append('username', users.username);
  formData.append('password', users.password);
  return fetch('http://localhost:1234/api/users', {
      method: 'POST',
      body: formData
  })
  .then(response => response.json())
}

