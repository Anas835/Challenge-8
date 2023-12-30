import React, { Component } from 'react';

class DataFetcher extends Component {
  state = {
    data: [],
    error: null,
  };

  fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ data, error: null });
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  render() {
    const { data, error } = this.state;

    return (
      <div>
        <button onClick={this.fetchData}>Fetch Data</button>
        {error && <p>Error fetching data: {error.message}</p>}
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DataFetcher;
