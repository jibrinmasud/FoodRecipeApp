export default function Item({ item }) {
  return (
    <div>
      <div>
        <h3>{item.name}</h3>
        <h3>
          {item.amount}
          {item.unit}
        </h3>
      </div>
    </div>
  );
}
