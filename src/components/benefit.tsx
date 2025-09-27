import { useNavigate } from 'react-router'

const Benefits = () => {
    const nav = useNavigate();
  return (
    <div className='min-h-screen bg-white'>
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row bg-[white] justify-center items-center p-6 md:p-12 gap-y-10 md:gap-[15%]">
        <div className="w-full max-w-[400px] h-[300px] md:w-[500px] md:h-[500px]">
          <svg 
            viewBox="0 0 200 200" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <clipPath id="myBlob">
                <path 
                  fill="#FF0066" 
                  d="M49.7,-58.1C65.1,-46.4,78.7,-31.3,79.2,-15.8C79.7,-0.4,67,15.5,55.6,29.1C44.2,42.7,34,54,19.8,62.9C5.6,71.7,-12.6,78.2,-27.5,73.6C-42.4,69.1,-54.1,53.5,-63.3,36.8C-72.6,20.2,-79.5,2.5,-77.5,-14.5C-75.5,-31.4,-64.5,-47.6,-50.1,-59.5C-35.7,-71.5,-17.8,-79.2,-0.3,-78.8C17.2,-78.4,34.4,-69.9,49.7,-58.1Z"
                  transform="translate(100 100)" />
              </clipPath>
            </defs>
            <image
              xlinkHref="/genzhome2.jpg"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#myBlob)"
            />
          </svg>
        </div>

        <div className='w-full max-w-[500px] space-y-4 text-center md:text-left'>
          <h2 className='font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#334238]'>
            Build a relationship in Christ.
          </h2>
          <p className='text-[#334238] text-base sm:text-lg md:text-[20px]'>
            By deepening your relationship with God and surrounding yourself with a faith-filled community, you’ll discover clarity, confidence, and your true purpose. We’re here to walk the journey with you — boldly and prayerfully.
          </p>
          <button 
          onClick={()=> nav("/getinvolved")} 
          className="bg-[#FF6000] text-[#FAF2E8] px-4 py-2 rounded-full">
            Get Involved
          </button>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col-reverse md:flex-row bg-white justify-center items-center p-6 md:p-14 gap-y-10 md:gap-[20%]">
        <div className='w-full max-w-[500px] space-y-4 text-center md:text-left'>
          <h2 className='font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#334238]'>
            Unashamed. Unfiltered. Unstoppable.
          </h2>
          <p className='text-[#334238] text-base sm:text-lg md:text-[20px]'>
            This is the generation that will not be silenced. We’re loud for Jesus, proud of the Gospel, and ready to change the world.
            Come as you are — grow into who God has called you to be.
          </p>
          <button
          onClick={()=> nav("/getinvolved")} 
          className="bg-[#FF6000] text-[#FAF2E8] px-4 py-2 rounded-full"
          >
            Get Involved
          </button>
        </div>

        <div
          className="w-full max-w-[350px] h-[300px] md:w-[450px] md:h-[450px] bg-amber-600 bg-cover bg-center"
          style={{
            backgroundImage: "url('/genshome3.jpg')",
            clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
          }}
        ></div>
      </div>
    </div>
  )
}

export default Benefits
