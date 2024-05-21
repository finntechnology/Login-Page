const USERNAME_INPUT = document.getElementById("username");
const PASSWORD_INPUT = document.getElementById("password");
const LOGIN_BTN = document.getElementById("login");

LOGIN_BTN.addEventListener("click", async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: USERNAME_INPUT.value,
        password: PASSWORD_INPUT.value,
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});
