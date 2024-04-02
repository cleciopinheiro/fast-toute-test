import { Progress, Slider } from 'antd';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowDown } from "react-icons/io";

function YouDashboard() {
  return (
    <div className="w-screen bg-gray-200 flex flex-col text-[#141618] gap-3">
      <div className="mt-[8vh] flex w-full flex-col bg-gradient-to-t from-white via-white to-blue-100 text-black gap-4">
        <div className="flex flex-col gap-6 p-4">
          <h1 className="text-3xl font-bold">Welcome back!</h1>
          <h2 className="text-xl font-bold">Standings</h2>
        </div>

        <div className="flex flex-col items-center gap-2">
          <h1 className="text-4xl font-bold">Great</h1>
          <div className="w-[90vw] gap-2 flex flex-row">
            <div className="w-[20vw]">
              <Progress strokeColor="#0580f2" percent={100} showInfo={false} />
            </div>
            <div className="w-[20vw]">
              <Progress strokeColor="#0580f2" percent={100} showInfo={false} />
            </div>
            <div className="w-[50vw] flex items-center relative">
              <Progress strokeColor="#0580f2" trailColor="#cccccc" percent={80} showInfo={false} />
              <Slider defaultValue={0} className="absolute left-[80%]" />
            </div>
            <div className="w-[10vw]">
              <Progress trailColor="#cccccc" percent={0} showInfo={false} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 p-4">
          <p>
            <span className="text-lg font-semibold">How can I improve to Fantastic?</span>
            <br />
            {`Focus on the areas listed below in you next deliveries. They're listed in order of importance and show where you've had issues in the past`}
          </p>
        </div>

        <div className="shadow-md rounded-sm w-[60vw] mx-8 p-2 h-16 border flex justify-center mb-4 gap-4">
          {/* imagem no lugar dessa div */}
          <div className="w-[48px] h-[48px] border rounded-full bg-slate-300" />
          {/*  */}
          <div>
            <h1>Delivery completion</h1>
            <p>Delivery quality</p>
          </div>
        </div>

        <button
          type="button"
          className="p-3 rounded-md border border-[#FF893A] w-80 self-center mb-4 text-[#FF893A] text-xl"
        >
          Standing details
        </button>
      </div>

      <div className="bg-white p-4 flex flex-col gap-6">
        <h1 className="text-3xl font-bold">Challenges</h1>
        <div className="flex gap-4 items-center">
          {/* imagem no lugar dessa div */}
          <div className="w-[32px] h-[32px] border rounded-full bg-slate-300" />
          {/*  */}
          <div className="flex flex-col justify-center w-full">
            <h1 className="text-lg">Complete 8 blocks</h1>
            <p className="text-sm text-gray-400">Complete by Mar 30</p>
            <div className="flex justify-around items-center gap-2">
              <p className="w-[35vw] text-lg">$45 cash</p>
              <Progress strokeColor="#31c4f5" trailColor="#cccccc" percent={60} showInfo={false} />
            </div>
          </div>
          <IoIosArrowForward size={20} className="text-gray-400" />
        </div>

        <div className="flex gap-4 items-center">
          {/* imagem no lugar dessa div */}
          <div className="w-[32px] h-[32px] border rounded-full bg-slate-300" />
          {/*  */}
          <div className="flex flex-col justify-center w-full">
            <h1 className="text-lg">Prime Now Pro</h1>
            <Progress strokeColor="#31c4f5" trailColor="#cccccc" percent={60} showInfo={false} />
          </div>
          <IoIosArrowForward size={20} className="text-gray-400" />
        </div>

        <div className="flex gap-4 items-center">
          {/* imagem no lugar dessa div */}
          <div className="w-[32px] h-[32px] border rounded-full bg-slate-300" />
          {/*  */}
          <div className="flex flex-col justify-center w-full">
            <h1 className="text-lg">Amazon.com Champion</h1>
            <Progress strokeColor="#31c4f5" trailColor="#cccccc" percent={60} showInfo={false} />
          </div>
          <IoIosArrowForward size={20} className="text-gray-400" />
        </div>

        <button
          type="button"
          className="p-3 rounded-md border border-[#FF893A] w-80 self-center mb-4 text-[#FF893A] text-xl"
        >
          See all challenges
        </button>
      </div>

      <div className="bg-white p-4 flex flex-col gap-6">
        <h1 className="text-3xl font-bold">Amazon Flex Rewards</h1>

        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] border rounded-full bg-slate-300" />
          <h2 className="text-lg font-bold">Enjoy level 2 rewards</h2>
          <p>
            troungh <span className="font-bold">Jun 30</span>
          </p>
        </div>
        {/* preciso ajustar o hr para w-full */}
        <hr />
        {/*  */}
        <div>
          <h2 className="text-lg font-bold">Earning period: Jan 1 - Mar 31</h2>
          <p>
            Keep delivering to earn 1.566 more points by <span className="font-bold">Mar 31</span>{' '}
            to unlock Level 3.
          </p>
        </div>

        <div className="flex gap-2">
          <div className='w-full'>
            <Progress strokeColor="#31c4f5" trailColor="#cccccc" percent={47.8} showInfo={false} />
            <p className='ml-1'>1434/3000 points</p>
          </div>
          <div className="w-[48px] h-[48px] bg-slate-300 rounded-full" />
        </div>

        <button
          type="button"
          className="p-3 rounded-md border border-[#FF893A] w-80 self-center mb-4 text-[#FF893A] text-xl"
        >
          Rewards details
        </button>
      </div>

      <div className="bg-white p-4 flex flex-col">

        <h2 className="text-lg font-bold">Compliments</h2>

        <h2 className='text-lg'>56 received</h2>

        <div className='flex gap-4 flex-wrap justify-center mt-8'>
          <div className='flex flex-col text-center'>
            <div className="w-[100px] h-[100px] border rounded-full bg-slate-300" />
            <p>Above & <br />Beyond</p>
          </div>
          <div className='flex flex-col text-center'>
            <div className="w-[100px] h-[100px] border rounded-full bg-slate-300" />
            <p>Respectful <br />of property</p>
          </div>
          <div className='flex flex-col text-center'>
            <div className="w-[100px] h-[100px] border rounded-full bg-slate-300" />
            <p>Followed <br />Instructions</p>
          </div>
          <div className='flex flex-col text-center'>
            <div className="w-[100px] h-[100px] border rounded-full bg-slate-300" />
            <p>Friendly</p>
          </div>
          <div className='flex flex-col text-center'>
            <div className="w-[100px] h-[100px] border rounded-full bg-slate-300" />
            <p>On Time</p>
          </div>
          <div className='flex flex-col text-center'>
            <div className="w-[100px] h-[100px] border rounded-full bg-slate-300" />
            <p>Alexa,<br />Thank my<br /> Driver</p>
          </div>
        </div>
        <div className='w-full flex flex-row justify-end p-4 items-center gap-2'>
          <h1 className="text-lg font-bold">View all</h1>
          <IoIosArrowDown size={16} className='text-[#FF893A]'/>
        </div>
      </div>
    </div>
  );
}

export default YouDashboard;
