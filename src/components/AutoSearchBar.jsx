import React from 'react';

const AutoSearchBar = ({ onSearch, loading }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const autoId = e.target.elements.autoId.value;
    onSearch(Number(autoId));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" name="autoId" defaultValue={1} min={1} disabled={loading} />
      <button type="submit" disabled={loading}>Search</button>
    </form>
  );
};

export default AutoSearchBar;