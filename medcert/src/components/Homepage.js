import React from "react";


function Homepage() {

  return (
    <>
    <article className="w-full flex px-32 py-12 gap-6">
      <section className="w-3/5">
        <h1 className="text-4xl mb-4">Welcome to MEDCERT ®</h1>
        <p className="text-2xl">
          Our solution provides human-centered technology to assist with facilitating an easy, positive experience to certify your Medicaid module for CMS.
        </p>
      </section>
      <div className="w-2/5 flex justify-center items-center bg-gray-400" >Image</div>
    </article>
    </>
  )
}

export default Homepage
