import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFormValidation from "../hooks/useFormValidation";
const SurveyForm = () => {
  const navigate = useNavigate();
  const initialState = {
    fullName: "",
    email: "",
    surveyTopic: "",
    favoriteProgrammingLanguage: "",
    yearsOfExperience: "",
    exerciseFrequency: "",
    dietPreference: "",
    highestQualification: "",
    fieldOfStudy: "",
    feedback: "",
  };

  const { formData, errors, handleChange, validate } =
    useFormValidation(initialState);

  useEffect(() => {
    if (formData.surveyTopic) {
      fetchAdditionalQuestions(formData.surveyTopic);
    }
    localStorage.clear();
  }, [formData.surveyTopic]);

  const fetchAdditionalQuestions = async (topic) => {
    try {
      const response = await fetch(
        `https://surveyapi-ekm5.onrender.com/api/v1/surveyquestion/${topic}`
      );

      const data = await response.json();
      localStorage.setItem("data", JSON.stringify(data));
    } catch (error) {
      console.error("Error fetching additional questions:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("Userdata", JSON.stringify(formData));
    navigate("/pop-up", { state: { show: true } });
  };

  return (
    <div className="containers">
      <form onSubmit={handleSubmit}>
        <div className="mb-3 ">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your Full Name"
            required
            id="exampleFormControlInput1"
            className="form-control exampleFormControlInput1"
          />
          {errors.fullName && <p>{errors.fullName}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your Email"
            className="form-control  exampleFormControlInput1"
            aria-describedby="basic-addon1"
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="surveyH" className="sclass">
            Select topic
          </label>
          <select
            className="form-select"
            name="surveyTopic"
            value={formData.surveyTopic}
            onChange={handleChange}
            required
            id="surveyH"
          >
            <option defaultValue={"Select a Survey"}>
              Select a Survey topic
            </option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
          </select>
          {errors.surveyTopic && <p>{errors.surveyTopic}</p>}
        </div>
        {formData.surveyTopic === "Technology" && (
          <div className="double-box">
            <div className="mb-3">
              <label htmlFor="surveyH" className="sclass">
                Language
              </label>
              <select
                name="favoriteProgrammingLanguage"
                value={formData.favoriteProgrammingLanguage}
                onChange={handleChange}
                required
                className="form-select"
              >
                <option value="">Select a language</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value="C#">C#</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Experience Year
              </label>
              <input
                type="number"
                name="yearsOfExperience"
                value={formData.yearsOfExperience}
                onChange={handleChange}
                required
                className="form-control  exampleFormControlInput1"
              />
            </div>
          </div>
        )}
        {formData.surveyTopic === "Health" && (
          <div className="double-box">
            <div className="mb-3">
              <label htmlFor="surveyH" className="sclass">
                Exercise Frequency
              </label>
              <select
                name="exerciseFrequency"
                value={formData.exerciseFrequency}
                onChange={handleChange}
                required
                className="form-select"
              >
                <option value="" selected>
                  Select Exercise frequency
                </option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Rarely">Rarely</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="surveyH" className="sclass">
                Select Diet
              </label>
              <select
                name="dietPreference"
                value={formData.dietPreference}
                onChange={handleChange}
                required
                className="form-select"
              >
                <option value="" selected>
                  Select a diet
                </option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Vegan">Vegan</option>
                <option value="Non-Vegetarian">Non-Vegetarian</option>
              </select>
            </div>
          </div>
        )}
        {formData.surveyTopic === "Education" && (
          <div className="select-box double-box">
            <div className="mb-3">
              <label htmlFor="surveyH" className="sclass">
                Qualification
              </label>
              <select
                name="highestQualification"
                value={formData.highestQualification}
                onChange={handleChange}
                required
                className="form-select"
              >
                <option value="" selected>
                  Heighest qualification
                </option>
                <option value="High School">High School</option>
                <option value="Bachelor's">Bachelor's</option>
                <option value="Master's">Master's</option>
                <option value="PhD">PhD</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Field of Study
              </label>
              <input
                type="text"
                name="fieldOfStudy"
                value={formData.fieldOfStudy}
                onChange={handleChange}
                required
                className="form-control  exampleFormControlInput1"
              />
            </div>
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Feedback
          </label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
            minLength={50}
            placeholder="Enter your feedback here..."
            className="form-control  exampleFormControlInput1"
            id="exapmpleFormControlTextarea1"
          />
          {errors.feedback && <p>{errors.feedback}</p>}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SurveyForm;
