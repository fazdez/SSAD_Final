import jwtDecode from "jwt-decode";

export default function getCurrentUser() {
  try {
    let data = localStorage.getItem("data");
    data = JSON.parse(data);
    const jwt = data.token;
    let user = jwtDecode(jwt);
    return user;
  } catch (err) {
    return null;
  }
}
