const useFormValidation = (formData) => {
  const validateForm = () => {
    const {
      name,
      email,
      phone,
      position,
      experience,
      portfolio,
      skills,
      interviewTime,
    } = formData;

    if (!name || !email || !phone || !position || !interviewTime) {
      alert("All fields are required");
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Valid Email is required");
      return false;
    }

    const phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(phone)) {
      alert("Valid Phone Number is required");
      return false;
    }

    if (
      (position === "Developer" || position === "Designer") &&
      (!experience || experience <= 0)
    ) {
      alert("Relevant Experience is required and must be greater than 0");
      return false;
    }

    if (position === "Designer") {
      const urlPattern = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/;
      if (!portfolio || !urlPattern.test(portfolio)) {
        alert("Valid Portfolio URL is required");
        return false;
      }
    }

    if (!Object.values(skills).some((skill) => skill)) {
      alert("At least one skill must be selected");
      return false;
    }

    return true;
  };

  return {
    validateForm,
  };
};

export default useFormValidation;
