const authService = require('./services/authService');

async function signupController(req, res) {
  try {
    const result = await authService.signup(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function loginController(req, res) {
  try {
    const result = await authService.login(req.body);
    res.json(result);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

module.exports = { signupController, loginController };