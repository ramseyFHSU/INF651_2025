// Declare a global constant 'galleryName' with block scope
const galleryName = "Modern Art"; // Constant variable, cannot be reassigned

function displayArt() {
  // Access the global constant 'galleryName' inside the function
  console.log(`Welcome to the ${galleryName}`); // Output: Welcome to the Modern Art

  // Declare a block-scoped constant 'featuredArtist'
  const featuredArtist = "Van Gogh"; // This constant is block-scoped and only accessible within the function
  console.log(`Today's featured artist is: ${featuredArtist}`); // Output: Today's featured artist is: Van Gogh

  // 'artWorkName' is block-scoped and declared inside the 'if' block
  if (true) {
    const artWorkName = "Starry Night"; // Block-scoped constant
    console.log(`Featured artwork: ${artWorkName}`); // Output: Featured artwork: Starry Night
  }

  // Trying to access 'artWorkName' outside the block will throw an error as it's block-scoped
  // Uncommenting the next line will throw a ReferenceError: artWorkName is not defined
  // console.log(artWorkName);  // Error: artWorkName is not accessible outside the 'if' block

  // Attempting to reassign a constant value will throw an error
  // Uncommenting the next line will throw a TypeError: Assignment to constant variable.
  featuredArtist = "Picasso"; // Error: You cannot reassign a constant
}

// Call the function to execute the code
displayArt();
