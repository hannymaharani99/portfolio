import logo from './logo.svg';

function App() {
    return (
      <html>
          <body>
      <link href="https://fonts.googleapis.com/css?family=Black+Ops+One|Source+Code+Pro" rel="stylesheet" />
      <link rel="stylesheet" href="./style.css" />
       <div class="container">
       <script src="./script.js"></script>
          <div class="wrapper quote-machine border blue">
            <header class="border blue">
              <h1>Quote Generator</h1>
              <span class="version border blue">ver:   1.3.9.3.9.1.3.3</span>
              <meta charset="UTF-8" />
              <title>Quote Machine</title>
              <link rel="stylesheet" href="./style.css" />
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
              <p class="page-author">I'm a cloned character of the primordial <a href="https://maharanirach.com" class="link" target="_blank">Maharani Rach</a>, being controlled inside a simulation game played by an alien kid from some other parallel universe.</p>
            </footer>
          </div>
      
          <div class="wrapper mem border blue">
           <div class="cells">
             <header><h2>MEM.</h2></header>
             <div class="border red">
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
      
        </div>
      </div>
          </body>
      </html>
      
        
    )
  }




export default App;
