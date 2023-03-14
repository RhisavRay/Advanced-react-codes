const dessert_list = [
  {
    id: "1",
    title: "Tiramisu",
    description: "The best Tiramisu in town",
    image: "https://picsum.photos/200/300/?random",
    price: "$5.00"
  },
  {
    id: "1",
    title: "Lemon Ice Cream",
    description: "Mind blowing taste!",
    image: "https://picsum.photos/200/300/?random",
    price: "$4.50"
  },
  {
    id: "1",
    title: "Chocolate Mouse",
    description: "Unexplored flavour",
    image: "https://picsum.photos/200/300/?random",
    price: "$6.00"
  }
];

const top_desserts = dessert_list.map(dessert => 
  {
    return {
      content: `${dessert.title} - ${dessert.description}`,
      price: dessert.price
    }
  })

function App()
{
  console.log(top_desserts)

  return <h1>Explore the console output</h1>
}

export default App;
