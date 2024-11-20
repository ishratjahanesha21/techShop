import Image from 'next/image';
import Hero from './component/img-carosel';

import { Banner } from './component/Banner';
import { Feature5 } from './component/catagory';

import { Feature6 } from './component/Features';

export default async function Home() {
  return (
    <div>
      <Banner />
      <Feature5 />
      <Feature6 />

      {/* grid - 3 card  */}
      <div>
        <div></div>
      </div>

      <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
        {/* foooter */}
        footer section
      </footer>
    </div>
  );
}
