"use client";

export default function Home(){
    const handleClick = () => {
      const prob = Math.random()
      if (prob < 0.5){
        window.open("https://www.youtube.com/watch?v=xMHJGd3wwZk&list=RDxMHJGd3wwZk&start_radio=1")
      }
      else{
        window.open("https://wannabedeveloper123.github.io/index.html")
      }
    }

    {
      return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900">
          <h1 className="text-4xl font-bold text-gray-50 mb-6">
            🚀 Welcome to My First Next.js + Tailwind Page! Click on the button to know more about me! (or maybe not click the button to find your odds c:)
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            <img src="/vishal.jpg" alt="Me!" className="h-64 w-64 rounded-full mt-6" />
          </p>
          <button onClick = {handleClick} className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-800 transition">
            All my homies love CodeBox ♥️
          </button>
        </main>
      );
    }
  }
