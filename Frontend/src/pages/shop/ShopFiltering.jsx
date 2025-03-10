import React from 'react'
const ShopFiltering = ({filters,filtersState,setFiltersState,clearFilters}) => {
  return (
    <div className='!space-y-5 !flex-shrink-0 !ml-1.5'>
        <h3>Filters</h3>
        <div className='!flex !flex-col s!pace-y-10'>
            <h4 className='!font-medium !text-lg'>Category</h4>
            <hr/>
            {
                filters.categories.map(category=>(
                    <label key={category} className='!capitalize !cursor-pointer'>
                        <input type='radio' name="category" id="category" value={category} checked={filtersState.category===category}
                        onChange={(e)=>setFiltersState({...filtersState,category:e.target.value})} />
                        <span className='!ml-3'>{category}</span>
                    </label>
                ))
            }
        </div>
        {/*colours*/}
        <div className='!flex !flex-col !space-y-2'>
            <h4 className='!font-medium !text-lg'>Colours</h4>
            <hr/>
            {
                filters.colors.map(color=>(
                    <label key={color} className='!capitalize !cursor-pointer'>
                        <input type='radio' name="color" id="color" value={color} checked={filtersState.color===color}
                        onChange={(e)=>setFiltersState({...filtersState,color:e.target.value})} />
                        <span className='!ml-3'>{color}</span>
                    </label>
                ))
            }
        </div>
        {/*pricing*/}
        <div className='!flex !flex-col !space-y-2'>
            <h4 className='!font-medium !text-lg'>price range</h4>
            <hr/>
            {
                filters.priceRanges.map(range=>(
                    <label key={range.label} className='!capitalize !cursor-pointer'>
                        <input type='radio' name="priceRange" id="priceRange" value={`${range.min}-${range.max}`} checked={filtersState.priceRange===`${range.min}-${range.max}`}
                        onChange={(e)=>setFiltersState({...filtersState,priceRange:e.target.value})} />
                        <span className='!ml-3'>{range.label}</span>
                    </label>
                ))
            }
        </div>
        {/*clear filters*/}
        <button className='!bg-red-500 !py-4 !px-4 !text-white ronded' onClick={clearFilters}>clear all filters</button>
    </div>
  )
}
export default ShopFiltering