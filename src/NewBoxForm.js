import React, { useState } from 'react';

const NewBoxForm = ({ createBox }) => {
  //  set the initial data for the formData variable to '' for each input
  const INITIAL_DATA = {
    height: '',
    width: '',
    color: '',
  };
  const [formData, setFormData] = useState(INITIAL_DATA);
  // sets the data in the form to the formData variable
  // each time an item is selected or an input has been changed
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => {
      return { ...formData, [name]: value };
    });
  };
  // Hanles the form being submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    createBox({ ...formData });
    setFormData(INITIAL_DATA);
  };

  //  returns the inputs and lables for each
  return (
    <form onSubmit={handleSubmit}>
      <hr />
      <h1>Create a New Box!</h1>
      <label htmlFor="height">Box Height: </label>
      <input
        type="text"
        name="height"
        id="height"
        value={formData.height}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="width">Box Width: </label>
      <input
        type="text"
        name="width"
        id="width"
        value={formData.width}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="color">Color: </label>

      <input
        type="color"
        name="color"
        id="color"
        value={formData.color}
        onChange={handleChange}
      />
      <br />
      <button>Create Box</button>
    </form>
  );
};

export default NewBoxForm;
