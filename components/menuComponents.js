export const drinkComponent = (drink) => {
  return `
    
    <div class="w-full max-w-xs bg-white rounded-lg shadow dark:bg-[#1E3932]">
    <a href="#">
        <img class="p-3 rounded-t-lg"
            src="${drink.image}"
            alt="product image" />
    </a>
    <div class="px-3 pb-3">
        <a href="#">
            <h5 class="text-base font-semibold tracking-tight px-2 text-gray-900 dark:text-white">
                ${drink.drinkName}
            </h5>
        </a>
        <div class="flex items-center justify-between pt-5 px-2">
            <span class="text-xl font-bold text-gray-900 dark:text-white">$${drink.price}</span>
            <a href="#" class="text-white text-sm hover:text-orange-300">Add to cart</a>
        </div>
    </div>
</div>   
    `;
};
