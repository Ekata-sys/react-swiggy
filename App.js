import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <h1 className="heading" tabIndex="5">
      hello from react element
    </h1>
);

//component composition

const HeadingComponent = () => (
    <div id="container">
    <Title/>
    <h1 className="heading">Hello from functional Component</h1>
    </div>
);

 

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(<HeadingComponent/>);


