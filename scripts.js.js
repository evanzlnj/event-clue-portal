// Passwords and prompts
const clues = {
  1: {password: "SYMBOL", prompt: "🎉 Correct! Now take a picture with your whole team pointing at the ‘symbol’ on the wall like a detective team on a mission!"},
  2: {password: "SEAT", prompt: "🎉 Correct! Have your entire team sit cross-legged on the red bench and raise one hand like you found something important!"},
  3: {password: "WOOD", prompt: "🎉 Correct! Get your whole team to pretend to lift a huge wooden plank above your heads in unison like strong workers!"},
  4: {password: "VISION", prompt: "🎉 Correct! Have your entire team put hands like binoculars on their eyes and smile together — look like you’re spotting the next big idea!"},
  5: {password: "SENTINEL", prompt: "🎉 Correct! Your whole team must pose like guardians — standing tall, hands up, in front of the computer monitors as sentinels protecting the tech!"},
  6: {password: "GHOST", prompt: "👻 Surprise! There is no Clue 6… but if you’re brave enough, get your team to act like you’re ghost hunters and pose dramatically!"} // Joke
};

// Check password and show prompt
function checkPassword() {
  const clueNum = document.getElementById('clueSelect').value;
  const input = document.getElementById('password').value.toUpperCase().trim();
  const promptEl = document.getElementById('prompt');

  if(input === clues[clueNum].password) {
    promptEl.style.opacity = 0;
    setTimeout(() => {
      promptEl.innerHTML = clues[clueNum].prompt;
      promptEl.style.opacity = 1;
    }, 200);
  } else {
    promptEl.style.opacity = 0;
    setTimeout(() => {
      promptEl.innerHTML = "❌ Wrong password. Try again!";
      promptEl.style.opacity = 1;
    }, 200);
  }
}
