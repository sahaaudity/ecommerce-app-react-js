import { ProductGrid } from "../Product/ProductGrid";
import { FilterSection } from "./FilterSection";
import { LeftPanelHeader } from "./LeftPanelHeader";

export function LeftPanel(){
  const headerTittle = 'Simple ecommerce-App'
  const products = [
    {
      id: 1,
      name: 'Gaming Laptop',
      price: 65000,
      image: 'https://via.placeholder.com/150',
      categories: ['Laptops', 'Gaming'],
    },
    {
      id: 2,
      name: 'Wireless Mouse',
      price: 500,
      image: 'https://via.placeholder.com/150',
      categories: ['Accessories', 'Peripherals'],
    },
    {
      id: 3,
      name: 'Wifi Router',
      price: 1000,
      image: 'https://via.placeholder.com/150',
      categories: ['Accessories', 'Peripherals'],
    },
    {
      id: 4,
      name: 'iPhone',
      price: 260090,
      image: 'https://via.placeholder.com/150',
      categories: ['Accessories', 'Peripherals'],
    },
  ];
  return(
    <div>
        <LeftPanelHeader tittle={headerTittle}/>
        <FilterSection></FilterSection>
        <ProductGrid products={products}></ProductGrid>
    </div>
  );
}