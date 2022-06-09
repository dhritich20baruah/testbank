displayScore()

function displayScore(){
let html = "";
let score = localStorage.getItem('score')
  if (score == null){
    scoreArr = []
  }
  else{
    scoreArr = JSON.parse(score)
  }

scoreArr.forEach(function(element){
  html +=`
  <table>
  <tr>
  <th>Question No.</th>
  <th>Your Response</th>
  <th>Answer</th>
  <th>Result</th>
</tr>
  <tr>
    <td>${element.index}</td>
    <td>${element.response}</td>
    <td>${element.answer}</td>
    <td>${element.result}</td>
  </tr>
  </table>
  `
})
var scorelist = document.getElementById('scorelist')
scorelist.innerHTML = html
}

const clear = document.getElementById('clear')
clear.addEventListener('click', ()=>{
    localStorage.clear()
    displayScore()
})