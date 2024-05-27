import sata from "./baseUrl";  

const getPendingProjects = async () => {
  try {
    // Get the token from localStorage
    let token = JSON.parse(localStorage.getItem('userToken')).token;

    // Make the GET request to the API endpoint
    console.log(token);
    const response = await sata.get('/api/admin/get_pending_projects', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    // Return the response data
    return response.data.data;
  } catch (error) {
    console.error("Error fetching pending projects:", error);
    // Optionally, you can return an error message or handle the error as needed
    throw error;
  }
};

export default getPendingProjects;
