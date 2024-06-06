import sata from "./baseUrl";  

const openClose = async (open) => {
  try {
    // Get the token from localStorage
    const tokenData = localStorage.getItem('userToken');
    if (!tokenData) {
      throw new Error("No user token found");
    }
    const { token } = JSON.parse(tokenData);

    // Make the POST request to the API endpoint
    console.log(token);
    await sata.post(`/api/admin/${open ? 'open' : 'close'}_registration`, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

  } catch (error) {
    console.error("Error updating registration status:", error);
    throw error;
  }
};

export default openClose;
