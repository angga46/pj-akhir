<template>
    <br>
<section class="py-12 sm:py-16"> 
  <div class="container mx-auto px-4">
    <nav class="flex">
      <ol role="list" class="flex items-center">
        <li class="text-left">
          <div class="-m-1">
            <a href="/" class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Home </a>
          </div>
        </li>

        <li class="text-left">
          <div class="flex items-center">
            <span class="mx-2 text-gray-400">/</span>
            <div class="-m-1">
              <a href="/produk" class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Products </a>
            </div>
          </div>
        </li>

        <li class="text-left">
          <div class="flex items-center">
            <span class="mx-2 text-gray-400">/</span>
            <div class="-m-1">
              <a href="/contact" class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800" aria-current="page">Contact</a>
            </div>
          </div>
        </li>
      </ol>
    </nav>

    <div class="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
      <div class="lg:col-span-3 lg:row-end-1">
        <div class="lg:flex lg:items-start">
          <div class="lg:order-2 lg:ml-5">
            <div class="max-w-xl overflow-hidden rounded-lg">
              <img class="" src="../assets/img/nike1.jfif" alt="" style="width: 400px;"/>
            </div>
          </div>

          <div class="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
            <div class="flex flex-row items-start lg:flex-col">
              <button type="button" class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center">
                <img class="h-full w-full object-cover" src="../assets/img/compass.jpeg" alt="" />
              </button>
              <button type="button" class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
                <img class="h-full w-full object-cover" src="data:image/jpeg;base64,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" alt="" />
              </button>
              <button type="button" class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
                <img class="h-full w-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSUKiWFY4C15kWMORVo8mtlIvXI0OxgWgqcA&usqp=CAU" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:col-span-2 lg:row-span-2 lg:row-end-2">
        <h1 class="sm: text-2xl font-bold text-gray-900 sm:text-3xl">Nike</h1>

        <div class="mt-5 flex items-center">
          <div class="flex items-center">
            <svg class="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
            </svg>
            <svg class="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
            </svg>
            <svg class="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
            </svg>
            <svg class="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
            </svg>
            <svg class="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
            </svg>
          </div>
          <p class="ml-2 text-sm font-medium text-gray-500">1,209 Reviews</p>
        </div>

        <h2 class="mt-8 text-base text-gray-900">Size</h2>
        <div class="mt-3 flex select-none flex-wrap items-center gap-1">
          <label class="">
            <input type="radio" name="type" value="Powder" class="peer sr-only" checked />
            <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">39</p>
          </label>
          <label class="">
            <input type="radio" name="type" value="Whole Bean" class="peer sr-only" />
            <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">40</p>
          </label>
          <label class="">
            <input type="radio" name="type" value="Groud" class="peer sr-only" />
            <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">41</p>
          </label>
          <label class="">
            <input type="radio" name="type" value="Groud" class="peer sr-only" />
            <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">42</p>
          </label>
          <label class="">
            <input type="radio" name="type" value="Groud" class="peer sr-only" />
            <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">43</p>
          </label>
        </div>

        <h2 class="mt-8 text-base text-gray-900">Choose Color</h2>
        <div class="mt-3 flex select-none flex-wrap items-center gap-1">
          <label class="">
            <input type="radio" name="subscription" value="4 Months" class="peer sr-only" />
            <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Black</p>
           
          </label>
          <label class="">
            <input type="radio" name="subscription" value="8 Months" class="peer sr-only" checked />
            <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">White</p>
           
          </label>
          <label class="">
            <input type="radio" name="subscription" value="12 Months" class="peer sr-only" />
            <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Gray</p>
           
          </label>
        </div>
        <div class="pt-6">
                <label for="Quantity">Jumlah : </label>
                <div class="flex items-center gap-1 my-2 border border-black w-[144px] ">
                  <button
                    type="button"
                    class="w-10 h-10 leading-10 text-gray-600 hover:bg-black hover:text-white transition " >
                    &minus;
                  </button>

                  <input
                    type="number"
                    id="Quantity"
                    value="1"
                    class="h-10 w-16 rounded bg-slate-50 border border-none  text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none" />

                  <button
                    type="button"
                    class="w-10 h-10 leading-10 hover:bg-black hover:text-white  transition " >
                    &plus;
                  </button>
                </div>
              </div>
        <div class="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
          <div class="flex items-end">
            <h1 class="text-3xl font-bold">Rp.500.000</h1>
          </div>
        <router-link to="/cart">
          <button type="button" class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" class="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Add to cart
          </button>
        </router-link>
        </div>

        <ul class="mt-8 space-y-2">
          <li class="flex items-center text-left text-sm font-medium text-gray-600">
            <svg class="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" class=""></path>
            </svg>
            Folow ig nggafbn_ dapat diskon
          </li>

          <li class="flex items-center text-left text-sm font-medium text-gray-600">
            <svg class="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" class=""></path>
            </svg>
            Cancel Anytime
          </li>
        </ul>
      </div>

      <div class="lg:col-span-3">
        <div class="border-b border-gray-300">
          <nav class="flex gap-4">
            <a href="#" title="" class="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"> Description </a>

            <a href="#" title="" class="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600">
              Reviews
              <span class="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100"> 1,209 </span>
            </a>
          </nav>
        </div>

        <div class="mt-8 flow-root sm:mt-12">
          <h1 class="text-3xl font-bold">Delivered To Your Door</h1>
          <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium nesciunt fuga.</p>
          <h1 class="mt-8 text-3xl font-bold">From the Fine Farms of Brazil</h1>
          <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.</p>
          <p class="mt-4">Amet consectetur adipisicing elit. Optio numquam enim facere. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore rerum nostrum eius facere, ad neque.</p>
        </div>
      </div>
    </div>
  </div>
</section>

</template>

<script>

</script>