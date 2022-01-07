import dotenv from "dotenv-safe";
dotenv.config();
if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => console.log("Module disposed. annem "));
}

// Hot Module Replacement
console.log("Hello World!");

