import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [news, setNews] = useState([]);

  useEffect(async () => {
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=br&category=entertainment&apiKey=58c74fcfefa74644bfed2f1b72bce85f');
    const data = await response.json();
    setNews(data.articles);
    alert('Primeira execução')
    //setInterval(()=>{robo()}, 10000)
  }, []);

   async function robo(){
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=br&category=entertainment&apiKey=58c74fcfefa74644bfed2f1b72bce85f');
    const data = await response.json();
    setNews(data.articles);
   // alert('Continua a execução')
  }

  return (
    <div className='App'>
      <div className='App-header'><h1>Noticias do momento</h1></div>
      <ul>
        {news.map(repo => (
          <div className='space'>
            <div key={repo.id}>{repo.title}</div>
            <a href={repo.url}><img className='img' src={repo.urlToImage} /> </a>
            <div>{repo.content}</div>
          </div>
        ))}
      </ul>
    </div>
  )
}

