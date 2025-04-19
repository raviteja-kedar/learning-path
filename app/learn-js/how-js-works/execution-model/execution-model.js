// JavaScript Execution Model Visualization

// Global variables
let stepCounter = 0;
const maxSteps = 25;

// Helper functions
function clearContainers() {
  console.log('Clearing containers');
  [
    'call-stack',
    'web-apis',
    'callback-queue',
    'microtask-queue',
    'output',
  ].forEach((id) => {
    const element = document.getElementById(id);
    if (element && element.querySelector('h3')) {
      element.innerHTML = `<h3>${element.querySelector('h3').textContent}</h3>`;
    }
  });
}

function addItem(id, text) {
  const container = document.getElementById(id);
  if (!container) return;

  const el = document.createElement('div');
  el.className = 'item';
  el.textContent = text;
  container.appendChild(el);
}

function removeLastItem(id) {
  const container = document.getElementById(id);
  if (!container || container.children.length <= 1) return;
  container.removeChild(container.lastChild);
}

function updateExplanation(text) {
  const element = document.getElementById('current-explanation');
  if (element) element.textContent = text;
}

function highlightLine(line) {
  const codeDisplay = document.getElementById('code-display');
  if (!codeDisplay) return;

  const lines = codeDisplay.innerHTML.split('\n');
  codeDisplay.innerHTML = lines
    .map((l, i) => (i + 1 === line ? `<span class="highlight">${l}</span>` : l))
    .join('\n');
}

// Step definitions
const steps = {
  1: {
    explanation: 'Starting script execution',
    highlight: 13,
    action: () => addItem('call-stack', 'main()'),
  },
  2: {
    explanation: "console.log('script start')",
    highlight: 13,
    action: () => addItem('output', 'script start'),
  },
  3: {
    explanation: 'Encountered setTimeout, registering with Web API',
    highlight: 15,
    action: () => addItem('web-apis', 'setTimeout(0ms)'),
  },
  4: {
    explanation: 'Calling async1()',
    highlight: 19,
    action: () => addItem('call-stack', 'async1()'),
  },
  5: {
    explanation: "console.log('async1 start')",
    highlight: 2,
    action: () => addItem('output', 'async1 start'),
  },
  6: {
    explanation: 'Calling async2()',
    highlight: 3,
    action: () => addItem('call-stack', 'async2()'),
  },
  7: {
    explanation: "console.log('async2')",
    highlight: 7,
    action: () => addItem('output', 'async2'),
  },
  8: {
    explanation: 'async2() returns a resolved promise',
    highlight: 7,
    action: () => removeLastItem('call-stack'),
  },
  9: {
    explanation: 'await creates a microtask for the rest of async1()',
    highlight: 3,
    action: () => {
      addItem('microtask-queue', 'async1 continuation');
      removeLastItem('call-stack'); // Remove async1 from call stack
    },
  },
  10: {
    explanation: 'Creating a new Promise',
    highlight: 21,
    action: () => addItem('call-stack', 'Promise executor'),
  },
  11: {
    explanation: "console.log('Promise')",
    highlight: 22,
    action: () => addItem('output', 'Promise'),
  },
  12: {
    explanation: 'Promise resolved, .then creates a microtask',
    highlight: 24,
    action: () => {
      addItem('microtask-queue', 'Promise.then callback');
      removeLastItem('call-stack'); // Remove Promise executor
    },
  },
  13: {
    explanation: "console.log('script end')",
    highlight: 27,
    action: () => addItem('output', 'script end'),
  },
  14: {
    explanation: 'Main script execution completed, call stack is empty',
    highlight: 27,
    action: () => removeLastItem('call-stack'), // Remove main
  },
  15: {
    explanation:
      "Event loop checks for microtasks - found 'async1 continuation'",
    highlight: 3,
    action: () => {
      addItem('call-stack', 'async1 continuation');
      removeLastItem('microtask-queue');
    },
  },
  16: {
    explanation: "Executing async1 continuation with console.log('async1 end')",
    highlight: 4,
    action: () => addItem('output', 'async1 end'),
  },
  17: {
    explanation: 'async1 continuation completed',
    highlight: 4,
    action: () => removeLastItem('call-stack'),
  },
  18: {
    explanation:
      "Event loop checks for more microtasks - found 'Promise.then callback'",
    highlight: 24,
    action: () => {
      addItem('call-stack', 'Promise.then callback');
      removeLastItem('microtask-queue');
    },
  },
  19: {
    explanation: "Executing Promise.then with console.log('Promise then')",
    highlight: 24,
    action: () => addItem('output', 'Promise then'),
  },
  20: {
    explanation: 'Promise.then callback completed',
    highlight: 24,
    action: () => removeLastItem('call-stack'),
  },
  21: {
    explanation: 'No more microtasks, checking if setTimeout callback is ready',
    highlight: 16,
    action: () => {
      removeLastItem('web-apis');
      addItem('callback-queue', 'setTimeout callback');
    },
  },
  22: {
    explanation: 'Event loop moves setTimeout callback to call stack',
    highlight: 16,
    action: () => {
      addItem('call-stack', 'setTimeout callback');
      removeLastItem('callback-queue');
    },
  },
  23: {
    explanation: "Executing setTimeout callback with console.log('setTimeout')",
    highlight: 16,
    action: () => addItem('output', 'setTimeout'),
  },
  24: {
    explanation: 'setTimeout callback completed',
    highlight: 16,
    action: () => removeLastItem('call-stack'),
  },
  25: {
    explanation: 'Event loop complete - all tasks processed',
    action: () => {
      /* Nothing to do here */
    },
  },
};

function updateVisualization(step) {
  console.log(`Updating visualization for step ${step}`);
  const stepData = steps[step];
  if (!stepData) return updateExplanation('Visualization complete!');
  updateExplanation(`Step ${step}: ${stepData.explanation}`);
  if (stepData.highlight) highlightLine(stepData.highlight);
  if (stepData.action) stepData.action();
}

// Button control functions
function startVisualization() {
  console.log('Started visualization');
  stepCounter = 1;
  const startBtn = document.getElementById('start-btn');
  const nextBtn = document.getElementById('next-btn');
  const resetBtn = document.getElementById('reset-btn');

  if (startBtn) startBtn.disabled = true;
  if (nextBtn) nextBtn.disabled = false;
  if (resetBtn) resetBtn.disabled = false;

  clearContainers();
  updateVisualization(stepCounter);
}

function nextStep() {
  console.log('Next step');
  stepCounter++;
  const startBtn = document.getElementById('start-btn');
  const nextBtn = document.getElementById('next-btn');
  const resetBtn = document.getElementById('reset-btn');

  if (stepCounter > maxSteps) {
    if (startBtn) startBtn.disabled = true;
    if (nextBtn) nextBtn.disabled = true;
    if (resetBtn) resetBtn.disabled = false;
    updateExplanation('Visualization complete! Reset to start again.');
  } else {
    updateVisualization(stepCounter);
  }
}

function resetVisualization() {
  console.log('Reset visualization');
  stepCounter = 0;
  const startBtn = document.getElementById('start-btn');
  const nextBtn = document.getElementById('next-btn');
  const resetBtn = document.getElementById('reset-btn');

  if (startBtn) startBtn.disabled = false;
  if (nextBtn) nextBtn.disabled = true;
  if (resetBtn) resetBtn.disabled = true;

  updateExplanation('Click Start Visualization to begin');
  clearContainers();

  // Clear any highlighting
  const codeDisplay = document.getElementById('code-display');
  if (codeDisplay) {
    const lines = codeDisplay.innerHTML.split('\n');
    codeDisplay.innerHTML = lines
      .map((line) =>
        line.replace('<span class="highlight">', '').replace('</span>', '')
      )
      .join('\n');
  }
}

// Make functions available in global scope for both direct and layout-loaded cases
(function () {
  console.log('Execution model script loaded and initializing');

  // Expose in global scope
  window.startVisualization = startVisualization;
  window.nextStep = nextStep;
  window.resetVisualization = resetVisualization;

  // Also expose unscoped for layout.html handler
  this.startVisualization = startVisualization;
  this.nextStep = nextStep;
  this.resetVisualization = resetVisualization;

  // Initialize UI
  function initUI() {
    updateExplanation('Click Start Visualization to begin');

    // Make sure buttons are properly set up
    const startBtn = document.getElementById('start-btn');
    const nextBtn = document.getElementById('next-btn');
    const resetBtn = document.getElementById('reset-btn');

    if (startBtn) startBtn.disabled = false;
    if (nextBtn) nextBtn.disabled = true;
    if (resetBtn) resetBtn.disabled = true;
  }

  // Initialize immediately and on DOM ready
  initUI();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initUI);
  }
})();
