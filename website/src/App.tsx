import "./App.css";
import MDXProviderWrapper from "./components/MDXProviderWrapper";

function App() {
  return (
    <MDXProviderWrapper>
      <div className="flex flex-col p-10 h-screen w-full justify-center items-center bg-slate-600">
        <h1>Hello World</h1>
      </div>
    </MDXProviderWrapper>
  );
}

export default App;
