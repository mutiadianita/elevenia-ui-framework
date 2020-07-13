"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var DateOptionBox = function DateOptionBox() {
  var result = {
    month: {},
    year: {},
    date: {}
  };
  result.date = listDate();
  result.month = listMonth();
  result.year = listYear();
  return result;
};

var listDate = function listDate() {
  var DateList = [];

  for (var d = 1; d <= 31; d++) {
    DateList.push({
      value: d,
      selected: false
    });
  }

  return DateList;
};

var listMonth = function listMonth() {
  var MonthList = [];
  var monthName = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

  for (var m = 1; m <= monthName.length; m++) {
    MonthList.push({
      value: monthName[m - 1],
      selected: false
    });
  }

  return MonthList;
};

var listYear = function listYear() {
  var YearList = [];

  for (var y = 2019; y >= 1919; y--) {
    YearList.push({
      value: y,
      selected: false
    });
  }

  return YearList;
};

var _default = DateOptionBox;
exports.default = _default;