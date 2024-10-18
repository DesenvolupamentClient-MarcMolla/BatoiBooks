const SERVER = import.meta.env.VITE_URL_API; 

async function getDBUsers() {
  const response = await fetch(`${SERVER}/users`);

  if (!response.ok) {
    throw new Error(
      `Status: ${response.status} de la BBDD: ${response.statusText}`,
    );
  }

  return response.json();
}

async function getDBUser(id) {
  const response = await fetch(`${SERVER}/users/${id}`);

  if (!response.ok) {
    throw new Error(
      `Status: ${response.status} de la BBDD: ${response.statusText}`,
    );
  }

  return response.json();
}

async function addDBUser(user) {
    const response = await fetch(`${SERVER}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });

    if (!response.ok) {
        throw new Error(
            `Status: ${response.status} de la BBDD: ${response.statusText}`,
        );
    }

    return response.json();
}

async function removeDBUser(id) {
    const response = await fetch(`${SERVER}/users/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error(
            `Status: ${response.status} de la BBDD: ${response.statusText}`,
        );
    }

    return response.json();
}

async function changeDBUser(user){
    const response = await fetch(`${SERVER}/users`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers:{
            'Content-Type': 'application/json',
        }
    });

    if (!response.ok) {
        throw new Error(
            `Status: ${response.status} de la BBDD: ${response.statusText}`,
        );
    }

    return response.json();
}

export default { getDBUsers, getDBUser, addDBUser, removeDBUser, changeDBUser };

