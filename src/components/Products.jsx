import React from 'react'
import Product from './Product'

const Products = () => {

    var products = [
        {
          title: "Arqitel",
          description:
            "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
          live: true,
          case: false,
        },
        {
          title: "Cula",
          description:
            "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
          live: true,
          case: true,
        },
        {
          title: "Layout Land",
          description:
            "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
          live: true,
          case: false,
        },
        {
          title: "TTR",
          description:
            "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
          live: true,
          case: false,
        },
        {
          title: "Arqitel",
          description:
            "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
          live: true,
          case: false,
        },
        {
          title: "Maniv",
          description:
            "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods",
          live: true,
          case: false,
        },
      ];

  return (
    <div>
        {products.map((val, index) => <Product val={val} />)}
    </div>
  )
}

export default Products