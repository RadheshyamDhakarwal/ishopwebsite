import React from 'react';

const StoreProduct = (props) => {
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



        <div className="product-card group relative overflow-hidden">
      <Link to={`/product/${product.id}`} className="block">
        {/* Image Container */}
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
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
            {!product.inStock && (
              <Badge variant="secondary">
                Out of Stock
              </Badge>
            )}
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
            {product.category.replace('-', ' ')}
          </p>

          {/* Name */}
          <h3 className="font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(product.rating)
                      ? 'fill-accent text-accent'
                      : 'text-muted-foreground'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({product.reviews})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="price-text text-lg font-semibold">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <Button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="w-full btn-primary"
            size="sm"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </div>
      </Link>
    </div>

        // <>
        //     <div className=' shadow-lg  py-5 sm:flex items-center justify-between gap-4  sm:flex-col'>
        //         <img src={props.img} className='px-10' width={"200px"} alt="" />
        //         <h3 className=' text-center'>{toTitleCase(props.name)}</h3>
        //         <h3 className=' text-center'>⭐⭐⭐⭐</h3>
        //         <h1 className='text-red-600  text-center'>$499 <del>$599</del></h1>
        //     </div>

        // </>

    );
}

export default StoreProduct;

