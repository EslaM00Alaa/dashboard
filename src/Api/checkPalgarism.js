import axios from "axios";
const checkPalgarism = async (description) => {
  try {
    // Get the token from localStorage
    const tokenData = localStorage.getItem('userToken');
    if (!tokenData) {
      throw new Error("No user token found");
    }
    const { token } = JSON.parse(tokenData);

    // API endpoint
    const url = 'https://readx.up.railway.app/api/admin/check_plagiarism';
    // Make the POST request to the API endpoint with the description in the query string
    const response = await axios.post(`${url}?description=${encodeURIComponent(description)}`, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      timeout: 3600000 // 1 hour timeout
    });

    // Return the response data
    return response.data.data;
  } catch (error) {
    console.error("Error fetching plagiarism data:", error);
    // Optionally, you can return an error message or handle the error as needed
    throw error;
  }
};

export default checkPalgarism;
