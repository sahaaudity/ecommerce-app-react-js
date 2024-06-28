
// import { getProducts } from '../../api/services';
import { ProductGrid } from '../Product';
import { FilterSection } from './FilterSection';
import { LeftPanelHeader } from './LeftPanelHeader';

export function LeftPanel() {
  const headerTitle = 'Simple ecommerce-App';
  // const products = getProducts();

  return (
    <div>
      <LeftPanelHeader title={headerTitle} />
      <FilterSection />
      <ProductGrid />
    </div>
  );
}
