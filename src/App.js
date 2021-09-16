import './script';

export default App() 
{
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

