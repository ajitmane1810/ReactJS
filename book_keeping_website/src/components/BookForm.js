import React, { useState } from 'react'
import './BookForm.css';
import axios from 'axios';



const BookForm = () => {

  const url = "http://localhost:8080/addBook";

  const [formData, setFormData] = useState({
    bookTitle: '',
    authorName: '',
    genre: '',
  });



  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    axios.post(url,{
      bookTitle:formData.bookTitle,
      authorName:formData.authorName,
      genre:formData.genre
    })
    .then((response)=>{
        console.log('response : ',response.data);
        setFormData({
          bookTitle:"",
          authorName:"",
          genre:""
        })
    });
    console.log('Form submitted:', formData);
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  return (
    <div className="form-container">
    <h2>Register Book</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="Book Title">Book Title</label>
        <input
          type="text"
          id="bookTitle"
          name="bookTitle"
          value={formData.bookTitle}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="Author Name">Author Name</label>
        <input
          type="text"
          id="authorName"
          name="authorName"
          value={formData.authorName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        <input
          type="text"
          id="genre"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" id='btn'>Register</button>
    </form>
  </div>
  )
}

export default BookForm