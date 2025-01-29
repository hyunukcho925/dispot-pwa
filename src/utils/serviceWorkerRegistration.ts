export function register() {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const swUrl = '/sw.js';

      navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
          registration.onupdatefound = () => {
            const installingWorker = registration.installing;
            if (installingWorker == null) {
              return;
            }

            installingWorker.onstatechange = () => {
              if (installingWorker.state === 'installed') {
                if (navigator.serviceWorker.controller) {
                  // 새로운 컨텐츠가 있습니다.
                  console.log('새로운 컨텐츠가 사용 가능합니다.');
                } else {
                  // 모든 것이 프리캐시 되었습니다.
                  console.log('컨텐츠가 오프라인 사용을 위해 캐시되었습니다.');
                }
              }
            };
          };
        })
        .catch((error) => {
          console.error('서비스 워커 등록 중 에러 발생:', error);
        });
    });
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
} 