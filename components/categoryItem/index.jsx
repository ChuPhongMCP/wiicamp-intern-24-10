import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

function CategoryItem(props) {
  const { category } = props;
  return (
    <Link
      href="/"
      className="group flex flex-col min-w-[10.625rem] min-h-[9.0625rem] gap[1rem] px-[3.5rem] py-[1.5rem] hover:bg-secondary-2 transition-colors ease-in-out duration-300 items-center justify-center rounded-[0.25rem] border-[1px] border-solid border-black border-opacity-30"
    >
      <div className="flex items-center justify-center min-w-[3.5rem] min-h-[3.5rem]">{category.imgSrc}</div>

      <h4 className="text-text-2 group-hover:text-text-1 transition-colors ease-in-out duration-300 font-poppins text-[1rem] font-[400] leading-[1.4rem]">
        {category.name}
      </h4>
    </Link>
  );
}

export default CategoryItem;

CategoryItem.propTypes = {
  category: PropTypes.instanceOf(Object).isRequired,
};
