import createCache from '@emotion/cache';

// shared by the server and client so server-rendered styles are picked up on hydrate
export default () => createCache({ key: 'css', prepend: true });
