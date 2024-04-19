const getAllCharacters = async function() { 
  const res = await fetch(`https://thronesapi.com/api/v2/Characters`);
  if (res.status == 200) {
    return await res.json();
  } else {
    console.error('Error fetching characters:', error);
  }
}

export { getAllCharacters }

// Ended up not using it but sill works