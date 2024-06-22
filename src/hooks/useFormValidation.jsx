import { useState } from "react";

const useFormValidation = (initialState) => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState(initialState);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email format is invalid";
    if (!formData.surveyTopic)
      newErrors.surveyTopic = "Survey Topic is required";
    if (formData.feedback.length < 50)
      newErrors.feedback = "Feedback must be at least 50 characters";

    if (formData.surveyTopic === "Technology") {
      if (!formData.favoriteProgrammingLanguage)
        newErrors.favoriteProgrammingLanguage =
          "Favorite Programming Language is required";
      if (!formData.yearsOfExperience)
        newErrors.yearsOfExperience = "Years of Experience is required";
    }

    if (formData.surveyTopic === "Health") {
      if (!formData.exerciseFrequency)
        newErrors.exerciseFrequency = "Exercise Frequency is required";
      if (!formData.dietPreference)
        newErrors.dietPreference = "Diet Preference is required";
    }

    if (formData.surveyTopic === "Education") {
      if (!formData.highestQualification)
        newErrors.highestQualification = "Highest Qualification is required";
      if (!formData.fieldOfStudy)
        newErrors.fieldOfStudy = "Field of Study is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return { formData, errors, handleChange, validate };
};

export default useFormValidation;
