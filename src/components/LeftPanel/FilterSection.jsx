export function FilterSection() {

  const categories = [
    'Laptop',
    'Gaming',
    'Accessories',
    'Peripherals'
  ];

  return (
    <div>
      <div>
        {categories.map((category) => (
          <button key={category}>{category}</button>
        ))}

      </div>
      {/* <div >
        <button>Laptops</button>
        <button>Gaming</button>
        <button>Accessories</button>
        <button>Peripherals</button>
        
            </div> */}
      <div>
        <button>Clear Filters</button>
      </div>
    </div>

  );

}