const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/task');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/tasks', taskRoutes);

app.use('/', (req, res) => {
  res.send('Hello Express!');
});

app.listen(5000, () => console.log('Server running: 5000'));
