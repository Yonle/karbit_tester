let currentQuestion = [];

let p = 0; // percent
let totalQL = questions.length; // total question length

let tbl;

window.onload = () => {
  tbl = $("#tabelhasil")
}

const $ = document.querySelector.bind(document)

function mulai() {
  $("#permulaan").classList.add("hidden")
  //$("#title").classList.add("hidden")
  rollQ()
}

const multiplierMap = {
  "Sering": 2.0,
  "Ya": 1.0,
  "Kadang": 0.7,
  "Jarang": 0.3,
  "Tidak": 0
}

function answer(j) {
  const multiplier = multiplierMap[j] ?? 0
  calc(currentQuestion[0] * multiplier)

  addToTable(currentQuestion[1], j)
  rollQ()
}

function rollQ() {
  if (questions.length == 0) {
    showResult()
    return
  }

  let randomIndx = Math.floor(Math.random() * questions.length)
  let thisQuestion = questions[randomIndx]
  let whichKind = Math.floor(Math.random() * (thisQuestion.length-1))
  currentQuestion = [thisQuestion[0], thisQuestion[whichKind+1]]

  yeetQ(randomIndx)

  $("#no_pertanyaan").innerText = totalQL - questions.length
  $("#pertanyaandiv").classList.remove("hidden")
  askPertanyaan(currentQuestion[1])
}

function askPertanyaan(q) { // q -> string
  $("#pertanyaan").innerText = "";
  $("#jawabandiv").classList.add("hidden")
  q = q.split("")

  let str = "";

  let meint = setInterval(() => {
    if (q.length < 1) {
      $("#jawabandiv").classList.remove("hidden")
      clearInterval(meint)
      return
    }

    str += q.shift()
    $("#pertanyaan").innerText = str
  }, 40)
}

function showResult() {
  $("#pertanyaandiv").classList.add("hidden")
  $("#persen").innerText = p

  $("#hasil").innerText = scores[0][1]

  for (let i = scores.length-1; i >= 0; i--) {
    if (p >= scores[i][0]) {
      $("#hasil").innerText = scores[i][1]
      break
    }
  }
  
  $("#hasildiv").classList.remove("hidden")
}

function yeetQ(indx) {
  questions[indx] = questions[questions.length-1]
  questions.pop()
}

function calc(answ) { // answ -> int
  p += answ
}

function addToTable(q, a) { // q, a -> string
  const row = document.createElement("tr")

  const qC = document.createElement("td")
  const aC = document.createElement("td")

  qC.appendChild(document.createTextNode(q))
  aC.appendChild(document.createTextNode(a))

  row.appendChild(qC)
  row.appendChild(aC)

  tbl.appendChild(row)
}
