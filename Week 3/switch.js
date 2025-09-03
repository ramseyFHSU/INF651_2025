const choice = prompt("Select a weather type today").toLowerCase();

switch (choice) {
  case "sunny":
    console.log(
      "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream."
    );
    break;
  case "rainy":
    console.log(
      "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long."
    );
    break;
  case "snowing":
    console.log(
      "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman."
    );
    break;
  case "overcast":
    console.log(
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case."
    );
    break;
  default:
    console.log(
      "Sorry, I don't recognize that weather type. Try: sunny, rainy, snowing, or overcast."
    );
}
