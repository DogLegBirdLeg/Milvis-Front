export const sendData = async(url, data) => {
  const requestOption = {
    mode: 'cors',
    method: 'POST',
    headers: {
      "Content-Type": 'application/json',
    },
    body: data,
    credentials: 'include',
    Origin: "http://localhost:3000",
    AccessControlRequestHeaders: 'Content-Type'
  }

  try {
    const data = await fetch(url, requestOption);
    const res = data.json();
    
    return res;
  } catch(err) {
    console.log(err);
  }
}