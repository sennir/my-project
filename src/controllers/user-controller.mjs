const users = [
    {
      id: 1,
      username: "johndoe",
      password: "password1",
      email: "johndoe@example.com",
    },
    {
      id: 2,
      username: "janedoe",
      password: "password2",
      email: "janedoe@example.com",
    },
    {
      id: 3,
      username: "bobsmith",
      password: "password3",
      email: "bobsmith@example.com",
    },
  ];

  const getUsers = (req, res) => {
    res.json(users);
  };

  const getUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const userFound = users.find((user) => user.id === userId);

    if (userFound) {
      res.json(userFound);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  };

  const postUser = (req, res) => {
    const newUser = req.body;
    // Validate user input
    if (!newUser.username || !newUser.password || !newUser.email) {
      return res.status(400).json({ error: "Invalid user data" });
    }

    // Check if the username is already taken
    if (users.some((user) => user.username === newUser.username)) {
      return res.status(409).json({ error: "Username already taken" });
    }

    // Assign a new ID and add the user to the array
    const newUserId = users.length + 1;
    const user = { id: newUserId, ...newUser };
    users.push(user);

    res.status(201).json({ message: "User created successfully", user });
  };

  const putUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const index = users.findIndex((user) => user.id === userId);

    if (index === -1) {
      return res.status(404).json({ error: "User not found" });
    }

    const updatedUser = req.body;

    // Validate user input
    if (!updatedUser.username || !updatedUser.password || !updatedUser.email) {
      return res.status(400).json({ error: "Invalid user data" });
    }

    // Check if the new username is already taken
    if (
      users.some(
        (user) =>
          user.username === updatedUser.username && user.id !== userId
      )
    ) {
      return res.status(409).json({ error: "Username already taken" });
    }

    // Update the user data
    users[index] = { id: userId, ...updatedUser };

    res.json({ message: "User updated successfully", user: users[index] });
  };

  const postLogin = (req, res) => {
    const userCreds = req.body;
    if (!userCreds.username || !userCreds.password) {
      return res.sendStatus(400);
    }

    const userFound = users.find(
      (user) =>
        user.username === userCreds.username &&
        user.password === userCreds.password
    );

    if (userFound) {
      res.json({ message: "Logged in successfully", user: userFound });
    } else {
      res.status(403).json({ error: "Username/password invalid" });
    }
  };

  export { getUsers, getUserById, postUser, putUser, postLogin };
