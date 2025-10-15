// src/App.tsx
import "./App.css";
import UploadCard from "./components/UploaderCard";

function App() {
  return (
    <>
      <h1>Скъпи гости!</h1>
      <p>
        Ще се радваме ако можете да ни помогнете като снимате по време на нашата
        сватба и качите снимките си :)
      </p>

      <UploadCard />
    </>
  );
}

export default App;
