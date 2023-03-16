function DessertsList(props)
{
  const Desserts = props.data
    .filter((dessert) =>
    {
      return dessert.calories < 500
    })
    .sort((a, b) =>
    {
      return a.calories - b.calories
    })
    .map((dessert) =>
    {
      return <li>{dessert.name} - {dessert.calories} cal</li>
    })
  
  return <ul>{Desserts}</ul>
}
  
  export default DessertsList;
  