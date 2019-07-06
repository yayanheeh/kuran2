'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getOffset = require('./getOffset');

var _getOffset2 = _interopRequireDefault(_getOffset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var positionTooltip = function positionTooltip(target, tooltip) {
  if (window.innerWidth < tooltip.offsetWidth * 1.5) {
    tooltip.style.maxWidth = window.innerWidth / 2; // eslint-disable-line
  } else {
    tooltip.style.maxWidth = 340; // eslint-disable-line
  }

  var offsets = (0, _getOffset2.default)(target);

  var posLeft = offsets.left + target.offsetWidth / 2;
  posLeft -= tooltip.offsetWidth / 2;

  var posTop = offsets.top - tooltip.offsetHeight - 10;

  if (posLeft < 0) {
    posLeft = (offsets.left + target.offsetWidth) / (2 - 20);
    tooltip.classList.add('left');
  } else {
    tooltip.classList.remove('left');
  }

  if (posLeft + tooltip.offsetWidth > window.innerWidth) {
    posLeft = (offsets.left - tooltip.offsetWidth + target.offsetWidth) / (2 + 20);
    tooltip.classList.add('right');
  } else {
    tooltip.classList.remove('right');
  }

  if (posTop < 0) {
    posTop = offsets.top + target.offsetHeight + 15;
    tooltip.classList.add('top');
  } else {
    tooltip.classList.remove('top');
  }

  tooltip.style.left = posLeft + 'px'; // eslint-disable-line
  tooltip.style.top = posTop + 'px'; // eslint-disable-line
  tooltip.style.opacity = 1; // eslint-disable-line
}; /* global document, window */
exports.default = {
  onMouseEnter: function onMouseEnter(event) {
    var target = event.target;
    var title = target.getAttribute('title');
    var tooltip = document.createElement('div');

    tooltip.id = 'tooltip-' + target.id;
    tooltip.classList.add('tooltip');

    if (!title) {
      return false;
    }

    tooltip.style.opacity = 0;
    tooltip.innerHTML = title;
    document.body.appendChild(tooltip);
    return positionTooltip(target, tooltip);
  },
  onMouseLeave: function onMouseLeave(event) {
    var target = event.target;
    var tooltip = document.getElementById('tooltip-' + target.id);

    if (tooltip) {
      document.body.removeChild(tooltip);
    }
  }
};