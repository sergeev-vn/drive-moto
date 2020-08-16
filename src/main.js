import "./styles/main.pcss";

if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "slick-carousel";
import "jquery-form-styler";
import "numeral";
import "accounting";
import "ion-rangeslider";
import "rateyo";

function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./scripts/', true, /\.js$/));