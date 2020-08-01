import React, { Fragment } from 'react';

// import { Topbar } from './components';

import styles from './Auth.module.scss';

const Auth = (props: any) => {
  const { children } = props;
  return (
    <Fragment>
      {/* <Topbar /> */}
      <main className={styles.content}>{children}</main>
    </Fragment>
  );
};

export default Auth;
