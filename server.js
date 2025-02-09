const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to GridPlay!');
});

// ...additional routes and middleware...

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
