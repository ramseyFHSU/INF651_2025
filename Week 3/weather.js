let choice = prompt("Select a weather type today");
let temperature = Number(prompt("Enter the temperature"));

if (choice === "sunny") {
  if (temperature < 86) {
    console.log(
      "It is " +
        temperature +
        " degrees outside -- nice and sunny. Let's go out to the beach, or take a walk!"
    );
  } else if (temperature >= 86) {
    console.log(
      "It is " +
        temperature +
        " degrees outside -- REALLY HOT! If you want to go outside, make sure to stay hydrated."
    );
  }
  console.log(
    "It is nice and sunny outside today. Wear shorts! Go to the beach, or relax in the shade."
  );
} else if (choice === "rainy") {
  console.log(
    "Rain is falling outside; take a rain coat and an umbrella, and don't forget your boots!"
  );
} else if (choice === "snowing") {
  console.log(
    "The snow is coming down -- it is freezing! Best to stay in with a cup of hot chocolate."
  );
} else if (choice === "overcast") {
  console.log(
    "It isn't raining, but the sky is grey and gloomy; it could turn any minute. Keep a jacket handy!"
  );
} else {
  console.log(
    "Unknown weather type. Please enter: sunny, rainy, snowing, or overcast."
  );
}
