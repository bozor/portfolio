import Image from 'next/image';

import nike from 'public/images/logos/nike.svg';
import jbl from 'public/images/logos/jbl.svg';
import puma from 'public/images/logos/puma.svg';
import crocs from 'public/images/logos/crocs.svg';
import tommy from 'public/images/logos/tommy-hilfiger.svg';
import dell from 'public/images/logos/dell.svg';
import bp from 'public/images/logos/bp.svg';
import castrol from 'public/images/logos/castrol.svg';

import s from './Logos.module.scss';

const Logos = () => {
  return (
    <div className={s.wrap}>
      <div className={s.logo}>
        <Image src={nike} alt="nike" fill style={{ padding: 10 }} />
      </div>
      <div className={s.logo}>
        <Image src={jbl} alt="jbl" fill />
      </div>
      <div className={s.logo}>
        <Image src={crocs} alt="crocs" fill />
      </div>
      <div className={s.logo}>
        <Image src={puma} alt="puma" fill style={{ padding: 8 }} />
      </div>
      <div className={s.logo}>
        <Image src={tommy} alt="tommy hilfiger" fill />
      </div>
      <div className={s.logo}>
        <Image src={castrol} alt="castrol" fill />
      </div>
      <div className={s.logo}>
        <Image src={dell} alt="dell" fill style={{ padding: 4 }} />
      </div>
      <div className={s.logo}>
        <Image src={bp} alt="bp" fill style={{ paddingBottom: 5 }} />
      </div>
    </div>
  );
};

export default Logos;
