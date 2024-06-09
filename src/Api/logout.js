import sata from "./baseUrl";
const token = JSON.parse(localStorage.getItem('userToken')).token;

const logout = async () => {
  try {
    await sata.post('/api/admin/logout', {}, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    console.log("Logged out successfully.");
  } catch (error) {
    console.error("Something went wrong during logout:", error);
  }
}

export default logout;
