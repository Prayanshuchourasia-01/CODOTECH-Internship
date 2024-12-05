import React from 'react'

export default function Hero() {
  return (
    <>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="https://cdn.tailwindcss.com" rel="stylesheet" />

    {/* Hero Section */}
    <>&lt;</>
    <section className="text-black body-font my-12 px-14">
      <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
        <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font tracking-wide sm:text-3xl md:text-6xl xl:text-7xl mb-4 font-bold ">
            Invite friends and scale your Choice
          </h1>
          <p className="mb-8 leading-relaxed opacity-50 ">
          Welcome to WatchMe, where fashion meets individuality. Our mission is simple:
          to help you express yourself through the art of clothing.{" "}
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-blue-500 py-2 px-4 focus:outline-none hover:bg-opacity-80 rounded text-sm">
             Get Started
            </button>
          </div>
        </div>
        <div
          id="pattern"
          className="w-32 sm:w-40 lg:max-w-xl lg:w-full md:w-32 xl:w-5/6 bg-contain bg-no-repeat md:ml-40 xl:mr-16"
        >
          <div className="w-full flex gap-3 justify-center ">
            <img
              className="object-cover object-center rounded-xl h-[145px] w-[208px] border-2 p"
              alt="hero"
      
              // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAACRBAMAAABAjiuOAAAAG1BMVEXMzMwAAAB/f38zMzMZGRlmZmaysrKZmZlMTEy3MKaDAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB8ElEQVRoge2VwW/aMBSHX6HEHFspW6/VyKodEYH1Cm2AHpFAGkdHq2iPTItGj2iDqX923/PDWQaT1pnLDr8PxS8kxh/PfrKJAAAAAAAAAAAAAAAAAAAAAHgFte75kENjEE84PA7inwddPk80zuU+TdNOkCi9ioo2h6VJicwbG80u93qYbK0x5iZfrVbfgkSWryE12VVf0ylLzNlej+RJRaczboogiWdKOfuitzrM+PeXzVFTRc/F0aKEWhJ6lEsYSWPLZkoqqvVF0jpK1KKthLlOXV/uf/AVjdWmonsrog9HibbUUZ+54fSWcl/nRbu/1Ncq6rhpm5t3y2APL4777zzQ491mV94pRTdUETXWTjS7fe4Gm7jcvOjpbnO9e9j2CamosE703pK5CBUl1osaHIu1Pk19Qk4k6+UrbhroMSPSNUr4Q+WMfelXRc3JL1EeKCqWpFU39TVBzpdWRclisUgW1n0/sUEeM6bdbGzLpSIpOSm8UrTJsmyQ6ZM8TOTK2e0MF5WMZAJ9SrudoZy6sN2h5rLgwpP9ziXWk0ZKzqe0L+oFiWZW2mho5a7Otf3VDf9dmutD0Sc+KdoHg7yC6FzgX8eDj6K97Q4P+lRFrfgPHf4Jo6fMw98OmyjsNAIAAAAAAAAAAAAAAAAAAAD/Fy/qz1FpTjHvDAAAAABJRU5ErkJggg=="
              src='https://rukminim2.flixcart.com/image/640/640/xif0q/shopsy-t-shirt/w/s/5/l-ks-men-fullsleeve-red-012-kiddy-star-original-imagxcvwhykz2ys8.jpeg?q=60&crop=false'
            />
            <img
              className="object-cover object-center rounded-xl h-[145px] w-[208px] px-6 border-2"
              alt="hero"
             
              src="https://rukminim2.flixcart.com/image/640/640/xif0q/pendant-locket/8/3/u/na-na-stylish-war-eagle-flying-pendant-for-boys-girls-sterling-original-imagtmutwnzrh8vc.jpeg?q=60&crop=false"
            />
          </div>
          <div className="w-full h- flex gap-2 justify-center items-center my-2">
            <img
              className="object-cover object-center rounded-xl h-[145px] w-[208px]"
              alt="hero"
              src="https://rukminim2.flixcart.com/image/440/547/xif0q/shopsy-lipstick/o/g/8/16-non-transfer-lip-color-matte-texture-12hrs-waterproof-true-original-imahfxu629dhyebs.jpeg?q=60&crop=false"
            />
            <img
              className="object-cover object-center rounded-xl h-[145px] w-[208px] border-2 px-6"
              alt="hero"
              src="https://a.media-amazon.com/images/I/71kE75JMKjL._SY879_.jpg"
            />
            <img
              className="object-cover object-center rounded-xl h-[145px] w-[208px]  border-2 "
              alt="hero"
              src="https://rukminim2.flixcart.com/image/440/547/xif0q/shopsy-ethnic-set/4/d/d/xxl-s-firozi-meera-m-navlik-original-imagx488vp3c7yj5.jpeg?q=60&crop=false"
            />
          </div>
          <div className="w-full flex gap-3 justify-center">
            <img
              className="object-cover object-center rounded-xl h-[145px] w-[208px] px-4 border-2"
              alt="hero"
              src="https://a.media-amazon.com/images/I/61xU-68Y4SL._SL1500_.jpg"
            />
            <img
              className="object-cover object-center rounded-xl h-[145px] w-[208px] border-2 px-3"
              alt="hero"
              src="https://a.media-amazon.com/images/I/61jAA1cAEgL._SY879_.jpg"
            />
          </div>
          <div className="w-full flex gap-3 justify-center my-2">
            <img
              className="object-cover object-center rounded-xl h-[145px] w-[208px] border-2 px-4"
              alt="hero"
              src="https://rukminim2.flixcart.com/image/440/454/xif0q/shopsy-artificial-flower/s/a/y/6-fs-green-rose-mc-64-exotica-creations-original-imagvuhbhndcyz3z.jpeg?q=60"
            />
          </div>
        </div>
      </div>
    </section>
  </>
  
  )
}
