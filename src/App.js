import React from 'react';
import ReactDOM from 'react-dom';
import QuoteAndAuthor from './component/quoteandAuthor';

function Container (){
  React.useEffect(() => 
    <QuoteAndAuthor />
  ) 
  return (
    <div class="wrapper quote-machine border blue">
      <header class="border blue">
        <h1>Quote Generator</h1>
        <span class="version border blue">ver:   1.3.9.3.9.1.3.3</span>
      </header>
      <main class="border blue">
        <blockquote id="quote">
          </blockquote>
        <div class="block">
          <a href="#" id="newQuoteBtn" class="btn" />New Quote
          <span id="tweet-wrapper">
          </span>  
        </div>
      </main>
      <footer class="border blue">
        <p class="page-author">I'm a cloned character of the primordial <a href="https://hannymaharani99.github.io" class="link" target="_blank" rel="noreferrer">Maharani Rach</a>, being controlled inside a simulation game played by an alien kid from some other parallel universe.</p>
      </footer>
    </div>
      )
}

function Mem(){
  React.useEffect(() => 
    <QuoteAndAuthor />
  )
  return (
    <div class="wrapper mem border blue">
    <div class="cells">
      <header><h2>MEM.</h2></header>
      <div class="border red" />
        <div class="float-left">
          <div id="0"><span class="module"></span><br/>/</div>
          <div id="1"><span class="module"></span><br/>/</div>
          <div id="2"><span class="module"></span><br/>/</div>
        </div>
        <div class="float-left">
          <div id="3"><span class="module"></span><br/>/</div>
          <div id="4"><span class="module"></span><br/>/</div>
          <div id="5"><span class="module"></span><br/>/</div>
        </div>
        <div class="float-left">
          <div id="6"><span class="module"></span><br/>/</div>
          <div id="7"><span class="module"></span><br/>/</div>
          <div id="8"><span class="module"></span><br/>/</div>
        </div>
        <div class="float-left">
          <div id="9"><span class="module"></span><br/>/</div>
          <div id="10"><span class="module"></span><br/>/</div>
          <div id="11"><span class="module"></span><br/>/</div>
        </div>
        <div class="float-left">
          <div id="12"><span class="module"></span><br/>/</div>
          <div id="13"><span class="module"></span><br/>/</div>
          <div id="14"><span class="module"></span><br/>/</div>
        </div>
        <div class="float-left">
          <div id="15"><span class="module"></span><br/>/</div>
          <div id="16"><span class="module"></span><br/>/</div>
          <div id="17"><span class="module"></span><br/>/</div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  )
}

// root method
function Index() {
	return (
		<div class="container" >
			<Container />
			<Mem />
		</div>
	);
}

ReactDOM.render(<Index />,document.getElementById('root'));

export default Index;