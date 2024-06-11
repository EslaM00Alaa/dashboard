import baseURL from "./baseUrl";



const updateProject = async (n, description) => {
  try {
    let token = JSON.parse(localStorage.getItem('userToken')).token;
      console.log(n,description);
     await baseURL.post(
      `/api/admin/update_project/${n}`,
      {
        description
      },
      {
        headers: {
            Authorization: `Bearer ${token}`
          }
      }
    );

  
  } catch (error) {
    console.error("Error during login:", error);
  }
};

export { updateProject };
