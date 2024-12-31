import {
  EXPLORE_OUR_PRODUCTS,
  PRODUCT_CARD,
  TOP_SELLING_PRODUCTS,
} from "@muc/constants";
import { useCategory } from "@muc/context";
import { AppLayout } from "@muc/layout";
import { useEffect } from "react";
import { FilterProductList } from "../../components/component";
import { useLocation } from "react-router-dom";

const FilterByProductsContainer = () => {
  const { selectedCategory } = useCategory();
  const { state } = useLocation();
  const categoryMatchByLink = state?.filteredProducts;

  const allData = [
    ...PRODUCT_CARD,
    ...TOP_SELLING_PRODUCTS,
    ...EXPLORE_OUR_PRODUCTS,
  ];

  const filteredProducts = allData?.filter(
    (product) =>
      product?.category.toLowerCase() === selectedCategory?.toLowerCase()
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppLayout>
      <FilterProductList filterProduct={filteredProducts} filterByLink={categoryMatchByLink} />
    </AppLayout>
  );
};

export default FilterByProductsContainer;
