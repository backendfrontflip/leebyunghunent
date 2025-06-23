import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const About = () => {
  useEffect(() => {
    // Initialize ScrollReveal with desired settings
    const sr = ScrollReveal({
      distance: '50px',
      duration: 1000,
      easing: 'ease-out',
      opacity: 0,
      scale: 0.9,
      interval: 200,
    });

    sr.reveal('.reveal');
  }, []);

  return (
    <>
      <div>
        <div className='border bg-gray-500 rounded-2xl p-2 mb-3 reveal'>
          <p className='bg-black border-transparent rounded-2xl p-3 mb-3'>
            Lee Byung-hun is a South Korean actor born on July 12, 1970, in Seoul, South Korea. 
            With a career spanning over three decades, he has established himself as one of the 
            most versatile and talented actors in the industry. In the United States, 
            he is known for portraying Storm Shadow in G.I. Joe: The Rise of Cobra and 
            its sequel G.I. Joe: Retaliation, and starring alongside Bruce Willis in 
            Red 2. He portrayed T-1000 in Terminator Genisys, and Billy Rocks 
            in The Magnificent Seven. He appeared in a recurring role as the Front Man 
            in season 1, and as part of the main cast of season 2 of the Netflix hit survival 
            series Squid Game.
            <p>
              Lee has been named Gallup Korea's Film Actor of the Year in 2012 and Gallup Korea's 
              Television Actor of the Year in 2018. He was also the first South Korean 
              actor to present an Oscar at the annual Academy Awards in Los Angeles and is a 
              member of the Academy of Motion Picture Arts and Sciences. Lee and Ahn Sung-ki 
              were the first South Korean actors to imprint their hand and foot prints on the 
              forecourt of Grauman's Chinese Theatre in Hollywood, Los Angeles. 
            </p>       
          </p>

          <p className='bg-black border-transparent rounded-2xl p-3 underline'>
            After he had to clear some debts following his father's death, 
            Lee fell into a depression. He then started to suffer panic disorders, and found it 
            difficult to attend award ceremonies. Lee credits his wife with helping him overcome 
            his mental health challenges
          </p>
        </div>

        <div className='flex flex-row mx-auto gap-3'>
          <div className='border bg-gray-500 rounded-2xl p-2 reveal'>
            <p className='border-transparent rounded-full w-40 flex justify-center p-2 bg-black mb-4'>Career Highlights</p>
            <ul className='bg-black border-transparent rounded-2xl p-3 underline'>
              <li>Joint Security Area (2000): A landmark cold-war film that marked his breakthrough</li>
              <li>A Bittersweet Life (2005): A mafia film that premiered at the Cannes Film Festival</li>
              <li>The Good, the Bad, the Weird (2008): A "kimchi western" that showcased his villainous role</li>
              <li>G.I. Joe: The Rise of Cobra (2009): His Hollywood debut as Storm Shadow</li>
              <li>Squid Game (2021): A Netflix survival series where he played the Front Man</li>
            </ul>
          </div>

          <div className='border bg-gray-500 rounded-2xl p-2 reveal'>
            <p className='border-transparent rounded-full flex justify-center p-2 bg-black mb-4'>Awards & Recognition</p>
            <h5 className='bg-black border-transparent rounded-2xl p-3 mb-2 underline'>Lee Byung-hun has received numerous awards for his performances, including:</h5>
            <ul  className='bg-black border-transparent rounded-2xl p-3 underline'>
              <li>- Grand Prize at the SBS Drama Awards for All In (2003)</li>
              <li>- Best Actor awards for Inside Men (2015)</li>
              <li>- Recognition as one of Gallup Korea's Film Actors of the Year</li>
            </ul>
          </div>
        </div>

        <div className='border-transparent rounded-2xl bg-gray-500 p-4 mt-3'>
          <div className='flex justify-center'>        
            <p className='border-transparent mt-3 w-60 rounded-full flex justify-center p-2 bg-black mb-4 reveal'>Philanthropy and Personal Life</p>
          </div>
          <p  className='bg-black border-b rounded-2xl p-3 reveal'>
            Lee Byung-hun is also known for his philanthropic efforts, 
            supporting various charitable causes and organizations. In 
            his free time, he enjoys playing golf and reading. He was previously romantically linked with fellow 
            <a href='https://en.wikipedia.org/wiki/All_In_(TV_series)' className='italic font-bold text-xl'>All In</a> lead 
            <a href="https://en.wikipedia.org/wiki/Song_Hye-kyo" className='italic font-bold text-xl'>Song Hye-kyo</a> beginning in the early-2000s. The relationship, 
            though kept completely low-key and rarely publicized, lasted fifteen months before they 
            split in mid-June 2004. Lee married actor 
            <a href="https://en.wikipedia.org/wiki/Lee_Min-jung" className='italic font-bold text-xl'>Lee Min-jung</a> on August 10, 2013, 
            at the <a href="https://en.wikipedia.org/wiki/Grand_Hyatt_Seoul" className='italic font-bold text-xl'>Grand Hyatt Seoul.</a> The couple had briefly dated in 2006, then resumed their 
            relationship in 2012. Lee's wife gave birth to their child, a son, Lee Joon-hoo, 
            on March 31, 2015. On August 4, 2023, Lee's wife confirmed that she was expecting 
            their second child. They welcomed the birth of their second child, a daughter, born on 
            December 21, 2023.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
