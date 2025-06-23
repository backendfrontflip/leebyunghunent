import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';

const Charity = () => {
  useEffect(() => {
    // Initialize ScrollReveal with desired settings
    ScrollReveal().reveal('.reveal', {
      distance: '50px',
      duration: 1000,
      easing: 'ease-out',
      opacity: 0,
      scale: 0.9,
      interval: 200,
    });
  }, []);

  return (
    <>
      <section className="p-8 border-transparent bg-gray-800 m-4 rounded-2xl reveal">
        <h2 className="text-3xl font-bold mb-4 p-1 rounded-full flex justify-center bg-black">
          Charity Initiatives
        </h2>
        <p>
          As we strive to make a difference in the world, we are reminded of the power of
          kindness and compassion. Lee Byung-hun's dedication to various charitable causes
          inspires us to follow in his footsteps. Through his generosity and commitment, he
          has touched the lives of many. Let us join hands in making a positive impact on our
          communities and the world at large.
        </p>
      </section>

      <article className="p-8 border-transparent bg-gray-800 m-4 rounded-2xl reveal">
        <p className="mb-4">
          In March 2011, Lee donated 700 million won to the Korean Red Cross to help local
          residents affected by the earthquake and tsunami in Japan.
        </p>
        <p className="mb-4">
          In November 2016, Lee made a voice donation to Green Umbrella Children's Foundation
          for 'Haru', a campaign to support sick children.
        </p>
        <p className="mb-4">
          In April 2019, Lee and his wife Lee Min-jung donated 100 million to victims of
          forest fires in Gangwon-do.
        </p>
        <p className="mb-4">
          In February 2020, Lee donated 100 million won through the Fruit of Love of the
          Community Chest of Korea, used to provide sanitary products to vulnerable groups.
          In October 2020, Lee made a voice donation to a multimedia-type Braille sensory book
          by The National Research Institute of Cultural Heritage. On December 30, 2020, Lee
          donated 100 million won to the Green Umbrella Children's Foundation to help
          children from low-income families during COVID-19.
        </p>
        <p className="mb-4">
          On July 12, 2021, Lee donated 100 million won to Asan Children's Hospital in Seoul
          on his birthday.
        </p>
        <p className="mb-4">
          On March 6, 2022, Lee donated 100 million won to Hope Bridge Disaster Relief
          Association to help residents affected by the Uljin and Samcheok wildfires. His
          donation was used to provide temporary shelter for victims evacuating their homes.
        </p>
      </article>

      <div className="flex justify-center reveal">
        <Link to="/cardpage">
          <button className="border p-5 rounded-3xl mb-4 text-white font-semibold hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
            Donate
          </button>
        </Link>
      </div>
    </>
  );
};

export default Charity;
