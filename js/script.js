// Select slides
const slides = document.querySelectorAll('.slides li');

// Select timeline
const timeline = document.querySelectorAll('.timeline li');

// Steps legend
const stepsLegend = document.getElementById('steps-legend');

// Select step number
const stepNumber = document.getElementById('step-number');

// Select controls
const controlLeft = document.getElementById('control-left');
const controlRight = document.getElementById('control-right');

// View positions
const siteWidth = Math.ceil(
  document.documentElement.scrollWidth - window.innerWidth
);
// const viewPositions = [0, 1340, 2300, 3760, 5220, 6600, 8100, 10160, 11660, 0];
const viewPositions = [
  0,
  1340,
  2300,
  3760,
  5220,
  6600,
  8100,
  10160,
  10161,
  siteWidth,
];

// Timeline navigation
timeline.forEach((item, index) => {
  item.addEventListener('click', () =>
    window.scrollTo(viewPositions[index], 0)
  );
});

controlRight.addEventListener('click', () =>
  window.scrollTo(viewPositions[1], 0)
);

// Show slides and timeline position
window.addEventListener('scroll', function () {
  timeline.forEach((element) => {
    element.classList.remove('selected');
  });
  slides.forEach((element) => {
    element.classList.remove('in-view');
  });

  viewPositions.forEach((position, index) => {
    if (position === window.scrollX) {
      timeline[index].classList.add('selected');
      slides[index].classList.add('in-view');
      // console.log(window.scrollX);
    }
  });

  // Steps legend and controls
  switch (window.scrollX) {
    case viewPositions[0]:
      stepsLegend.classList.add('hidden');
      controlLeft.classList.add('hidden');
      controlRight.addEventListener('click', () =>
        window.scrollTo(viewPositions[1], 0)
      );
      break;
    case viewPositions[1]:
      stepsLegend.classList.remove('hidden');
      stepNumber.innerHTML = '1';

      controlLeft.classList.remove('hidden');
      controlRight.classList.remove('hidden');
      controlLeft.addEventListener('click', () =>
        window.scrollTo(viewPositions[0], 0)
      );
      controlRight.addEventListener('click', () =>
        window.scrollTo(viewPositions[2], 0)
      );
      break;

    case viewPositions[2]:
      stepsLegend.classList.remove('hidden');
      stepNumber.innerHTML = '2';

      controlLeft.classList.remove('hidden');
      controlRight.classList.remove('hidden');
      controlLeft.addEventListener('click', () =>
        window.scrollTo(viewPositions[1], 0)
      );
      controlRight.addEventListener('click', () =>
        window.scrollTo(viewPositions[3], 0)
      );
      break;

    case viewPositions[3]:
      stepsLegend.classList.remove('hidden');
      stepNumber.innerHTML = '3';

      controlLeft.classList.remove('hidden');
      controlRight.classList.remove('hidden');
      controlLeft.addEventListener('click', () =>
        window.scrollTo(viewPositions[2], 0)
      );
      controlRight.addEventListener('click', () =>
        window.scrollTo(viewPositions[4], 0)
      );
      break;

    case viewPositions[4]:
      stepsLegend.classList.remove('hidden');
      stepNumber.innerHTML = '4';
      controlLeft.classList.remove('hidden');

      controlRight.classList.remove('hidden');
      controlLeft.addEventListener('click', () =>
        window.scrollTo(viewPositions[3], 0)
      );
      controlRight.addEventListener('click', () =>
        window.scrollTo(viewPositions[5], 0)
      );
      break;

    case viewPositions[5]:
      stepsLegend.classList.remove('hidden');
      stepNumber.innerHTML = '5';

      controlLeft.classList.remove('hidden');
      controlRight.classList.remove('hidden');
      controlLeft.addEventListener('click', () =>
        window.scrollTo(viewPositions[4], 0)
      );
      controlRight.addEventListener('click', () =>
        window.scrollTo(viewPositions[6], 0)
      );
      break;

    case viewPositions[6]:
      stepsLegend.classList.remove('hidden');
      stepNumber.innerHTML = '6';

      controlLeft.classList.remove('hidden');
      controlRight.classList.remove('hidden');
      controlLeft.addEventListener('click', () =>
        window.scrollTo(viewPositions[5], 0)
      );
      controlRight.addEventListener('click', () =>
        window.scrollTo(viewPositions[7], 0)
      );
      break;

    case viewPositions[7]:
      stepsLegend.classList.remove('hidden');
      stepNumber.innerHTML = '7';

      controlLeft.classList.remove('hidden');
      controlRight.classList.remove('hidden');
      controlLeft.addEventListener('click', () =>
        window.scrollTo(viewPositions[6], 0)
      );
      controlRight.addEventListener('click', () =>
        window.scrollTo(viewPositions[8], 0)
      );
      break;

    case viewPositions[8]:
      stepsLegend.classList.remove('hidden');
      stepNumber.innerHTML = '8';

      controlLeft.classList.remove('hidden');
      controlRight.classList.remove('hidden');
      controlLeft.addEventListener('click', () =>
        window.scrollTo(viewPositions[7], 0)
      );
      controlRight.addEventListener('click', () =>
        window.scrollTo(viewPositions[9], 0)
      );
      break;

    case viewPositions[9]:
      stepsLegend.classList.add('hidden');

      controlRight.classList.add('hidden');
      controlLeft.classList.remove('hidden');
      controlLeft.addEventListener('click', () =>
        window.scrollTo(viewPositions[8], 0)
      );
      controlRight.addEventListener('click', () =>
        window.scrollTo(viewPositions[1], 0)
      );
      break;
  }
});
