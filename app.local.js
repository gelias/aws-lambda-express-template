const app = require("./app");
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App is running with environment ${process.env.NODE_ENV}.`);
  console.log(`App is listening on port ${port}.`);
});
