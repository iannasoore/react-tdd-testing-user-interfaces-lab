function App() {
  // NOTE: Replace the bracketed placeholders with your actual information
  const myName = "Ian Nas";
  const imageUrl = "https://wallpaperbat.com/img/1432602-yoriichi-tsugikuni-wallpaper-demon-slayer-yoriichi-wallpaper-demon-slayer.jpg"
  const imageAltText = "A professional headshot of Ian Nas"; // Replace with a description of your image
  const githubUrl = "https://github.com/iannasoore"; // Replace with your actual GitHub username
  const linkedInUrl = "https://linkedin.com/in/yourprofile"; // Replace with your actual LinkedIn profile

  return (
    <div>
      {/* 1. Top-level Heading (H1) - to pass the first test */}
      <h1>Hi, I'm {myName}</h1>

      {/* 2. Image - to pass the image test */}
      <img src={imageUrl} alt={imageAltText} />

      {/* 3. Second-level Heading (H2) - to pass the H2 test */}
      <h2>About Me</h2>

      {/* 4. Biography Paragraph - to pass the paragraph test */}
      <p>
        My name is {myName}, and I am a passionate developer with a knack for
        building clean, efficient, and user-friendly web applications. I enjoy
        learning new technologies and solving complex problems.
      </p>

      {/* 5. Links - to pass the links test */}
      <nav>
        <a href={githubUrl}>GitHub</a>
        <a href={linkedInUrl}>LinkedIn</a>
      </nav>
    </div>
  );
}

export default App;