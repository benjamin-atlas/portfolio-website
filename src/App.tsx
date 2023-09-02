import Nav from "./Nav";
import ScrollWindow from "./ScrollWindow";

// https://bootstrapmade.com/demo/iPortfolio/ for reference
// Also, I like the tailwind docs gradient. Steal it.
// rafce is the shortcut for function components the way you like them.

const App = () => (
  <main className="grid grid-cols-12 h-screen text-white justify-center">
    <Nav></Nav>
    <ScrollWindow></ScrollWindow>
  </main>
);

export default App;
