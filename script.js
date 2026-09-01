const compactStyles = document.createElement('link');
compactStyles.rel = 'stylesheet';
compactStyles.href = 'compact.css';
document.head.append(compactStyles);
const viewportStyles = document.createElement('link');
viewportStyles.rel = 'stylesheet';
viewportStyles.href = 'viewport.css';
document.head.append(viewportStyles);
const transparentHeaderStyles = document.createElement('link');
transparentHeaderStyles.rel = 'stylesheet';
transparentHeaderStyles.href = 'transparent-header.css';
document.head.append(transparentHeaderStyles);

const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const progress = document.querySelector('.progress span');
const tabs = [...document.querySelectorAll('.tab')];
const panels = [...document.querySelectorAll('.panel')];
const productTitle = document.querySelector('.product-title');
const productEyebrow = productTitle?.querySelector('.eyebrow');
const productHeading = productTitle?.querySelector('h2');
if (productEyebrow && productHeading) {
  productEyebrow.remove();
  productHeading.innerHTML = '<small>Nodeya product ecosystem</small>Connected products for <em>enterprise operations.</em>';
}
const voiceButton = document.createElement('button');
voiceButton.className = 'voice-guide';
voiceButton.type = 'button';
voiceButton.setAttribute('aria-pressed', 'false');
voiceButton.innerHTML = '<span>◉</span> Voice guide: off';
document.body.append(voiceButton);
const voiceNudge = document.createElement('button');
voiceNudge.className = 'voice-nudge';
voiceNudge.type = 'button';
voiceNudge.id = 'voice-nudge';
voiceNudge.innerHTML = '<small>Recommended</small><strong>For a better experience,<br>turn on Voice Guide</strong><span aria-hidden="true">↘</span>';
voiceButton.setAttribute('aria-describedby', 'voice-nudge');
document.body.append(voiceNudge);
voiceNudge.addEventListener('click', () => voiceButton.click());
let voiceEnabled = false;
let lastSpokenSection = 'top';
let currentAudio;
let currentAudioSection;
const audioFiles = {
  top: 'audio/home.mp3', experience: 'audio/experience.mp3', products: 'audio/products.mp3',
  nexone: 'audio/nexone.mp3', nexads: 'audio/nexads.mp3', nexora: 'audio/nexora.mp3',
  platform: 'audio/platform.mp3', capabilities: 'audio/capabilities.mp3', contact: 'audio/contact.mp3'
};

function clearVoiceProgress() {
  panels.forEach((panel) => {
    const fill = panel.querySelector('.panel-progress i');
    if (fill) {
      fill.style.transition = '';
      fill.style.width = '';
    }
  });
}

function speak(section, { progressFill, onEnded } = {}) {
  if (!voiceEnabled || !audioFiles[section]) return;
  if (currentAudioSection === section && currentAudio && !currentAudio.ended) return;
  currentAudio?.pause();
  if (currentAudio) currentAudio.currentTime = 0;
  clearVoiceProgress();
  currentAudioSection = section;
  currentAudio = new Audio(audioFiles[section]);
  currentAudio.volume = 0.9;
  if (progressFill) {
    progressFill.style.transition = 'none';
    progressFill.style.width = '0%';
    const audio = currentAudio;
    const syncProgress = () => {
      if (currentAudio !== audio) return;
      if (Number.isFinite(audio.duration) && audio.duration > 0) {
        progressFill.style.width = `${Math.min(100, (audio.currentTime / audio.duration) * 100)}%`;
      }
      if (!audio.ended && !audio.paused) requestAnimationFrame(syncProgress);
    };
    currentAudio.addEventListener('play', syncProgress);
  }
  currentAudio.addEventListener('ended', () => {
    if (progressFill) progressFill.style.width = '100%';
    currentAudioSection = undefined;
    onEnded?.();
  }, { once: true });
  currentAudio.play().catch(() => {
    currentAudioSection = undefined;
  });
}

function speakProduct(tab) {
  if (!tab || !voiceEnabled) return;
  const index = tabs.indexOf(tab);
  const fill = panels[index]?.querySelector('.panel-progress i');
  lastSpokenSection = tab.dataset.panel;
  speak(tab.dataset.panel, {
    progressFill: fill,
    onEnded: () => {
      if (!voiceEnabled || lastSpokenSection !== tab.dataset.panel) return;
      const next = (index + 1) % tabs.length;
      activate(tabs[next]);
    }
  });
}

function speakProductsOverview() {
  lastSpokenSection = 'products';
  stopRotation();
  clearVoiceProgress();
  speak('products', {
    onEnded: () => {
      if (voiceEnabled && lastSpokenSection === 'products') speakProduct(tabs[activeProduct]);
    }
  });
}

voiceButton.addEventListener('click', () => {
  voiceEnabled = !voiceEnabled;
  voiceButton.setAttribute('aria-pressed', String(voiceEnabled));
  voiceButton.innerHTML = `<span>${voiceEnabled ? '◉' : '○'}</span> Voice guide: ${voiceEnabled ? 'on' : 'off'}`;
  if (voiceEnabled) {
    voiceNudge.classList.add('dismissed');
    voiceNudge.setAttribute('aria-hidden', 'true');
    voiceButton.removeAttribute('aria-describedby');
  }
  if (voiceEnabled) {
    stopRotation();
    const productTab = tabs.find((tab) => tab.dataset.panel === lastSpokenSection);
    if (lastSpokenSection === 'products') speakProductsOverview();
    else if (productTab) speakProduct(productTab);
    else speak(lastSpokenSection);
  } else {
    currentAudio?.pause();
    currentAudioSection = undefined;
    clearVoiceProgress();
    startRotation();
  }
});
panels.forEach((panel) => {
  const bar = document.createElement('div');
  bar.className = 'panel-progress';
  bar.setAttribute('aria-hidden', 'true');
  bar.innerHTML = '<i></i>';
  panel.append(bar);
});

menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menu?.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
}));

function activate(tab) {
  activeProduct = tabs.indexOf(tab);
  lastSpokenSection = tab.dataset.panel;
  tabs.forEach((item) => {
    const selected = item === tab;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
  });
  panels.forEach((panel) => {
    const selected = panel.id === tab.dataset.panel;
    panel.hidden = !selected;
    panel.classList.toggle('active', selected);
  });
  speakProduct(tab);
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activate(tab));
  tab.addEventListener('keydown', (event) => {
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : event.key === 'ArrowRight' ? (index + 1) % tabs.length : (index - 1 + tabs.length) % tabs.length;
    tabs[next].focus();
    activate(tabs[next]);
  });
});

const productExplorer = document.querySelector('.explorer');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let activeProduct = 0;
let rotation;
let rotationGeneration = 0;
const audioDurationCache = new Map();

function getAudioDuration(section) {
  if (audioDurationCache.has(section)) return Promise.resolve(audioDurationCache.get(section));
  return new Promise((resolve) => {
    const audio = new Audio(audioFiles[section]);
    const finish = (duration) => {
      const durationMs = Number.isFinite(duration) && duration > 0 ? duration * 1000 : 6500;
      audioDurationCache.set(section, durationMs);
      resolve(durationMs);
    };
    audio.addEventListener('loadedmetadata', () => finish(audio.duration), { once: true });
    audio.addEventListener('error', () => finish(6.5), { once: true });
    audio.preload = 'metadata';
  });
}

function stopRotation() {
  rotationGeneration += 1;
  clearTimeout(rotation);
  tabs.forEach((tab) => tab.classList.remove('rotating'));
  panels.forEach((panel) => panel.querySelector('.panel-progress')?.classList.remove('running'));
}

async function startRotation() {
  if (voiceEnabled || reduceMotion || tabs.length < 2) return;
  stopRotation();
  const generation = rotationGeneration;
  const section = tabs[activeProduct].dataset.panel;
  const durationMs = await getAudioDuration(section);
  if (generation !== rotationGeneration || voiceEnabled) return;
  const activeBar = panels[activeProduct]?.querySelector('.panel-progress');
  const fill = activeBar?.querySelector('i');
  activeBar?.classList.remove('running');
  if (fill) {
    fill.style.transition = 'none';
    fill.style.width = '0%';
  }
  void activeBar?.offsetWidth;
  tabs[activeProduct]?.classList.add('rotating');
  activeBar?.classList.add('running');
  if (fill) {
    fill.style.transition = `width ${durationMs}ms linear`;
    fill.style.width = '100%';
  }
  rotation = window.setTimeout(() => {
    activeProduct = (activeProduct + 1) % tabs.length;
    activate(tabs[activeProduct]);
    startRotation();
  }, durationMs);
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    activeProduct = index;
    if (!voiceEnabled) startRotation();
  });
  tab.addEventListener('focus', () => {
    clearTimeout(rotation);
    rotationGeneration += 1;
    tab.classList.remove('rotating');
    panels[index]?.querySelector('.panel-progress')?.classList.remove('running');
  });
});

productExplorer?.addEventListener('mouseenter', () => {
  stopRotation();
});
productExplorer?.addEventListener('mouseleave', startRotation);
productExplorer?.addEventListener('focusin', stopRotation);
productExplorer?.addEventListener('focusout', () => {
  window.setTimeout(() => {
    if (!productExplorer.contains(document.activeElement)) startRotation();
  }, 0);
});

startRotation();

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) entry.target.classList.add('visible');
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
const sectionObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting && entry.intersectionRatio > 0.45) {
    lastSpokenSection = entry.target.id;
    if (lastSpokenSection === 'products') speakProductsOverview();
    else speak(lastSpokenSection);
  }
}), { threshold: [0.45, 0.7] });
document.querySelectorAll('main > section[id]').forEach((section) => sectionObserver.observe(section));

function updateProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
}
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();
document.querySelector('#year').textContent = new Date().getFullYear();
