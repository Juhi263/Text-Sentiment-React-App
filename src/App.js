import React from 'react';
import SentimentAnalysis from './components/SentimentAnalysis';

const App = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Text Sentiment Analysis Tool</h1>
      <SentimentAnalysis />
    </div>
  );
};

export default App;
