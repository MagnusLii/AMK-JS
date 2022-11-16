

const candidates = parseInt(prompt('number of candidates.'));
const voters = parseInt(prompt('number of voters.'))
let candidateList = [];

for (i = 0; i<candidates; i++){
  candidateList.push({"name": prompt(`give name for candidate ${i+1}`),
                      "votes": 0});
}

for (i = 1; i <= voters; i++){
  let vote = prompt('Who do you wish to vote for?');
  let ind = candidateList.findIndex(item => item.name === vote)
  candidateList[ind].votes = candidateList[ind].votes + 1
}

candidateList.sort((a, b) => (a.votes > b.votes))
console.log(`The winner is ${candidateList[0].name}, with ${candidateList[0].votes} votes.`)

for (i = 0; i<candidates; i++){
  console.log(`${candidateList[i].name}: ${candidateList[i].votes} votes.`)
}