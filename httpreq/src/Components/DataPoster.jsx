import React, { useState } from 'react';

const DataPoster = () => {
  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { userId, title, body };

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to post data');
      }

      console.log('Data successfully posted:', data);
    } catch (error) {
      console.error('Error posting data:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userId">User ID:</label>
        <input type="text" id="userId" value={userId} onChange={(e) => setUserId(e.target.value)} />
      </div>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label htmlFor="body">Body:</label>
        <textarea id="body" value={body} onChange={(e) => setBody(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DataPoster;
