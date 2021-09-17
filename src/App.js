import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
      <div class="wrapper quote-machine border blue">
      <header class="border blue">
        <h1>Quote Generator</h1>
        <span class="version border blue">ver:   1.3.9.3.9.1.3.3</span>
        <meta charset="UTF-8" />
        <title>Quote Machine</title>
      </header>
      <main class="border blue">
        <blockquote id="quote"></blockquote>
        <div class="block">
          <a href="#" id="newQuoteBtn" class="btn">New Quote</a>
          <span id="tweet-wrapper">
          </span>
        </div>
      </main>
      <footer class="border blue">
        <p class="page-author">I'm a cloned character of the primordial <a href="https://maharanirach.com" class="link" target="_blank" rel="noreferrer">Maharani Rach</a>, being controlled inside a simulation game played by an alien kid from some other parallel universe.</p>
      </footer>
    </div>
    )
  }

  class ScriptCache {
    // ...
      scriptTag(src, cb) {
      return new Promise((resolve, reject) => {
        let resolved = false,
            errored = false,
            body = document.getElementsByTagName('body')[0],
            tag = document.createElement('script');
  
        tag.type = 'text/javascript';
        tag.async = false; // Load in order
  
        const handleCallback = tag.onreadystatechange = function() {
          if (resolved) return handleLoad();
          if (errored) return handleReject();
          const state = tag.readyState;
          if (state === 'complete') {
            handleLoad()
          } else if (state === 'error') {
            handleReject()
          }
        }
  
        const handleLoad = (evt) => {resolved = true;resolve(src);}
        const handleReject = (evt) => {errored = true; reject(src) }
  
        tag.addEventListener('load', handleLoad)
        tag.addEventListener('error', handleReject);
        tag.src = src;
        body.appendChild(tag);
        return tag;
      });
    }
  }
  
  ReactDOM.render( /*#__PURE__*/React.createElement(ScriptCache, null), document.getElementById("root"));  

export default App;