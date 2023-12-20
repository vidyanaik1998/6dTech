import React, { useState } from "react";
import { DatePicker } from "antd";
import "./Form.css";

const FormSection = ({ onSubmit, config }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleClear = () => {
    setFormData({});
  };
  const onChange = (date, dateString) => {
    setFormData((prevData) => ({ ...prevData, date_paid: dateString }));
  };

  const renderFormItem = (item) => {
    switch (item.type) {
      case "TextField":
        return (
          <div key={item.name} className="inputwidth">
            <label>{item.label}</label>
            <input
              type={item.inputtype}
              value={formData[item.name] || ""}
              onChange={(e) => handleChange(item.name, e.target.value)}
              required={item.required}
            />
          </div>
        );
      case "DropDown":
        return (
          <div key={item.name} className="inputwidth">
            <label>{item.label}</label>
            <select
              value={formData[item.name] || ""}
              onChange={(e) => handleChange(item.name, e.target.value)}
              required
            >
              <option value="" disabled>
                Select {item.label}
              </option>
              {item.values.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        );
      case "Datepicker":
        return (
          <div key={item.name} className="inputwidth">
            <label>{item.label}</label>
            <DatePicker onChange={onChange} required={item.required} />
          </div>
        );
      case "Textarea":
        return (
          <div key={item.name} className="inputwidth">
            <label>{item.label}</label>
            <textarea
              name="postContent"
              rows={4}
              value={formData[item.name] || ""}
              onChange={(e) => handleChange(item.name, e.target.value)}
              cols={40}
              required={item.required}
            />
          </div>
        );
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    onSubmit(formData, e);
    setTimeout(() => {
      setFormData({});
    }, 1000);
  };

  return (
    <div className="form-section">
      <h2 className="form-heading"> Payment Details</h2>
      <form>
        <div className="form-container">
          {config.map((item) => renderFormItem(item))}
        </div>
        <hr />
        <div className="button-list">
          <button
            className="submit-button bg-green"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            className="submit-button bg-gray"
            type="button"
            onClick={handleClear}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormSection;
