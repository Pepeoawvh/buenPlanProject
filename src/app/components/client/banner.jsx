import Image from 'next/image';
import styles from '../styles/animations.module.css';

const Banner = () => {
  return (
    <div id='banner' className=''>
      <Image
        src="/img/banner3.png"
        alt=""
        width={1000}
        height={1000}
        className={styles.zoomImage}
      />
    </div>
  );
};

export default Banner;