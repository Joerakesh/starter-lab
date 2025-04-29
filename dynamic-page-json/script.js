fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const userList = document.getElementById("user-list");
    data.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.innerHTML = `<strong>${user.name}</strong> - Age: ${user.age}, City: ${user.city}`;
      userList.appendChild(userDiv);
    });
  })
  .catch((error) => {
    console.error("Error loading JSON:", error);
  });
