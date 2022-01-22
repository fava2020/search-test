import { useState, useEffect, useCallback } from 'react';
import SearchBox from './components/SearchBox/SearchBox';
import ElementText from './components/ElementText/ElementText';

import './App.css';

function App() {
  const [data, setData] = useState({
    data: [],
    searchKeyword: '',
  });

  const fetchData = useCallback(async (keyword) => {
    const request = await fetch(
      `https://api.github.com/search/issues?q=${keyword}:repo:facebook/react&sort=created&order=asc`
    );
    request.json().then((resp) => {
      return setData({
        data: resp.items,
      });
    });
  }, []);

  useEffect(() => {
    if (data.searchKeyword !== '') {
      fetchData(data.searchKeyword);
    }
  }, [data.searchKeyword, fetchData]);

  const handleChange = (e) => {
    e.preventDefault();
    setData({
      ...data,
      searchKeyword: e.target.value,
    });
  };

  return (
    <div className="App">
      <SearchBox handleChange={handleChange} placeholder="Search" />
      <div className="App__container">
        {data.data.map((data) => (
          <ElementText key={data.id} title={data.title} />
        ))}
      </div>
    </div>
  );
}

export default App;
