import sata from "./baseUrl";



const loginApi = async (username, password) => {
  try {
    const csrfToken = document
      .querySelector('meta[name="csrf-token"]')
      .getAttribute("content");

    const response = await sata.post(
      "/api/admin/login",
      {
        username,
        password,
      },
      {
        headers: {
          "X-CSRF-TOKEN": csrfToken,
        },
      }
    );

    const { data } = response.data;
    const { token } = data;

    localStorage.setItem("userToken", JSON.stringify({ token }));

    // Return true to indicate successful login
    return true;
  } catch (error) {
    console.error("Error during login:", error);
    return false;
  }
};

export { loginApi };
