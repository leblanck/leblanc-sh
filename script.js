const copyButton = document.querySelector(".copy-button");
const copyText = document.querySelector(".copy-text");
const copyTextWrapper = document.querySelector(".copy-text-wrapper")

copyButton.addEventListener('click', event => {
  navigator.clipboard.writeText(copyText.innerHTML);
  event.preventDefault();
  copyTextWrapper.classList.toggle("success");
	copyTextWrapper.innerHTML = '<span class="fa-solid fa-check"></span> Copied!';
  
  setTimeout(function () {
    copyTextWrapper.classList.toggle("success");
		copyTextWrapper.innerHTML =  '<span class="fa-regular fa-copy fa-sm"></span> kyle@leblanc.sh';
  }, 5000);
});



/**
 * Generates an array of hexadecimal color values representing a gradient.
 * @param {string} startHex The starting hexadecimal color (e.g., '#FF0000').
 * @param {string} endHex The ending hexadecimal color (e.g., '#0000FF').
 * @param {number} steps The number of hex values to return.
 * @returns {string[]} An array of hex color strings.
 */
function getGradientHexValues(startHex, endHex, steps) {
  // Helper function to convert a hex color string to an RGB object
  function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  // Helper function to convert an RGB color object to a hex string
  function rgbToHex(r, g, b) {
    return '#' +
      ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).padStart(6, '0');
  }

  // Get the RGB values for the start and end colors
  const startRgb = hexToRgb(startHex);
  const endRgb = hexToRgb(endHex);

  if (!startRgb || !endRgb) {
    throw new Error('Invalid hex color string provided.');
  }

  const hexArray = [];

  // Calculate the difference for each RGB component
  const rDiff = endRgb.r - startRgb.r;
  const gDiff = endRgb.g - startRgb.g;
  const bDiff = endRgb.b - startRgb.b;

  // Calculate the incremental change per step
  const rStep = rDiff / (steps - 1);
  const gStep = gDiff / (steps - 1);
  const bStep = bDiff / (steps - 1);

  // Loop through the steps to generate each color
  for (let i = 0; i < steps; i++) {
    const r = Math.round(startRgb.r + (i * rStep));
    const g = Math.round(startRgb.g + (i * gStep));
    const b = Math.round(startRgb.b + (i * bStep));
    hexArray.push(rgbToHex(r, g, b));
  }

  return hexArray;
}

const startColor = '#ED1C24'; // red
const endColor = '#1AB5CD';// bright blue

//const startColor = '#006FFF'; //blue
//const endColor = '#50DDB0'; // green

const numSteps = document.querySelectorAll('span').length;
const gradientColors = getGradientHexValues(startColor, endColor, numSteps);

//console.log(gradientColors);

document.querySelectorAll('span').forEach((sp, i) => {
  sp.style.color = gradientColors[i % gradientColors.length];
});

// Used to fill out superscript text automatically based on number of links
const supers = document.getElementsByClassName('sup-tag');
for (let i = 0; i < supers.length; i++) {
	supers[i].innerHTML = i + 1;		
}