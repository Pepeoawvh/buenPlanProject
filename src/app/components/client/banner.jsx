import Image from 'next/image';
import styles from '../styles/animations.module.css';

const Banner = () => {
  return (
    <div className='grid justify-items-center'>
      <div id='banner' className='grid  justify-items-center md:w-3/4'>
        <Image
          src="/img/banner3.png"
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