'use strict'
// Write a voting program as described below for small-scale meeting use. (8p)
//     The program asks for the number of candidates.
//     Then the program asks for the names of the candidates: 'Name for candidate 1
//     Store the candidates names and initial vote count in objects
//
//     The program asks for the number of voters.
//     The program asks each voter in turn who they will vote for. Voter shoud enter candidate name.
//     If the voter enters an empty value instead of the voting number, it will be interpreted as an empty vote.
//     The program announces the name of the winner and the results by printing it to the console:
const candidate_ammount = parseInt(prompt("How many candidates?"))
let candidates = []
let absent = 0
for (let x = 0; x < candidate_ammount; x++) {
    let given_name = prompt("Name for candidate " + (x + 1))
    candidates[x] = {
        name: given_name,
        votes: 0,
    }
}
for (let index in candidates) {
    console.log(candidates[index].name)
}
const voter_ammount = parseInt(prompt("How many voters?"))
for (let y = 1; y <= voter_ammount; y++) {
    let vote = prompt("Who do you want to vote for? (Candidates in console)")
    if (vote === "") {
        absent++
    } else {
        for (let p in candidates) {
            if (candidates[p].name.includes(vote)) {
                candidates[p].votes++
            }
        }
    }
}
candidates.sort((a, b) => {
    return b.votes - a.votes;
});
console.log("The winner is " + candidates[0].name)
console.log("results:")
for (let u in candidates) {
    console.log(candidates[u].name + ": " + candidates[u].votes + " votes")
}
