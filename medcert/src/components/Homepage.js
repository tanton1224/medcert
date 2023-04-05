import React from "react";
import homeImage from '../assets/pexels-rfstudio-3810792.jpg'

function Homepage() {

  return (
    <>
    <article className="w-full flex flex-col md:flex-row
                        px-8 lg:px-16 xl:px-28 py-12
                        md:space-x-10 space-y-14 md:space-y-0"
    >
      <section className="md:w-3/5">
        <h1 className="text-5xl mb-8">Welcome to MEDCERT ®</h1>
        <p className="text-3xl">
          Our solution provides human-centered technology to assist with facilitating an easy, positive experience to certify your Medicaid module for CMS.
        </p>
      </section>
      <div className="md:w-2/5 flex justify-center" ><img src={homeImage} alt="" /></div>
    </article>
    </>
  )
}

export default Homepage
