//import './App.css';
import Policy from './Policy';


/*
              With [bot name], you can play all your favorite tunes, search for specific songs, create custom playlists, and so much more.
              <br></br>
Welcome to the home of [bot name] – your ultimate music companion on Discord! [Bot name] is a powerful and feature-rich music bot that allows you to bring the party to any Discord server. With [bot name], you can play all your favorite tunes, search for specific songs, create custom playlists, and so much more.

But [bot name] is more than just a music player. It's also a full-fledged DJ, complete with a variety of sound effects and tools to help you mix and scratch your tracks. Whether you're a seasoned DJ or just starting out, [bot name] has something to offer you.

So why wait? Add [bot name] to your Discord server today and start rockin' out with your friends!

*/

export default function App() {
  return (
    <div className="wrapper">
      <main>
        <div className="container mx-10 px-3">
          <div>
            <a href="https://github.com/Punzia/MilkBot" className="inline-flex space-x-4">
              <span className="rounded bg-purple-50 px-2.5 py-1 text-xs font-semibold text-purple-500 tracking-wide uppercase"> What's new </span>
              <span className="inline-flex items-center text-sm font-medium text-purple-500 space-x-1">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
                <span>Check out on GitHub</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
              </span>
            </a>
          </div>
          <div className='main'>
            <div className='flex items-center'>
              <img className="w-20 h-20 rounded-full border border-slate-300" src="/img/icon.png" alt="icon"></img>
              <h1 className="text-5xl font-bold text-white ml-4">
                MilkBot🥛
              </h1>
            </div>
            <p className='mt-6 text-s text-gray-400 bio'>
              Welcome to the home of MilkBot – your ultimate music companion on Discord!<br></br>
              MilkBot is a powerful and feature-rich music bot that allows you to bring the party to any Discord server.
              <br></br>

            </p>
            <p className="py-2.5 text-green-300 text-xm">
              <a href="#0" className="border border-slate-300 bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300"><code>/play</code></a>
              <a href="#0" className="border border-slate-300 bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300"><code>/queue</code></a>
              <a href="#0" className="border border-slate-300 bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300"><code>/skip</code></a>
              <a href="#0" className="border border-slate-300 bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300"><code>/remove</code></a>
              <a href="#0" className="border border-slate-300 bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300"><code>/leave</code></a>
            </p>
          </div>
          <div className="flex">
            <div className="mt-12 sm:max-w-5xl sm:w-full sm:flex">
              <div className="mt-4 sm:mt-0"><a href={<Policy />} className="block w-full rounded-md border border-transparent px-5 py-3 bg-purple-700 text-base font-medium text-white shadow hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:px-10"> Add to Discord Guild! </a></div>
              <div className="mt-4 sm:ml-2 sm:mt-0"><a href="/policy" className="block w-full rounded-md border border-transparent px-5 py-3 bg-purple-700 text-base font-medium text-white shadow hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:px-10"> About </a></div>
              <div className="mt-4 sm:ml-2 sm:mt-0"><a href="#defaultModal" className="inline-flex items-center w-full rounded-md border border-transparent px-5 py-3 bg-purple-100 text-base font-medium text-purple-500 shadow hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:px-10" type="button" data-modal-toggle="defaultModal"><svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg> Donate </a></div></div>

          </div>

        </div>

      </main>

      <div id="defaultModal" tabindex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
        <div className="relative w-full h-full max-w-2xl md:h-auto">

          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Terms of Service
              </h3>
              <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-6 space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
              </p>
            </div>

            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button data-modal-toggle="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
              <button data-modal-toggle="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
            </div>
          </div>
        </div>
      </div>
    </div>



  );
}

//export default App;
