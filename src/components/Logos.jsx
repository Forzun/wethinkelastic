import React, { useState } from 'react'

function Logos() {

    const [logo, setlogo] = useState([ 
        "https://wethinkelastic.com/assets/images/17c7455d574fc6222d226.svg",
        "https://wethinkelastic.com/assets/images/27275550faa69b382a7d9.svg",
        "https://wethinkelastic.com/assets/images/36984a1f5516144b66b9f.svg",
        "https://wethinkelastic.com/assets/images/4de000aa0c2fcb4105f0b.svg", 
        "https://wethinkelastic.com/assets/images/5f9435b780f885130afd4.svg",
        "https://wethinkelastic.com/assets/images/6ab6b3724d98d20326313.svg",
        "https://wethinkelastic.com/assets/images/7317ec5c8943977044c6d.svg",
        "https://wethinkelastic.com/assets/images/83862fc8dc3642ac61cbe.svg",
        "https://wethinkelastic.com/assets/images/96ed762b4556f90f0f409.svg",
        "https://wethinkelastic.com/assets/images/10c9b9eb661788ed09261f.svg", 
        "https://wethinkelastic.com/assets/images/11dc1bdfff517735151c01.svg",
        "https://wethinkelastic.com/assets/images/12875d4d9e8bb95bfa429a.svg",
        "https://wethinkelastic.com/assets/images/139a5fddbe9f84e22e2dd7.svg",
        "https://wethinkelastic.com/assets/images/14b852e3169d4ace074249.svg",
        "https://wethinkelastic.com/assets/images/15976b2825c9b04f87d928.svg",
        "https://wethinkelastic.com/assets/images/1658775c156cc739e23059.svg",
        "https://wethinkelastic.com/assets/images/173a9027e7fa2afac94171.svg",
        "https://wethinkelastic.com/assets/images/18a783ec97b3e216399666.svg",
        "https://wethinkelastic.com/assets/images/192319579aa9cc87bfd74d.svg", 
        "https://wethinkelastic.com/assets/images/20227b1841ccf0ae23f174.svg", 
        "https://wethinkelastic.com/assets/images/216e8aebf831585056fc05.svg", 
        "https://wethinkelastic.com/assets/images/225440519d2a88e6f14a9e.svg", 
        "https://wethinkelastic.com/assets/images/237d8f383ddfdb06016944.svg",
        "https://wethinkelastic.com/assets/images/24cb09324aece5d4ab7095.svg",
    ])

  return (
    <div className='w-full h-[210%] bg-[#151414] p-36 '>
        <div className='logo flex flex-wrap h-full w-full gap-36 justify-center '>
            {logo.map((item , index ) => (
                <img key={item} className='w-[10vw] h-fit ' src={item} />
            ))}
        </div>
    </div>
  )
}

export default Logos