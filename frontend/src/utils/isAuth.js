import getCurrentUser from "./getCurrentUser";
export default function isAuth() {
  const user = getCurrentUser();
  if (user) {
    return user.isAdmin;
  } else {
    return false;
  }
}
