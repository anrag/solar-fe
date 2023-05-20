'use client'
import Image from "next/image";

let solarJson = [
  {
    name: "Waaree Mono Perc",
    image: "/solar.jpeg",
    price: 28.9,
    totalRating: 65,
    rating: 4.5,
  },
  {
    name: "Adani Mono Perc",
    image: "/solar.jpeg",
    price: 27.8,
    totalRating: 35,
    rating: 4,
  },
  {
    name: "Jakson Mono Perc",
    image: "/solar.jpeg",
    price: 28.15,
    totalRating: 75,
    rating: 3.8,
  },
  {
    name: "Luminious Mono Perc",
    image: "/solar.jpeg",
    price: 31.15,
    totalRating: 10,
    rating: 4.2,
  },
];
export default function Home() {

  const whatsAppMessage = () => {
    let message = "Hello! Thank you for reaching out to us on WhatsApp. How can we assist you today? Feel free to ask any questions or share your inquiries about our solar products and services. We're here to help!"
    let url = `https://web.whatsapp.com/send?phone=+918707484110&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
  const initiateCall = () => {
    window.location.href = `tel:+918707484110`;
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        onClick={initiateCall}
        className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"
      >
        <p className="cursor-pointer fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          SOLAR SAMADHAAN <br /> +91 8707484110
        </p>
        <div className="cursor-pointer fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <button onClick={whatsAppMessage}>
            <Image
              src="/whatsapp-button.png"
              alt="Vercel Logo"
              width={200}
              height={32}
              priority
            />
          </button>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <div className="mb-16 group">
          <h1 className="mb-1 font-mono text-4xl dark:text-gray-100 text-green-500 md:text-6xl">
            BY 🌞 SAVE <br className="block md:hidden" />
            <span className="dark:text-green-500 inline-flex h-20 pt-2 overflow-x-hidden animate-type whitespace-nowrap text-brand-accent">
              UPTO 95% ON Electricity bill
            </span>
            {/* <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"></span> */}
          </h1>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        {solarJson.map((e,id) => {
          return (
            <div key={id} className="mb-32 grid text-center lg:mb-0  lg:text-left">
              <div className="wrapper bg-transparent antialiased text-gray-900">
                <div>
                  <Image
                    src={e.image}
                    height={380}
                    width={380}
                    alt=" random imgee"
                    className="w-64 object-cover object-center rounded-lg shadow-md"
                  />

                  <div className="relative px-4 -mt-16  ">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="flex items-baseline">
                        <span className="bg-green-500 text-teal-100 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                          From 1 kW
                        </span>
                      </div>

                      <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                        {e.name}
                      </h4>

                      <div className="mt-1">
                        ₹{e.price}
                        <span className="text-gray-600 text-sm"> /Watt</span>
                      </div>
                      <div className="mt-4">
                        <span className="text-green-500 text-md font-semibold">
                          {e.rating}/5 ratings{" "}
                        </span>
                        <span className="text-sm text-gray-600">
                          (based on {e.totalRating} ratings)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <center className="mb-10">
          {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"> */}
          <span> Deal in Bhopal, Vidisha & Raisen </span>
          <span onClick={initiateCall}>&nbsp;Contact - +91 8707484110</span>
          {/* </p> */}
        </center>
      <i className="fa fa-whatsapp my-float"></i>
    </main>
  );
}
