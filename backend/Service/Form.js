const bcrypt = require("bcryptjs");
const Form = require("../Model/Form");

const submitForm = async (formData) => {
  const { name, email, password } = formData;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10); // 10 = salt rounds

  // Create a new form entry with hashed password
  const newForm = new Form({
    name,
    email,
    password: hashedPassword,
  });

  return await newForm.save();
};


const signupUser = async ({ name, email, password }) => {
  // Check if user exists
  const existingUser = await Form.findOne({ email });
  if (existingUser) {
    return { success: false, statusCode: 409, message: "User already exists. Please login." };
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create and save new user
  const newUser = new Form({ name, email, password: hashedPassword });
  await newUser.save();

  return { success: true, statusCode: 201, message: "SignUp Successfully" };
};

module.exports = { submitForm,signupUser };
