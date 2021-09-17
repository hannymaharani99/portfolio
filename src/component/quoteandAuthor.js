import React from 'react';
import quotes from './quoteDB';

export default function QuoteAndAuthor(props) {
    var arrRandomNum = [];
    return (
        function randomQuotes() {

            var i = 0;
            var minNum = 0;
            var maxNum = quotes.length;
            var resultQuote;
            var element = document.getElementById('quote');
          
            var randomNum = 0;
          
            if (arrRandomNum.length != maxNum) {
          
              while (arrRandomNum.indexOf(randomNum) > -1) {
                randomNum = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
                console.log('Random number generated!');
                console.log('random number is: ' + randomNum);
              }
          
              arrRandomNum.push(randomNum);
          
              if (quotes[randomNum].link == '#') {
                resultQuote = element.innerHTML = '<p>' + quotes[randomNum].quote + '</p>' + '<footer><a href="#" class="link brackets author">' + quotes[randomNum].author + '</a><span class="cursor blink">&#9646;</span></footer>';
                console.log('author, no link');
              } else {
                resultQuote = element.innerHTML = '<p>' + quotes[randomNum].quote + '</p>' + '<footer><a href="' + quotes[randomNum].link + '" target="_blank" class="link brackets author">' + quotes[randomNum].author + '</a><span class="cursor blink">&#9646;</span></footer>';
              }
          
              tweetButton(randomNum);
          
            } else {
              resultQuote = element.innerHTML = '<div class="warning"><span>WARNING</span><p> you have reached the end. <span class="cursor blink">&#9646;</span></p></div>';
              console.log('No more new quotes!');
            }
          
            console.log(arrRandomNum);
            console.log('random number is: ' + randomNum);
          
          memAddClass(randomNum);

            var j = 0;
            var i = 1;
            var isTag;
            var text;
            function type(){
          
              text = resultQuote.slice(0, i++);
          
              if (text === resultQuote) return;
          
                element.innerHTML = text+'&#9646;';
          
              var char = text.slice(-1);
          
              if( char === '<' ) isTag = true;
              if( char === '>' ) isTag = false;
          
              if (isTag) return type();
              setTimeout(type, 20);
            }
          
            return type();
          }
          
    )
    function memAddClass(randomQuotes){
        document.getElementById(randomQuotes).className = 'opened';
      }
      
      function tweetButton(x){
        var tweetElement = document.getElementById('tweet-wrapper');
        console.log(quotes[x].quote);
        return tweetElement.innerHTML = '<a href="http://twitter.com/intent/tweet?text='+quotes[x].quote+'-'+quotes[x].author+' sent from generator quote" class="link btn" target="_top">Tweet Quote</a>';
      }
    
     
      
}

function clickAnimation(x) {
    var element = x ;
  
    element.className += ' clicked';
    setTimeout(function() {
      element.className = 'btn';
    }, 3000);
  
  }
  
var quoteElement = document.getElementById('newQuoteBtn');
QuoteAndAuthor();

quoteElement.addEventListener('click', function() {
      clickAnimation(quoteElement);
      QuoteAndAuthor();
      });