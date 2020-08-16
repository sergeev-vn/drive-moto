var $range = $(".range-slider__slider");
var $inputFrom = $(".range-slider__range__item-number_from");
var $inputTo = $(".range-slider__range__item-number_to");
var instance;
var min = 100000;
var max = 500000;
var from = 140000;
var to = 270000;

$range.ionRangeSlider({
  type: "double",
  min: min,
  max: max,
  from: from,
  to: to,
  grid: false,
  hide_from_to: true,
  hide_min_max: true,
  onStart: updateInputs,
  onChange: updateInputs,
  onFinish: updateInputs,
  prettify_separator: " "
});

console.log()

instance = $range.data("ionRangeSlider");
function updateInputs (data) {
  from = data.from;
  to = data.to;
  
  var accounting = require('accounting');
  $inputFrom.prop("value", accounting.formatNumber(from, 0, " "));
  $inputTo.prop("value", accounting.formatNumber(to, 0, " "));
}

$inputFrom.on("change", function () {
  var val = $(this).prop("value");

  // validate
  if (val < min) {
      val = min;
  } else if (val > to) {
      val = to;
  }

  instance.update({
      from: val
  });

  $(this).prop("value", val);

});

$inputTo.on("change", function () {
  var val = $(this).prop("value");

  // validate
  if (val < from) {
      val = from;
  } else if (val > max) {
      val = max;
  }

  instance.update({
      to: val
  });

  $(this).prop("value", val);
});