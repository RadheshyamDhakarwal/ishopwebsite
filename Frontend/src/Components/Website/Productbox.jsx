import React from 'react';

const Productbox = (props) => {
  function toTitleCase(str) {
    // Split the input string into words
    const words = str.split(' ');

    // Iterate through each word and capitalize the first letter
    const titleCaseWords = words.map(word => {
      if (word.length === 0) {
        return '';
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    });

    // Join the title-cased words back into a single string
    const titleCaseString = titleCaseWords.join(' ');

    return titleCaseString;
  }
  return (

    <>
      <div key={index} className="product-card group relative overflow-hidden">
        {/* <Link to={`/product/${prodt.id}`} className="block"> */}
        {/* Image Container */}
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={imgBaseUrl + "/" + prodt.image}
            alt={prodt.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {discountPercentage > 0 && (
              <Badge className="bg-destructive text-destructive-foreground">
                -{discountPercentage}%
              </Badge>
            )}
            {/* {!prodt.inStock && (
                                                                     <Badge variant="secondary">
                                                                         Out of Stock
                                                                     </Badge>
                                                                 )} */}
          </div>

          {/* Wishlist Button */}
          <Button
            size="sm"
            variant="ghost"
            className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // Add to wishlist logic here
            }}
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          {/* Category */}
          <p className="text-xs uppercase tracking-wide text-muted-foreground font-medium">
            {prodt.category}
          </p>

          {/* Name */}
          <h3 className="font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {prodt.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${i < Math.floor(prodt.rating)
                    ? 'fill-accent text-accent'
                    : 'text-muted-foreground'
                    }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              {/* ({prodt.reviews}) */}
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="price-text text-lg font-semibold">
              ${prodt.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${prodt.originalPrice}
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <Button
            onClick={() => dispatch(addTocart({ pId: prodt._id }))}
            // disabled={!product.inStock}
            className="w-full rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-3 flex items-center justify-center transition-all duration-300 shadow-md"
            size="sm"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {/* {product.inStock ? 'Add to Cart' : 'Out of Stock'} */}
            Add to Cart
          </Button>
        </div>
        {/* </Link> */}
      </div>


      {/* <div key={index} className=' shadow-lg truncate  relative group sm:flex lg:justify-between gap-2 py-8 sm:flex-col sm:items-center'   >

        <div className='w-[200px]' >
          <img src={imgBaseUrl + "/" + prodt.image} className='px-10' alt="" />
        </div>
        <h3 className=' text-center'>{prodt.name}</h3>
        <h3 className=' text-center'>⭐⭐⭐⭐</h3>
        <h1 className='text-red-600  text-center'>${prodt.final} <del>${prodt.price}</del></h1>
        <Link to={`/Store/product/${prodt.slug}`}>
          <div className=' absolute top-[100%]  left-[55px] group-hover:top-[70%]   duration-300  left-130px'>
            <button type="button" className="text-white  bg-purple-700 hover:bg-purple-800 focus:outline-none  font-medium rounded-full text-sm px-5 py-2.5  mb-2 dark:bg-purple-400 dark:hover:bg-purple-700 dark:focus:ring-purple-700 ">
              Buy now
            </button>
          </div>
        </Link>
        <div className='absolute hidden group-hover:block bg-[#1fc0a0] top-[0%] right-[5%] 
                                          rounded-full    duration-300 left-130px
                                        '>
          <button onClick={() => dispatch(addTocart({ pId: prodt._id }))} className='p-2 rounded-full  hover:bg-blue-600'>
            <FaCartPlus />
          </button>
        </div>

        <div className='absolute top-[5%] rotate-[-35deg]  left-[0%]'>
          <button className='bg-red-600 px-1 text-white' >
            {prodt.discount}% OFF
          </button>
        </div>
      </div> */}

    </>

  );
}

export default Productbox;

