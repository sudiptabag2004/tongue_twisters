const tongueTwisters = [
    {
      twister: "She sells seashells by the seashore, and the shells she sells are surely seashells.",
      difficulty: "Moderate"
    },
    {
      twister: "How can a clam cram in a clean cream can?",
      difficulty: "Moderate"
    },
    {
      twister: "Fuzzy Wuzzy was a bear, Fuzzy Wuzzy had no hair. Fuzzy Wuzzy wasn’t very fuzzy, was he?",
      difficulty: "Easy"
    },
    {
      twister: "I saw Susie sitting in a shoeshine shop. Where she sits she shines, and where she shines she sits.",
      difficulty: "Moderate"
    },
    {
      twister: "Peter Piper picked a peck of pickled peppers. How many pickled peppers did Peter Piper pick?",
      difficulty: "Difficult"
    },
    {
      twister: "Six slippery snails, slid silently seaward.",
      difficulty: "Easy"
    },
    {
      twister: "A proper copper coffee pot.",
      difficulty: "Easy"
    },
    {
      twister: "Sally sells seashells by the seashore. But if Sally sells seashells by the seashore, then where are the seashells Sally sells?",
      difficulty: "Moderate"
    }
  ];
  
  let currentIndex = 0;
  const twisterContainer = document.getElementById('twister-container');
  
  function displayTwister(index) {
    twisterContainer.innerHTML = `
      <p><strong>Tongue Twister:</strong> ${tongueTwisters[index].twister}</p>
      <p><strong>Difficulty:</strong> ${tongueTwisters[index].difficulty}</p>
    `;
  }
  
  function nxt() {
    currentIndex = (currentIndex + 1) % tongueTwisters.length;
    displayTwister(currentIndex);
  }
  
  function prev() {
    currentIndex = (currentIndex - 1 + tongueTwisters.length) % tongueTwisters.length;
    displayTwister(currentIndex);
  }
  
  
  displayTwister(currentIndex);
  