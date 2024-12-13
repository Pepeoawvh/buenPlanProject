import Image from 'next/image';
import styles from '../styles/animations.module.css';

const Banner = () => {
  return (
    <div className='animate-fade animate-once animate-duration-[1300ms] animate-delay-300 grid justify-items-center aspect-auto'>
      <div id='banner' className='grid  justify-items-center md:w-3/4'>
        <Image
          src="/img/banner3.svg"
          alt="Banner"
          width={1000}
          height={1000}
          className={`w-full ${styles.zoomImage}`}
        />
      </div>
    </div>
  );
};

export default Banner;