import baseURL from "./baseUrl";  

const acerej = async (open, id) => {
  try {
    // Get the token from localStorage
    const tokenData = localStorage.getItem('userToken');
    if (!tokenData) {
      throw new Error("No user token found");
    }
    const { token } = JSON.parse(tokenData);

    // Make the POST request to the API endpoint
    const endpoint = `/api/admin/${open ? 'accept_project' : 'reject_project'}/${id}`;
    await baseURL.post(endpoint, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log("Registration status updated successfully");
  } catch (error) {
    console.error("Error updating registration status:", error);
    throw error;
  }
};

export default acerej;
