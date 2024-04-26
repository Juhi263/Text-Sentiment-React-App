import React, { useState } from 'react';
import Sentiment from 'sentiment';
import './SentimentAnalysis.css';

const SentimentAnalysis = () => {
  const [text, setText] = useState('');
  const [simpleSentimentResult, setSimpleSentimentResult] = useState('');
  const [detailedSentimentResult, setDetailedSentimentResult] = useState(null);

  const analyzeSimpleSentiment = () => {
    const sentiment = new Sentiment();
    const result = sentiment.analyze(text);
    let sentimentText;
    if (result.score > 0) {
      sentimentText = 'Positive';
    } else if (result.score < 0) {
      sentimentText = 'Negative';
    } else {
      sentimentText = 'Neutral';
    }
    setSimpleSentimentResult(sentimentText);
  };

  const analyzeDetailedSentiment = () => {
    const sentiment = new Sentiment();
    const result = sentiment.analyze(text);
    setDetailedSentimentResult({
      score: result.score,
      positive: result.positive || [],
      negative: result.negative || [],
      neutral: result.neutral || []
    });
  };

  const clearText = () => {
    setText('');
    setSimpleSentimentResult('');
    setDetailedSentimentResult(null);
  };

  return (
    <div className="container">
      <h2 className="header">Sentiment Analysis Tool</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to analyze sentiment..."
        className="text-area"
      ></textarea>
      <br />
      <button onClick={analyzeSimpleSentiment} className="analyze-btn">Analyze Simple Sentiment</button>&nbsp;
      <button onClick={analyzeDetailedSentiment} className="analyze-btn">Analyze Detailed Sentiment</button><br/>
      <button onClick={clearText} className="clear-btn" style={{marginTop:"20px"}}>Clear Text</button>
      <br />
      {simpleSentimentResult && <p className="simple-sentiment">Simple Sentiment: {simpleSentimentResult}</p>}
      {detailedSentimentResult && (
        <div className="result-container">
          <p className="score">Sentiment Score: {detailedSentimentResult.score}</p>
          <p className="positive">Positive: {detailedSentimentResult.positive.length > 0 ? detailedSentimentResult.positive.join(', ') : 0}</p>
          <p className="negative">Negative: {detailedSentimentResult.negative.length > 0 ? detailedSentimentResult.negative.join(', ') : 0}</p>
        </div>
      )}
    </div>
  );
};

export default SentimentAnalysis;
