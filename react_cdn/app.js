


const heading1 = React.createElement("h1",{id: "ganesh"},"<3");
const heading123 = React.createElement("h1",{id: "ganeshPrasadR"},"<3<3<3");
const bundle = React.createElement("div",{id:"container"},[heading1,heading123])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(bundle);