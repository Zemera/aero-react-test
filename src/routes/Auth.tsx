import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import SecureLS from 'secure-ls';

import { useTranslation } from 'react-i18next';

const ls = new SecureLS({ encodingType: 'aes' });

function Auth(props: any) {
  const { children } = props;
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const initAuth = async () => {
      try {
        let token = ls.get('token');
        let user = ls.get('user');
        if (user && token) {
          // get new user profil on server
        }
      } catch (error) {}
      setLoading(false);
    };

    initAuth();
  }, [dispatch, t]);

  return children;
}

export default Auth;
