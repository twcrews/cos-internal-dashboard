import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getPerformance } from 'firebase/performance';

const firebaseConfig = {
  apiKey: 'AIzaSyDmq3-O8nmfRqr00OrdVebW0T1q88pxUVI',
  authDomain: 'cos-internal-dashboard.firebaseapp.com',
  projectId: 'cos-internal-dashboard',
  storageBucket: 'cos-internal-dashboard.appspot.com',
  messagingSenderId: '234381964641',
  appId: '1:234381964641:web:29d3d2ecb38a8a6f6b8120',
  measurementId: 'G-0ENF92YTBL',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const performance = getPerformance(app);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
