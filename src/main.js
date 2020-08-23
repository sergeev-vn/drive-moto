import "./styles/main.pcss";

if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
  require("file-loader!./pages/catalog.pug");
  require("file-loader!./pages/card-product.pug");
}

// import "jquery"
import "slick-carousel";
import "jquery-form-styler";
import "numeral";
import "accounting";
import "ion-rangeslider";
import "../node_modules/@rateyo/jquery/lib/cjs/jquery.rateyo"

function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./scripts/', true, /\.js$/));