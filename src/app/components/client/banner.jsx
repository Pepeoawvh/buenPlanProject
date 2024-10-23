import Image from 'next/image';
import styles from '../styles/animations.module.css';

const Banner = () => {
  return (
    <div className=''>
      <Image
        src="/img/banner1.png"
        alt=""
        width={1000}
        height={1000}
        className={styles.zoomImage}
      />
    </div>
  );
};

export default Banner;