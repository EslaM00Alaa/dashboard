import sata from "./baseUrl";  

const getReports = async () => {
  try {
    // Get the token from localStorage
    let token = JSON.parse(localStorage.getItem('userToken')).token;

    // Make the GET request to the API endpoint
    console.log(token);
    const response = await sata.get('/api/admin/get_projects_report', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

  
    return response.data.data;
  } catch (error) {
    console.error("Error fetching pending projects:", error);
   
    throw error;
  }
};

export default getReports;
