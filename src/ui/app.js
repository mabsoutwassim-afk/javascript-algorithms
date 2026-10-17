// src/ui/app.js

import { ALGORITHM_CATEGORIES, ALGORITHMS } from './algorithmsRegistry.js';

let currentCategory = 'All';
let currentAlgorithmId = ALGORITHMS[0].id;
let searchQuery = '';

// DOM Elements
const categoryListEl = document.getElementById('category-list');
const algorithmListEl = document.getElementById('algorithm-list');
const algoCountEl = document.getElementById('algo-count');
const searchInputEl = document.getElementById('algorithm-search');

const detailCategoryEl = document.getElementById('detail-category');
const detailTitleEl = document.getElementById('detail-title');
const detailDescriptionEl = document.getElementById('detail-description');

const presetsContainerEl = document.getElementById('presets-container');
const presetButtonsEl = document.getElementById('preset-buttons');

const algorithmFormEl = document.getElementById('algorithm-form');
const inputsContainerEl = document.getElementById('inputs-container');

const interactionWindowEl = document.getElementById('interaction-window');
const executionTimeEl = document.getElementById('execution-time');
const clearLogBtn = document.getElementById('clear-log-btn');
const copyLogBtn = document.getElementById('copy-log-btn');
const resetInputsBtn = document.getElementById('reset-inputs-btn');

/**
 * Initialize application
 */
function init() {
  renderCategories();
  renderAlgorithmList();
  selectAlgorithm(currentAlgorithmId);

  // Event Listeners
  searchInputEl.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    if (searchQuery !== '') {
      currentCategory = 'All';
      renderCategories();
    }
    renderAlgorithmList();
  });

  algorithmFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    runCurrentAlgorithm();
  });

  resetInputsBtn.addEventListener('click', () => {
    const algo = getSelectedAlgorithm();
    if (algo) {
      renderInputs(algo);
      appendLogSystem(`Inputs reset to default values for ${algo.name}.`);
    }
  });

  clearLogBtn.addEventListener('click', () => {
    interactionWindowEl.innerHTML = '';
    appendLogSystem('Console cleared.');
    executionTimeEl.style.display = 'none';
  });

  copyLogBtn.addEventListener('click', () => {
    const text = interactionWindowEl.innerText;
    navigator.clipboard.writeText(text).then(() => {
      appendLogSystem('Interaction logs copied to clipboard.');
    }).catch((err) => {
      appendLogSystem(`Failed to copy logs: ${err.message}`);
    });
  });
}

/**
 * Get currently selected algorithm object
 */
function getSelectedAlgorithm() {
  return ALGORITHMS.find((a) => a.id === currentAlgorithmId);
}

/**
 * Render Categories List in Sidebar
 */
function renderCategories() {
  categoryListEl.innerHTML = '';

  const categories = ['All', ...ALGORITHM_CATEGORIES];

  categories.forEach((cat) => {
    const li = document.createElement('li');
    li.className = `category-item ${cat === currentCategory ? 'active' : ''}`;

    const count = cat === 'All'
      ? ALGORITHMS.length
      : ALGORITHMS.filter((a) => a.category === cat).length;

    li.innerHTML = `
      <span>${cat}</span>
      <span class="count-badge">${count}</span>
    `;

    li.addEventListener('click', () => {
      currentCategory = cat;
      renderCategories();
      renderAlgorithmList();
    });

    categoryListEl.appendChild(li);
  });
}

/**
 * Render Algorithm List based on Category and Search filter
 */
function renderAlgorithmList() {
  algorithmListEl.innerHTML = '';

  const filtered = ALGORITHMS.filter((algo) => {
    const matchesCategory = currentCategory === 'All' || algo.category === currentCategory;
    const matchesSearch = searchQuery === ''
      || algo.name.toLowerCase().includes(searchQuery)
      || algo.category.toLowerCase().includes(searchQuery)
      || algo.description.toLowerCase().includes(searchQuery);

    return matchesCategory && matchesSearch;
  });

  algoCountEl.textContent = filtered.length;

  if (filtered.length === 0) {
    algorithmListEl.innerHTML = '<li class="algorithm-item" style="color: var(--text-muted);">No algorithms found</li>';
    return;
  }

  filtered.forEach((algo) => {
    const li = document.createElement('li');
    li.className = `algorithm-item ${algo.id === currentAlgorithmId ? 'active' : ''}`;
    li.innerHTML = `
      <span>${algo.name}</span>
      <small style="opacity: 0.7;">${algo.category}</small>
    `;

    li.addEventListener('click', () => {
      selectAlgorithm(algo.id);
    });

    algorithmListEl.appendChild(li);
  });
}

/**
 * Select an algorithm and update UI view
 */
function selectAlgorithm(algoId) {
  currentAlgorithmId = algoId;
  const algo = getSelectedAlgorithm();

  if (!algo) return;

  // Highlight active in list
  renderAlgorithmList();

  // Update Detail Header
  detailCategoryEl.textContent = algo.category;
  detailTitleEl.textContent = algo.name;
  detailDescriptionEl.textContent = algo.description;

  // Render Presets
  renderPresets(algo);

  // Render Input Form
  renderInputs(algo);

  appendLogSystem(`Selected algorithm: ${algo.name} [${algo.category}]`);
}

/**
 * Render preset buttons if present
 */
function renderPresets(algo) {
  presetButtonsEl.innerHTML = '';

  if (algo.presets && algo.presets.length > 0) {
    presetsContainerEl.style.display = 'flex';

    algo.presets.forEach((preset) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'btn-preset';
      btn.textContent = preset.label;

      btn.addEventListener('click', () => {
        Object.keys(preset.values).forEach((inputId) => {
          const input = document.getElementById(`input-${inputId}`);
          if (input) {
            input.value = preset.values[inputId];
          }
        });
        appendLogSystem(`Applied preset: "${preset.label}"`);
      });

      presetButtonsEl.appendChild(btn);
    });
  } else {
    presetsContainerEl.style.display = 'none';
  }
}

/**
 * Dynamically render input fields for selected algorithm
 */
function renderInputs(algo) {
  inputsContainerEl.innerHTML = '';

  if (!algo.inputs || algo.inputs.length === 0) {
    inputsContainerEl.innerHTML = '<p class="description-text">No inputs required for this algorithm.</p>';
    return;
  }

  algo.inputs.forEach((inputDef) => {
    const group = document.createElement('div');
    group.className = 'input-group';

    const label = document.createElement('label');
    label.htmlFor = `input-${inputDef.id}`;
    label.textContent = inputDef.label;

    let field;
    if (inputDef.type === 'number') {
      field = document.createElement('input');
      field.type = 'number';
      field.value = inputDef.default;
    } else {
      field = document.createElement('input');
      field.type = 'text';
      field.value = inputDef.default;
    }

    field.id = `input-${inputDef.id}`;
    field.name = inputDef.id;

    group.appendChild(label);
    group.appendChild(field);
    inputsContainerEl.appendChild(group);
  });
}

/**
 * Run selected algorithm and capture log traces
 */
function runCurrentAlgorithm() {
  const algo = getSelectedAlgorithm();
  if (!algo) return;

  // Collect input values
  const inputValues = {};
  algo.inputs.forEach((inputDef) => {
    const field = document.getElementById(`input-${inputDef.id}`);
    if (field) {
      inputValues[inputDef.id] = field.value;
    }
  });

  // Log header
  appendRunHeader(`Running ${algo.name}`);
  appendLogSystem(`Inputs: ${JSON.stringify(inputValues)}`);

  const startTime = performance.now();

  try {
    const result = algo.run(inputValues, (msg) => {
      appendLogStep(msg);
    });

    const endTime = performance.now();
    const duration = (endTime - startTime).toFixed(2);

    executionTimeEl.textContent = `${duration} ms`;
    executionTimeEl.style.display = 'inline-block';

    const formattedResult = typeof result === 'object'
      ? JSON.stringify(result, null, 2)
      : String(result);

    appendLogResult(`Execution Successful!\nOutput: ${formattedResult}`);
  } catch (error) {
    const endTime = performance.now();
    const duration = (endTime - startTime).toFixed(2);

    executionTimeEl.textContent = `${duration} ms`;
    executionTimeEl.style.display = 'inline-block';

    appendLogError(`Execution Error: ${error.message}`);
  }
}

/**
 * Log Helper Functions
 */
function getTimestamp() {
  const now = new Date();
  return now.toTimeString().split(' ')[0];
}

function appendRunHeader(title) {
  const div = document.createElement('div');
  div.className = 'log-entry log-run-header';
  div.innerHTML = `<span class="log-time">[${getTimestamp()}]</span> ▶ ${title}`;
  interactionWindowEl.appendChild(div);
  scrollToBottom();
}

function appendLogSystem(msg) {
  const div = document.createElement('div');
  div.className = 'log-entry system-msg';
  div.innerHTML = `<span class="log-time">[${getTimestamp()}] [INFO]</span> ${msg}`;
  interactionWindowEl.appendChild(div);
  scrollToBottom();
}

function appendLogStep(msg) {
  const div = document.createElement('div');
  div.className = 'log-entry log-step';
  div.innerHTML = `<span class="log-time">[${getTimestamp()}] [STEP]</span> ${msg}`;
  interactionWindowEl.appendChild(div);
  scrollToBottom();
}

function appendLogResult(msg) {
  const div = document.createElement('div');
  div.className = 'log-entry log-result';
  div.innerHTML = `<span class="log-time">[${getTimestamp()}] [RESULT]</span> ${msg}`;
  interactionWindowEl.appendChild(div);
  scrollToBottom();
}

function appendLogError(msg) {
  const div = document.createElement('div');
  div.className = 'log-entry log-error';
  div.innerHTML = `<span class="log-time">[${getTimestamp()}] [ERROR]</span> ${msg}`;
  interactionWindowEl.appendChild(div);
  scrollToBottom();
}

function scrollToBottom() {
  interactionWindowEl.scrollTop = interactionWindowEl.scrollHeight;
}

// Start app when DOM loaded
document.addEventListener('DOMContentLoaded', init);
