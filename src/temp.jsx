import Porfile from "../assets/Photo2.png";

function Intro() {
  return (
    <div className="max-w-4xl m-auto relative">
      <section id="intro">
        <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
          <div>
            <h2 className="font-bold text-4xl">Hello, I'm Vinay,</h2>
            <div>
              <h2 className="font-bold text-4xl mt-1 gradiant-text">
                Machine Learning Engineer
              </h2>
              <h2 className="font-bold text-4xl mt-1 gradiant-text">
                Blockchain Developer
              </h2>
            </div>
            <div>
              <p className="mt-4 text-gray-400">
                Driven student eager to contribute to organizational projects
                with a passion for technology and a commitment to learning.
                Seeking opportunities to apply and develop skills to support
                mutual growth and success.
              </p>
              <button className="px-4 h-10 shadow-gray-400 shadow-md py-4 flex items-center justify-center mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                Download resume
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="after:bg-[url('./large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('./small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-10">
              <img
                src={Porfile}
                className="relative z-10 w-[280px] m-auto sm:w-[600px]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Intro;
