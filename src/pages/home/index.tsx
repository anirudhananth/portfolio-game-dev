import Canvas from "../../components/Canvas"

const Home = () => {
  return (
    <section className="w-screen h-screen bg-gray-900">
      {/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center text-white">
        POPUP
      </div> */}
      <Canvas/>
      <div className="absolute top-18 left-0 right-0 flex items-center justify-center text-white">
        <article className="max-w-2xl px-6 py-24 mx-auto space-y-12 dark:bg-transparent dark:text-gray-100">
          <div className="w-full mx-auto space-y-4 text-center">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              This website is still under development.
            </h1>
          </div>
          <div className="dark:text-gray-100 text-center">
            <p>Hey, I'm Anirudh. I make websites and games. Come back when this portfolio is fully functional! Meanwhile, you can play around with the island by rotating it with your mouse.</p>
          </div>
          
        </article>
      </div>

    </section>
  )
}

export default Home