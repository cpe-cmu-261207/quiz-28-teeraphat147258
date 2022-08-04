async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  return resp.data;
}

const name = document.getElementById(resp.data.name);

if (resp.data.result.gender == male) {
  return;
} else {
  return;
}
