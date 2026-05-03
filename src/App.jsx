import LanguageCard from "./components/LanguageCard";
import languages from "./data/languages.js";

function App() {
  return ((<>
  {
    languages.map(language => {
      return (<LanguageCard
      key={language.id}
      title={language.title}
      description={language.description}
      />
    )})
  }
  </>));
    
}
export default App;
