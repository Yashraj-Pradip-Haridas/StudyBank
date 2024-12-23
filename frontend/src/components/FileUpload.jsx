import { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [course, setCourse] = useState('');
  const [year, setYear] = useState('');
  const [uploading, setUploading] = useState(false);
  const [fileUrl, setFileUrl] = useState('');

  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle course input change
  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };

  // Handle year input change
  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !course || !year) {
      alert('Please choose a file and fill out the course and year.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('course', course);
    formData.append('year', year);

    setUploading(true);

    try {
      // Post the file to the backend (server.js)
      const response = await axios.post('http://localhost:3000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // The backend returns the Cloudinary URL and other details
      setFileUrl(response.data.fileUrl); 
      alert('File uploaded and data saved successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      {/* <h1>Upload File to Cloudinary and Save URL to MongoDB</h1> */}
      <form onSubmit={handleSubmit} className='flex flex-col align-middle justify-center  gap-2'>
        <div>
          <label>Course:</label>
          <input type="text" value={course} onChange={handleCourseChange} required />
        </div>
        <div>
          <label>Year:</label>
          <input type="number" value={year} onChange={handleYearChange} required />
        </div>
        <div>
          <label>File:</label>
          <input type="file" onChange={handleFileChange} required />
        </div>
        <button type="submit" disabled={uploading}>
          {uploading ? 'Uploading...' : 'Upload File'}
        </button>
      </form>

      {fileUrl && (
        <div>
          <h3>Uploaded File:</h3>
          <a href={fileUrl} target="_blank" rel="noopener noreferrer">
            {fileUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
