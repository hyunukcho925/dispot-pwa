'use client'

import { useEffect } from 'react';
import * as serviceWorkerRegistration from '../utils/serviceWorkerRegistration';

export default function ServiceWorkerLoader() {
  useEffect(() => {
    serviceWorkerRegistration.register();
  }, []);
  return null;
} 