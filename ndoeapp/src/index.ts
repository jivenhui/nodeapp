import {NdoeappApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {NdoeappApplication};

export async function main(options: ApplicationConfig = {}
) {
  const app = new NdoeappApplication({url: 'localhost', rest: {port: 8080}});
  app.basePath('/api')
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
