import React, { useState } from 'react';

import styles from './Application.module.scss';

const Application = (props: any) => {
  const { children } = props;
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.contentContainer}>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Application;
