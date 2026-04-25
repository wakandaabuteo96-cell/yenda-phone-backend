const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({"status":"Yenda Backend Live"});
});

app.get('/phones', (req, res) => {
  res.json([
    {
      id: 1,
      brand: "Samsung",
      model: "Galaxy S23",
      price: 12999,
      condition: "Excellent",
      storage: "256GB",
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400"
    },
    {
      id: 2,
      brand: "iPhone",
      model: "13 Pro",
      price: 15999,
      condition: "Good", 
      storage: "128GB",
      image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=400"
    },
    {
      id: 3,
      brand: "Huawei",
      model: "P40 Pro",
      price: 8999,
      condition: "Fair",
      storage: "256GB", 
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400"
    }
  ]);
});

app.listen(port, () => {
  console.log(`Yenda API running on ${port}`);
});
