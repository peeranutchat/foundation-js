function grade(score) {
  const roundedScore = Math.round(score);
  if (roundedScore <= 100 && roundedScore >= 0) {
    if (roundedScore >= 80) {
      console.log("You got A");
    } else if (roundedScore >= 70) {
      console.log("You got B");
    } else if (roundedScore >= 60) {
      console.log("You got C");
    } else if (roundedScore >= 50) {
      console.log("You got D");
    } else {
      console.log("You got F");
    }
  } else {
    console.log("Error");
  }
}

// grade(99.5);
// grade(40);

function score() {
  const roundedScore = Math.round(score);
  if (roundedScore < 0 || roundedScore > 100)
  
}

function grade(roundedScore) {
  if (roundedScore >= 80) {
    console.log("You got A");
  } else if (roundedScore >= 70) {
    console.log("You got B");
  } else if (roundedScore >= 60) {
    console.log("You got C");
  } else if (roundedScore >= 50) {
    console.log("You got D");
  } else {
    console.log("You got F");
  }
}

score(80);
