import "./styles/main.pcss";

if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "slick-carousel";

function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./scripts/', true, /\.js$/));