/*Write a program that asks the user for the number of participants.
After this, the program asks for the names of all participants.
Finally, the program prints the names of the participants on
the web page in an ordered list (<ol>) in alphabetical order. (2p)*/

const participantNum = parseInt(prompt('give num of participants.'));
participantNames = [];

for (i = 0; i < participantNum; i++){
  participantNames.push(prompt(`Give name of participant ${i+1}.`));
}

participantNames.sort()
const list = document.getElementById('list');


for (i = 0; i<participantNum; i++){
  const listelemt = document.createElement('li');
  listelemt.innerHTML = `${participantNames[i]}`;
  list.append(listelemt);
}