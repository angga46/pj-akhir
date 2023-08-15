<template>
    <br>
    <br>
    <br>
    <!-- Header -->
    <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Dancing+Script&display=swap" rel="stylesheet">
    <title></title>
</head>
<body class="bg-gray-200 leanding-normal tracking-wide">

    <h1 class="mx-12 my-10 text-gray-700 text-5xl lg:text-6xl text-center" style="font-family: 'Dancing Script', cursive, sans-serif;">
        Wellcome
    </h1>

    <div class="container mx-auto w-full overflow-hidden relative">
        <div class="w-full h-full absolute">
            <div class="w-1/4 h-full absolute z-50 left-0" style="background: linear-gradient(to right, #edf2f7 0%, rgba(255, 255, 255, 0) 100%);"></div>
            <div class="w-1/4 h-full absolute z-50 right-0" style="background: linear-gradient(to left, #edf2f7 0%, rgba(255, 255, 255, 0) 100%);"></div>
        </div>

        <div class="carousel-items flex items-center justify-center" style="width: fit-content; animation: carouselAnim 10s infinite alternate linear;">

            <div class="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg" style="width: 270px;">
                <svg class="fill-current text-teal-400 hover:text-teal-500 cursor-pointer h-12 w-12 absolute top-0 right-0 mt-2 -mr-5" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11.5 0C17.847 0 23 5.153 23 11.5S17.847 23 11.5 23 0 17.847 0 11.5 5.153 0 11.5 0zm0 1C17.295 1 22 5.705 22 11.5S17.295 22 11.5 22 1 17.295 1 11.5 5.705 1 11.5 1zm.5 10h6v1h-6v6h-1v-6H5v-1h6V5h1v6z"/></svg>
                <!-- <button class="absolute top-0 right-0 bg-teal-400 rounded-full px-1 py-0 font-bold text-lg">+</button> -->
                <span class="text-teal-400 font-bold text-xl mb-3">Compass Retrograde</span>
                <img class="h-16 w-16 rounded-full shadow-2xl" src="../assets/img/compass.jpeg" alt="Img">
                <p class="mt-3 text-gray-600 text-center">"Sepatu Compass bestseller banyak di cari oleh konsumen dan ketceee"</p>
                <button class="mt-4 mb-2 bg-teal-400 rounded-full px-12 py-1 text-gray-100 font-semibold hover:bg-teal-300 focus:outline-none">Detail</button>
            </div>

            <div class="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg" style="width: 270px;">
                <svg class="fill-current text-teal-400 hover:text-teal-500 cursor-pointer h-12 w-12 absolute top-0 right-0 mt-2 -mr-5" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11.5 0C17.847 0 23 5.153 23 11.5S17.847 23 11.5 23 0 17.847 0 11.5 5.153 0 11.5 0zm0 1C17.295 1 22 5.705 22 11.5S17.295 22 11.5 22 1 17.295 1 11.5 5.705 1 11.5 1zm.5 10h6v1h-6v6h-1v-6H5v-1h6V5h1v6z"/></svg>
                <!-- <button class="absolute top-0 right-0 bg-teal-400 rounded-full px-1 py-0 font-bold text-lg">+</button> -->
                <p class="text-teal-400 font-bold text-xl mb-3">Compass x Pablo</p>
                <img class="h-16 w-16 rounded-full shadow-2xl" src="../assets/img/compass2.jpeg" alt="Img">
                <p class="mt-3 text-gray-600 text-center">"kolaborasi Pablo dan Compass menampilkan desain sepatu dgn motif bintang-bintang"</p>
                <button class="mt-4 mb-2 bg-teal-400 rounded-full px-12 py-1 text-gray-100 font-semibold hover:bg-teal-300 focus:outline-none">Detail</button>
            </div>

            <div class="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg" style="width: 270px;">
                <svg class="fill-current text-teal-400 hover:text-teal-500 cursor-pointer h-12 w-12 absolute top-0 right-0 mt-2 -mr-5" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11.5 0C17.847 0 23 5.153 23 11.5S17.847 23 11.5 23 0 17.847 0 11.5 5.153 0 11.5 0zm0 1C17.295 1 22 5.705 22 11.5S17.295 22 11.5 22 1 17.295 1 11.5 5.705 1 11.5 1zm.5 10h6v1h-6v6h-1v-6H5v-1h6V5h1v6z"/></svg>
                <!-- <button class="absolute top-0 right-0 bg-teal-400 rounded-full px-1 py-0 font-bold text-lg">+</button> -->
                <p class="text-teal-400 font-bold text-xl mb-3">Compass Velocity</p>
                <img class="h-16 w-16 rounded-full shadow-2xl" src="../assets/img/compass3.jpeg" alt="Img">
                <p class="mt-3 text-gray-600 text-center">"Sneakers ini di-tweak lebih relevan dan up-to-date agar bisa nyamain style zaman sekarang"</p>
                <button class="mt-4 mb-2 bg-teal-400 rounded-full px-12 py-1 text-gray-100 font-semibold hover:bg-teal-300 focus:outline-none">Detail</button>
            </div>

            <div class="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg" style="width: 270px;">
                <svg class="fill-current text-teal-400 hover:text-teal-500 cursor-pointer h-12 w-12 absolute top-0 right-0 mt-2 -mr-5" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11.5 0C17.847 0 23 5.153 23 11.5S17.847 23 11.5 23 0 17.847 0 11.5 5.153 0 11.5 0zm0 1C17.295 1 22 5.705 22 11.5S17.295 22 11.5 22 1 17.295 1 11.5 5.705 1 11.5 1zm.5 10h6v1h-6v6h-1v-6H5v-1h6V5h1v6z"/></svg>
                <!-- <button class="absolute top-0 right-0 bg-teal-400 rounded-full px-1 py-0 font-bold text-lg">+</button> -->
                <p class="text-teal-400 font-bold text-xl mb-3">Compass Linen</p>
                <img class="h-16 w-16 rounded-full shadow-2xl" src="../assets/img/compass4.jpeg" alt="Img">
                <p class="mt-3 text-gray-600 text-center">"Sneakers ini hadir variasi low dan top dengan upper berbahan linen serta menampilkan siluet"</p>
                <button class="mt-4 mb-2 bg-teal-400 rounded-full px-12 py-1 text-gray-100 font-semibold hover:bg-teal-300 focus:outline-none">Detail</button>
            </div>

            <div class="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg" style="width: 270px;">
                <svg class="fill-current text-teal-400 hover:text-teal-500 cursor-pointer h-12 w-12 absolute top-0 right-0 mt-2 -mr-5" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11.5 0C17.847 0 23 5.153 23 11.5S17.847 23 11.5 23 0 17.847 0 11.5 5.153 0 11.5 0zm0 1C17.295 1 22 5.705 22 11.5S17.295 22 11.5 22 1 17.295 1 11.5 5.705 1 11.5 1zm.5 10h6v1h-6v6h-1v-6H5v-1h6V5h1v6z"/></svg>
                <!-- <button class="absolute top-0 right-0 bg-teal-400 rounded-full px-1 py-0 font-bold text-lg">+</button> -->
                <p class="text-teal-400 font-bold text-xl mb-3">Compass High</p>
                <img class="h-16 w-16 rounded-full shadow-2xl" src="../assets/img/compass6.jpeg" alt="Img">
                <p class="mt-3 text-gray-600 text-center">"Sneakers ini hadir variasi low dan top dengan bahan yang super nyaman digunakan"</p>
                <button class="mt-4 mb-2 bg-teal-400 rounded-full px-12 py-1 text-gray-100 font-semibold hover:bg-teal-300 focus:outline-none">Detail</button>
            </div>
            
            <div class="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg" style="width: 270px;">
                <svg class="fill-current text-teal-400 hover:text-teal-500 cursor-pointer h-12 w-12 absolute top-0 right-0 mt-2 -mr-5" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11.5 0C17.847 0 23 5.153 23 11.5S17.847 23 11.5 23 0 17.847 0 11.5 5.153 0 11.5 0zm0 1C17.295 1 22 5.705 22 11.5S17.295 22 11.5 22 1 17.295 1 11.5 5.705 1 11.5 1zm.5 10h6v1h-6v6h-1v-6H5v-1h6V5h1v6z"/></svg>
                <!-- <button class="absolute top-0 right-0 bg-teal-400 rounded-full px-1 py-0 font-bold text-lg">+</button> -->
                <p class="text-teal-400 font-bold text-xl mb-3">Compass Slip On</p>
                <img class="h-16 w-16 rounded-full shadow-2xl" src="../assets/img/compass7.jpeg" alt="Img">
                <p class="mt-3 text-gray-600 text-center">"Sepatu ini hadir juga dalam variasi slip on dengan warna sangat cocok digunakan pelajar"</p>
                <button class="mt-4 mb-2 bg-teal-400 rounded-full px-12 py-1 text-gray-100 font-semibold hover:bg-teal-300 focus:outline-none">Detail</button>
            </div>

            <div class="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg" style="width: 270px;">
                <svg class="fill-current text-teal-400 hover:text-teal-500 cursor-pointer h-12 w-12 absolute top-0 right-0 mt-2 -mr-5" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11.5 0C17.847 0 23 5.153 23 11.5S17.847 23 11.5 23 0 17.847 0 11.5 5.153 0 11.5 0zm0 1C17.295 1 22 5.705 22 11.5S17.295 22 11.5 22 1 17.295 1 11.5 5.705 1 11.5 1zm.5 10h6v1h-6v6h-1v-6H5v-1h6V5h1v6z"/></svg>
                <!-- <button class="absolute top-0 right-0 bg-teal-400 rounded-full px-1 py-0 font-bold text-lg">+</button> -->
                <p class="text-teal-400 font-bold text-xl mb-3">Compass Retrograde</p>
                <img class="h-16 w-16 rounded-full shadow-2xl" src="../assets/img/compass.jpeg" alt="Img">
                <p class="mt-3 text-gray-600 text-center">"Sepatu Compass bestseller banyak di cari oleh konsumen dan ketceee"</p>
                <button class="mt-4 mb-2 bg-teal-400 rounded-full px-12 py-1 text-gray-100 font-semibold hover:bg-teal-300 focus:outline-none">Detail</button>
            </div>

            <div class="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg" style="width: 270px;">
                <svg class="fill-current text-teal-400 hover:text-teal-500 cursor-pointer h-12 w-12 absolute top-0 right-0 mt-2 -mr-5" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11.5 0C17.847 0 23 5.153 23 11.5S17.847 23 11.5 23 0 17.847 0 11.5 5.153 0 11.5 0zm0 1C17.295 1 22 5.705 22 11.5S17.295 22 11.5 22 1 17.295 1 11.5 5.705 1 11.5 1zm.5 10h6v1h-6v6h-1v-6H5v-1h6V5h1v6z"/></svg>
                <!-- <button class="absolute top-0 right-0 bg-teal-400 rounded-full px-1 py-0 font-bold text-lg">+</button> -->
                <p class="text-teal-400 font-bold text-xl mb-3">Compass x Pablo</p>
                <img class="h-16 w-16 rounded-full shadow-2xl" src="../assets/img/compass2.jpeg" alt="Img">
                <p class="mt-3 text-gray-600 text-center">"kolaborasi Pablo dan Compass menampilkan desain sepatu dgn motif bintang-bintang"</p>
                <button class="mt-4 mb-2 bg-teal-400 rounded-full px-12 py-1 text-gray-100 font-semibold hover:bg-teal-300 focus:outline-none">Detail</button>
            </div>

            
        </div>

    </div>
    
</body>
</html>
<br>
<!-- Produk -->
<center>
    <h1
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
     PRODUK KAMI
    </h1>
  </center>
 
    <div class="grid grid-cols-3 gap-8 ml-12">
    <div class="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
  <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
    <img class="peer absolute top-0 right-0 h-full w-full object-cover" src="../assets/img/compass.jpeg" alt="product image" />
    <svg class="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>
  </a>

  <div class="mt-4 px-5 pb-5">
    
    <a href="#">
        
      <h5 class="text-xl tracking-tight text-slate-900">Compass Retrogade</h5>
    </a>
    <div class="mt-2 mb-5 flex items-center justify-between">
      <p>
        <span class="text-3xl font-bold text-slate-900">Rp.500.000</span>
        <span class="text-sm text-slate-900 line-through">Rp.2.000.000</span>
      </p>
    </div>
    <a href="#" class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      Add to cart</a
    >
  </div>
</div>
<div class="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
  <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
    <img class="peer absolute top-0 right-0 h-full w-full object-cover" src="../assets/img/compass2.jpeg" alt="product image" />
    <svg class="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>
  </a>
  <div class="mt-4 px-5 pb-5">
    <a href="#">
      <h5 class="text-xl tracking-tight text-slate-900">Compass X Pablo</h5>
    </a>
    <div class="mt-2 mb-5 flex items-center justify-between">
      <p>
        <span class="text-3xl font-bold text-slate-900">Rp.1.500.000</span>
        <span class="text-sm text-slate-900 line-through">Rp.1.800.000</span>
      </p>
    </div>
    <a href="#" class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      Add to cart</a
    >
  </div>
</div>
<div class="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
  <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
    <img class="peer absolute top-0 right-0 h-full w-full object-cover" src="../assets/img/compass3.jpeg" alt="product image" />
    <svg class="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>
  </a>
  <div class="mt-4 px-5 pb-5">
    <a href="#">
      <h5 class="text-xl tracking-tight text-slate-900">Compass Velocity</h5>
    </a>
    <div class="mt-2 mb-5 flex items-center justify-between">
      <p>
        <span class="text-3xl font-bold text-slate-900">Rp.870.000</span>
        <span class="text-sm text-slate-900 line-through">Rp.1.000.000</span>
      </p>
    </div>
    <a href="#" class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      Add to cart</a
    >
  </div>
</div>

<div class="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
  <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
    <img class="peer absolute top-0 right-0 h-full w-full object-cover" src="../assets/img/compass4.jpeg" alt="product image" />
    <svg class="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>
  </a>
  <div class="mt-4 px-5 pb-5">
    <a href="#">
      <h5 class="text-xl tracking-tight text-slate-900">Compass Linen</h5>
    </a>
    <div class="mt-2 mb-5 flex items-center justify-between">
      <p>
        <span class="text-3xl font-bold text-slate-900">Rp.538.000</span>
        <span class="text-sm text-slate-900 line-through">Rp.800.000</span>
      </p>
    </div>
    <a href="#" class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      Add to cart</a
    >
  </div>
</div>
<div class="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
  <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
    <img class="peer absolute top-0 right-0 h-full w-full object-cover" src="../assets/img/compass6.jpeg" alt="product image" />
    <svg class="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>
  </a>
  <div class="mt-4 px-5 pb-5">
    <a href="#">
      <h5 class="text-xl tracking-tight text-slate-900">Compass Retrograde High </h5>
    </a>
    <div class="mt-2 mb-5 flex items-center justify-between">
      <p>
        <span class="text-3xl font-bold text-slate-900">Rp.580.000</span>
        <span class="text-sm text-slate-900 line-through">Rp.600.000</span>
      </p>
    </div>
    <a href="#" class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      Add to cart</a
    >
  </div>
</div>
<div class="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
  <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
    <img class="peer absolute top-0 right-0 h-full w-full object-cover" src="../assets/img/compass7.jpeg" alt="product image" />
    <svg class="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>
  </a>
  <div class="mt-4 px-5 pb-5">
    <a href="#">
      <h5 class="text-xl tracking-tight text-slate-900">Compass Retrograde Slip On</h5>
    </a>
    <div class="mt-2 mb-5 flex items-center justify-between">
      <p>
        <span class="text-3xl font-bold text-slate-900">Rp.450.000</span>
        <span class="text-sm text-slate-900 line-through">Rp.700.000</span>
      </p>
    </div>
    <a href="#" class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      Add to cart</a
    >
  </div>
</div>
</div>

<!-- Footer -->
<footer class="relative mt-20 bg-gray-900 px-4 pt-20">
  <div class="absolute -top-10 left-1/2 h-16 w-16 -translate-x-1/2 rounded-xl border-4 border-sky-500 bg-white p-2"><img class="h-full object-contain" src="../assets/img/logo1.png" alt="" /></div>
  <nav aria-label="Footer Navigation" class="mx-auto mb-10 flex max-w-lg flex-col gap-10 text-center sm:flex-row sm:text-left">
    <a href="#" class="font-medium text-white">Demo</a>
    <a href="#" class="font-medium text-white">Support</a>
    <a href="#" class="font-medium text-white">Privacy Policy</a>
    <a href="#" class="font-medium text-white">Terms & Conditions</a>
  </nav>
  <p class="py-10 text-center text-gray-300">© Copyright 2023 | Diimzyy</p>
</footer>


</template>

<style>

@keyframes carouselAnim {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(calc(-100% + (6*300px)));
  }
}

@media only screen and (max-width: 768px) {
  .container .carousel-items {
    animation: carouselAnim 60s infinite alternate linear;
  }
  @keyframes carouselAnim {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(calc(-100% + (5*300px)));
    }
  }
}

.carousel-focus:hover {
  transition: all 0.8s;
  transform: scale(1.1);
}
</style>