const formService = require("../Service/Form");

const submitFormController = async (req, res) => {
  try {
    const savedData = await formService.submitForm(req.body);
    res.status(201).json({
      success: true,
      message: "Form submitted successfully",
      data: savedData,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to submit form",
      error: err.message,
    });
  }
};

const signup = async (req, res) => {
  try {
    const result = await signupUser(req.body);
    return res.status(result.statusCode).json({
      success: result.success,
      message: result.message,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {submitFormController,signup} ;
