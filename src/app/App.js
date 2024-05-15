import React from 'react';
import '../App.css';
import Header from '../containers/Header/Header';
import Posts from '../features/posts/Posts';

function App() {
  return (
    <>
      <Header />
      <main>
        <Posts />
      </main>
    </>
  );
}

export default App;
