import "./App.css";

function App() {
  const openFormInNewTab = (url: string) => {
    const form = document.createElement("form");
    form.method = "POST";
    form.action = url;
    form.target = "_blank";

    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "data";
    input.value = "your-value";

    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  };

  const callApi = () => {
    fetch(
      "https://api.eazy-mock.teqn.asia/mock/e4ca377d-717d-42ee-a278-7774f3a07cd9/262/url"
    )
      .then((response) => response.json())
      .then((data) => openFormInNewTab(data.url))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <button onClick={() => callApi()}>Open Form</button>
    </div>
  );
}

export default App;
