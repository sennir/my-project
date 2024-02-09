import {
  deleteUserById,
  insertUser,
  listAllUsers,
  selectUserById,
  updateUserById,
} from '../models/user-model.mjs';

// TODO: implement route handlers below for users (real data)

//retrieves all users from the database
const getUsers = async (req, res) => {
  const result = await listAllUsers();
  if (result.error) {
    return res.status(result.error).json(result);
  }
  return res.json(result);
};

//retrieves a user by their ID from the database
const getUserById = async (req, res) => {
  const result = await selectUserById(req.params.id);
  if (result.error) {
    return res.status(result.error).json(result);
  }
  return res.json(result);
};

//creates a new user in the database
const postUser = async (req, res) => {
  const {username, password, email} = req.body;
  // check that all needed fields are included in request
  if (username && password && email) {
    const result = await insertUser(req.body);
    if (result.error) {
      return res.status(result.error).json(result);
    }
    return res.status(201).json(result);
  } else {
    return res.status(400).json({error: 400, message: 'bad request'});
  }
};

//updates an existing user in the database
const putUser = async (req, res) => {
  const user_id = req.params.id;
  const {username, password, email} = req.body;
  // check that all needed fields are included in request
  if (user_id && username && password && email) {
    const result = await updateUserById({user_id, ...req.body});
    if (result.error) {
      return res.status(result.error).json(result);
    }
    return res.status(201).json(result);
  } else {
    return res.status(400).json({error: 400, message: 'bad request'});
  }
};

//deletes a user from the database
const deleteUser = async (req, res) => {
  const result = await deleteUserById(req.params.id);
  if (result.error) {
    return res.status(result.error).json(result);
  }
  return res.json(result);
};

// Dummy login with mock data, returns user object if username & password match
//handles user authentication
const postLogin = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Username or password is missing' });
  }

  try {
    // Retrieve user from the database by username
    const user = await findUserByUsername(username);
    if (!user) {
      return res.status(403).json({ error: 'Invalid username or password' });
    }

    // Compare passwords using bcrypt
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(403).json({ error: 'Invalid username or password' });
    }

    // Passwords match, generate and return a token or session
    // You would typically use a library like jsonwebtoken to generate tokens
    // Here, we'll just return a success message and user information
    return res.json({ message: 'Logged in successfully', user });
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export {getUsers, getUserById, postUser, putUser, postLogin, deleteUser};
