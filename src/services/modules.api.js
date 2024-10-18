const SERVER = import.meta.env.VITE_URL_API; 

async function getDBModules() {
  const response = await fetch(`${SERVER}/modules`);

  if (!response.ok) {
    throw new Error(
      `Status: ${response.status} de la BBDD: ${response.statusText}`,
    );
  }

  return response.json();
}

async function getDBModule(id) {
  const response = await fetch(`${SERVER}/modules/${id}`);

  if (!response.ok) {
    throw new Error(
      `Status: ${response.status} de la BBDD: ${response.statusText}`,
    );
  }

  return response.json();
}

async function addDBModule(module) {
    const response = await fetch(`${SERVER}/modules`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(module),
    });

    if (!response.ok) {
        throw new Error(
            `Status: ${response.status} de la BBDD: ${response.statusText}`,
        );
    }

    return response.json();
}

async function removeDBModule(id) {
    const response = await fetch(`${SERVER}/modules/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error(
            `Status: ${response.status} de la BBDD: ${response.statusText}`,
        );
    }

    return response.json();
}

async function changeDBModule(module){
    const response = await fetch(`${SERVER}/modules`, {
        method: 'PUT',
        body: JSON.stringify(module),
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

export default { getDBModules, getDBModule, addDBModule, removeDBModule, changeDBModule };

