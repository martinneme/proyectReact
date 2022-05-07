import Item from "./Item"

export default function ItemList({response}) {


  return (
    <div className="Products">
      {response.map((re) => {
        return <Item item={re} key={re.id} />;
      })}
     
    </div>
  );
}
