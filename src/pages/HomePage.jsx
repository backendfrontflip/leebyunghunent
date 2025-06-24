import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import ImageCarousel from '../components/ImageCarousel';
import Footer from '../components/Footer';
import { FaArrowAltCircleRight, FaArrowRight } from 'react-icons/fa';
import SquidParade from '../assets/squidgameparade.jpg';

const HomePage = () => {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollReveal().reveal('.reveal', {
        origin: 'bottom',
        distance: '20px',
        delay: 200,
        reset: true,
        easing: 'ease-in-out',
      });
    }, 1000);

    const announcementTimer = setTimeout(() => {
      setShowAnnouncement(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(announcementTimer);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      {/* 🎉 Announcement Banner */}
      {showAnnouncement && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-6 py-3 rounded-full shadow-lg z-50 animate-bounce flex flex-col text-center">
          <p>🎉 SQUIDGAME SEASON 3 TOUR ON GOING</p>
          <Link to="/tickets" className="underline font-semibold">
            Click here
          </Link>
          <span>[Merch, Auctions, Books & More], Go to shop now!!</span>
          <span>Happy shopping! 🛍️</span>
        </div>
      )}

      {/* 🎠 Image Carousel */}
      <div className="w-full max-w-4xl mb-8 reveal">
        <ImageCarousel />
      </div>

      {/* 🖼️ Event Poster + Ticket Section */}
      <div className="px-4 py-8 w-full">
        <div className="w-full flex justify-center">
          <img
            src={SquidParade}
            alt="Squid Game Parade Event Poster"
            className="rounded-xl shadow-lg w-full max-w-4xl object-cover"
          />
        </div>

        <div className="bg-black text-white p-6 rounded-2xl shadow-lg max-w-4xl w-full mx-auto mt-10 text-center border border-pink-500">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-pink-400">
            🎟️ Get Ticket to the Parade Finale
          </h2>

          <p className="mb-4 text-base sm:text-lg">
            Secure your spot at the{" "}
            <span className="font-bold">
              Squid Game Parade Finale Fan Event
            </span>{" "}
            happening on <strong>June 28, 2025 at 19:30 KST</strong>!
          </p>

          <p className="mb-4 text-sm sm:text-md text-yellow-300 font-semibold">
            ✈️ Each ticket includes a fully paid flight to the premiere and an
            exclusive pre-show interaction with the main cast!
          </p>

          <p className="mb-6 text-base">
            Mingle with stars like <strong>Lee Byung-hun</strong>,{" "}
            <strong>Jung Ho-yeon</strong>, and <strong>Wi Ha-jun</strong> before
            the event begins. This once-in-a-lifetime experience is limited to
            VIP attendees only!
          </p>

          <Link to="/paradeticket" className="inline-block w-full sm:w-auto">
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 sm:px-8 rounded-full transition duration-300 transform hover:scale-105 w-full sm:w-auto">
              Get Ticket Now
            </button>
          </Link>
        </div>
      </div>

      <article className="reveal bg-red-900 text-white py-12 px-6 rounded-2xl m-4 shadow-lg max-w-4xl text-center">
        <div className="flex flex-col">
          <div className="flex justify-center mb-4">
            <strong className="text-2xl text-black rounded-3xl border-transparent w-60 bg-white p-2">
              Squid Game Movie North America Tour OnGoing!
            </strong>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center">
            <p className="mb-4 border-transparent text-xl rounded-3xl w-60 p-4 font-bold bg-black">
              USA TOUR
            </p>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-bold text-2xl mb-4 border-transparent flex items-center">
              <span className="mr-2">NEW YORK</span>
              <FaArrowRight className="mr-2" />
              17TH-21ST
            </span>
            <span className="font-bold text-2xl mb-4 border-transparent flex items-center">
              <span className="mr-2">LOS ANGELES</span>
              <FaArrowRight className="mr-2" />
              22ND-28TH
            </span>
            <span className="font-bold text-2xl mb-4 border-transparent flex items-center">
              <span className="mr-2">DETROIT MI</span>
              <FaArrowRight className="mr-2" />
              29TH-30TH
            </span>
          </div>
        </div>

        <div className="mb-4 border-transparent text-xl rounded-3xl p-4 font-bold bg-black">
          <p className="mb-4">America and Europe Tour OnGoing</p>
          <span>
            Scheduled between <strong>May till July</strong>As squidgame season
            3 in a few weeks time, hurry and get your tickets. Byung Hun is
            coming to a city near you
          </span>
          <p className="mb-6 text-sm italic underline mt-4">
            Stay tuned for the official itinerary and ticket releases!
          </p>
        </div>

        <div className="flex justify-center items-center mt-6">
          <Link to="/tourdates">
            <button className="flex justify-center bg-white hover:bg-gray-100 text-red-700 font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
              <p className="flex flex-row items-center gap-2 uppercase">
                Reservation <FaArrowAltCircleRight />
              </p>
            </button>
          </Link>
        </div>
      </article>

      {/* Wildfire Incident Article */}
      <section className="reveal bg-white text-white py-12 px-6 rounded-2xl m-4 shadow-lg max-w-4xl">
        <h2 className="text-4xl text-black font-bold mb-6 border-b-4 border-yellow-400 inline-block pb-2">
          South Korea Wildfire Tragedy
        </h2>

        <p className="mb-2 text-lg text-black">
          Since March 21, 2025, South Korea has experienced a severe wildfire
          outbreak involving more than 20 separate blazes occurring
          simultaneously across the country. The disaster has so far killed 32
          people, including three firefighters and one government employee, and
          has led to the displacement of more than 37,000 people. The first
          significant fire occurred in Sancheong County, followed by the now
          most significant fire in Uiseong County, prompting widespread
          evacuations and mobilizing extensive firefighting resources. In
          response to the emergency, several provinces were officially
          designated as disaster zones by the national government.
          <br />
          The wildfires have been deemed the worst in South Korea's history by
          acting president <strong>Han Duck-soo</strong>.
        </p>

        <p className="mb-6 text-lg text-black">
          The Sancheong County fire began on March 21, 2025, and by the evening
          of March 22 had consumed approximately 1,200 acres (490 ha) of land.
          The mountainous topography combined with strong winds and dry
          conditions significantly hampered containment efforts, with
          firefighters achieving only 35% containment despite substantial
          deployment of resources for combating the wildfire after earlier
          reaching 70% containment. Fires in North Gyeongsang Province burned
          approximately 740 acres (300 ha), while Gimhae experienced additional
          significant fires requiring evacuations. A wildfire broke out in
          Ulsan, Ulju County.
          <br />
          Additional wildfire incidents were reported across central Chungcheong
          Province and southwestern Jeolla Province, indicating the nationwide
          scope of the emergency.
          <br />
          Additional wildfires that broke out simultaneously have affected
          multiple regions throughout central and southern South Korea. The
          Korea Forest Service issued its highest-level "severe" fire warnings
          for 12 locations, including Daejeon, Busan, and the North and South
          Gyeongsang Provinces. The alert was later issued for the whole
          country.
        </p>

        <article class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div class="border border-red-500 rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300 bg-white text-black">
            <h3 class="text-2xl font-bold mb-2 text-red-700">March 23</h3>
            <p>
              At 4:03 pm, a fire broke out on Mokdo Island, Ulju-gun, Ulsan
              Metropolitan City, and was extinguished after 1 hour and 50
              minutes.
            </p>
          </div>

          <div class="border border-red-500 rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300 bg-white text-black">
            <h3 class="text-2xl font-bold mb-2 text-red-700">March 24</h3>
            <p>
              At 3 pm, the Seosan–Yeongdeok Expressway Jeomgok Rest Stop for the
              Yeongdeok direction was damaged by a forest fire. Prime Minister
              Han Duck-soo visited the Forest Fire Integrated Command Center and
              inspected the response situation.
            </p>
          </div>

          <div class="border border-red-500 rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300 bg-white text-black">
            <h3 class="text-2xl font-bold mb-2 text-red-700">March 25</h3>
            <p>
              The National Fire Agency raised its fire response level to the
              highest. Gounsa temple in Uiseong, dating from the Silla Dynasty,
              was destroyed after evacuating treasures. Over 15,000 hectares
              were burned by this day.
            </p>
          </div>

          <div class="border border-red-500 rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300 bg-white text-black">
            <h3 class="text-2xl font-bold mb-2 text-red-700">March 26</h3>
            <p>
              104 residents stranded at a port were rescued. An S-76 helicopter
              crashed during firefighting, killing the pilot. Water supplies
              were cut off in parts of Andong.
            </p>
          </div>

          <div class="border border-red-500 rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300 bg-white text-black">
            <h3 class="text-2xl font-bold mb-2 text-red-700">March 27</h3>
            <p>
              Rain fell but had little effect. Air quality became hazardous with
              PM2.5 reaching 557μg/m³ in Andong. Fire approached Andong city
              limits.
            </p>
          </div>

          <div class="border border-red-500 rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300 bg-white text-black">
            <h3 class="text-2xl font-bold mb-2 text-red-700">March 28</h3>
            <p>
              Authorities announced full containment of wildfires in North
              Gyeongsang.
            </p>
          </div>

          <div class="border border-red-500 rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300 bg-white text-black">
            <h3 class="text-2xl font-bold mb-2 text-red-700">March 29</h3>
            <p>Wildfires reignited in the Andong area early in the morning.</p>
          </div>

          <div class="border border-red-500 rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300 bg-white text-black">
            <h3 class="text-2xl font-bold mb-2 text-red-700">March 30</h3>
            <p>
              Authorities again announced full containment of the wildfires in
              North and South Gyeongsang.
            </p>
          </div>

          <div class="border border-red-500 rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300 bg-white text-black">
            <h3 class="text-2xl font-bold mb-2 text-red-700">April 6</h3>
            <p>
              A second helicopter crashed while fighting fires in northwestern
              Daegu, killing its pilot.
            </p>
          </div>

          <div class="border border-red-500 rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300 bg-white text-black">
            <h3 class="text-2xl font-bold mb-2 text-red-700">April 7</h3>
            <p>
              A wildfire broke out in Hadong County due to a turf cutter
              accident. Over 506 people evacuated, with 65 hectares affected.
            </p>
          </div>

          <div class="border border-red-500 rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300 bg-white text-black">
            <h3 class="text-2xl font-bold mb-2 text-red-700">April 10</h3>
            <p>
              A wildfire broke out in the Korean Demilitarized Zone in Goseong
              County, Gangwon.
            </p>
          </div>

          <div class="border border-red-500 rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300 bg-white text-black">
            <h3 class="text-2xl font-bold mb-2 text-red-700">April 26</h3>
            <p>
              A wildfire broke out near Inje County, Gangwon, in the afternoon.
            </p>
          </div>
        </article>

        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col justify-center w-full sm:w-auto">
              <img
                src="/reporter.jpg"
                alt="reporter"
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center w-full sm:w-auto">
              <p className="mb-4 text-lg text-black">
                The firefighting operation has involved nearly 1,600 personnel,
                35 helicopters, and numerous ground vehicles. Acting President
                of South Korea Choi Sang-mok directed all relevant government
                agencies to employ the maximum available resources for fire
                suppression activities. The national administration formally
                declared North and South Gyeongsang provinces and Ulsan as
                disaster zones, enabling additional emergency resources and
                support measures.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col justify-center w-full sm:w-auto">
              <img
                src="/meeting.jpg"
                alt="meeting"
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center w-full sm:w-auto mb-6">
              <p className="mb-4 text-lg text-black">
                At least 37,829 people were displaced by the incident, which
                also required residents of 15 communities in the impacted areas
                to evacuate. This includes the relocation of 500 people in
                Uiseong County, scores of Gimhae inhabitants, and 260 residents
                of Sancheong County to temporary shelters after flames damaged
                their homes on the nearby hillsides.
              </p>
            </div>
          </div>
        </div>

        <p className="mb-4 text-lg text-black">
          About 80 individuals had to be evacuated due to a wildfire that raged
          throughout Ulju County in Ulsan. Authorities also shut down a number
          of highway and railroad segments in the southeast, including a crucial
          corridor that links Ulsan and Busan, the country's second-largest
          metropolitan area. Following wildfires that spread from Uiseong to
          Cheongsong County, authorities also ordered the evacuation of 2,600
          prisoners from Cheongsong Prison and 800 prisoners from Andong Prison.
        </p>

        <p className="mb-8 text-lg text-black">
          As the nation mourns and begins the rebuilding process, your help is
          needed more than ever. Contributions will directly support the
          victims, help rebuild communities, and restore the affected natural
          areas.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-black">
          <button className="">
            <Link to="/cardpage">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
                Contribute
              </button>
            </Link>
          </button>
          <Link to="/cardpage">
            <button className="bg-white hover:bg-gray-100 text-red-700 font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
              Donate
            </button>
          </Link>
        </div>
      </section>

      {/* Info Section */}
      <section className="reveal bg-gray-800 text-white py-12 px-6 rounded-2xl m-4 shadow-lg max-w-4xl text-center">
        <p className="mb-4">
          Lee has been named Gallup Korea's Film Actor of the Year in 2012 and
          Gallup Korea's Television Actor of the Year in 2018. He was also the
          first South Korean actor to present an Oscar at the Academy Awards and
          is a member of the Academy of Motion Picture Arts and Sciences. Lee
          and Ahn Sung-ki were the first South Korean actors to imprint their
          hand and foot prints on the forecourt of Grauman's Chinese Theatre in
          Hollywood, Los Angeles.
        </p>
        <Link
          to="/about"
          className="inline-block mt-4 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
        >
          See More
        </Link>
      </section>

      {/* Meet and Greet */}
      <section className="reveal bg-gray-800 text-white py-12 px-4 flex flex-col items-center text-center rounded-2xl m-4 shadow-lg">
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-blue-500 inline-block pb-2">
          Meet & Greet Opportunities
        </h2>
        <p className="max-w-2xl text-lg mb-6">
          Don’t miss your chance to meet Lee Byung-hun in person! We host
          exclusive meet-and-greet events for dedicated fans. These sessions
          include photo ops, personalized autographs, and behind-the-scenes
          stories.
        </p>
        <div className="bg-black p-6 rounded-xl shadow-md max-w-md w-full">
          <Link to="/meetandgreet">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
              Reserve Your Spot
            </button>
          </Link>
        </div>
      </section>

      {/* Upcoming Projects */}
      <section className="reveal bg-gray-800 text-white py-12 px-6 rounded-2xl m-4 shadow-lg max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-4">Upcoming Projects</h2>
        <p className="mb-4">
          🎬 <strong>“Shadow Operative”</strong> – A political thriller expected
          to release early next year.
        </p>
        <p className="mb-4">
          🎥 <strong>“Echoes of Silence”</strong> – A romantic drama set in
          post-war Korea.
        </p>
        <p className="mb-4">
          📺 <strong>Netflix Series</strong> – Lee is rumored to star in an
          international action-spy series.
        </p>
      </section>

      {/* Fan Highlights */}
      <section className="reveal bg-gray-800 text-white py-12 px-6 rounded-2xl m-4 shadow-lg max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-4">Lee's Highlights</h2>
        <p className="mb-4">
          Most times its the reflection of life that keeps us going and moving
          forward. Also, having taking photos is just a way of capturing the
          moment.
        </p>
        <p className="mb-4">
          📸 Check out his little{" "}
          <Link
            to="/gallery"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
          >
            {" "}
            gallery
          </Link>{" "}
          collection filled with unforgettable moments.
        </p>
      </section>

      {/* Behind the Scenes */}
      <section className="reveal bg-gray-800 text-white py-12 px-6 rounded-2xl m-4 shadow-lg max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-4">Behind the Scenes | Socials</h2>
        <p className="mb-4">
          Get a sneak peek into Lee's training sessions, filming process, and
          personal reflections shared exclusively with his fan club.
        </p>

        <button
          onClick={handleClick}
          className="inline-block mt-4 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
        >
          Visit Blog
        </button>

        {showMessage && (
          <p className="mt-4 text-lg text-white">🚧 Coming Soon...</p>
        )}
      </section>

      <Link
        to="/shop"
        className="fixed bottom-6 right-6 z-40 animate-pulse bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-3xl shadow-lg transition duration-300 p-10"
      >
        Shop Now
      </Link>

      <Footer />
    </div>
  );
};

export default HomePage;
