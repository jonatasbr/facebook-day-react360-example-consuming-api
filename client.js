// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface} from 'react-360-web';
import {SurfaceShape} from "react-360-web/js/Compositor/Surface";

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('buildday_bsb', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  const today = new Surface(200, 500, SurfaceShape.Flat);
  today.setAngle(0, Math.PI/10);
  r360.renderToSurface(
    r360.createRoot('Today'),
    today
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};
