const SERVER = import.meta.env.VITE_URL_API; 

async function getDBBooks() {
  const response = await fetch(`${SERVER}/books`);

  if (!response.ok) {
    throw new Error(
      `Status: ${response.status} de la BBDD: ${response.statusText}`,
    );
  }

  return response.json();
}

async function getDBBook(id) {
  const response = await fetch(`${SERVER}/books/${id}`);

  if (!response.ok) {
    throw new Error(
      `Status: ${response.status} de la BBDD: ${response.statusText}`,
    );
  }

  return response.json();
}

async function addDBBook(book) {
    const response = await fetch(`${SERVER}/books`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
    });

    if (!response.ok) {
        throw new Error(
            `Status: ${response.status} de la BBDD: ${response.statusText}`,
        );
    }

    return response.json();
}

async function removeDBBook(id) {
    const response = await fetch(`${SERVER}/books/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error(
            `Status: ${response.status} de la BBDD: ${response.statusText}`,
        );
    }

    return response.json();
}

export default { getDBBooks, getDBBook, addDBBook, removeDBBook };

