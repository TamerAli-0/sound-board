// ===== AUDIO CONTEXT =====
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;

function getAudioCtx() {
  if (!audioCtx) audioCtx = new AudioCtx();
  return audioCtx;
}

// ===== SOUND PACKS =====
const packs = {
  drums: [
    { label: 'Kick', key: 'Q', color: 'red', type: 'kick' },
    { label: 'Snare', key: 'W', color: 'orange', type: 'snare' },
    { label: 'Hi-Hat', key: 'E', color: 'amber', type: 'hihat' },
    { label: 'Open HH', key: 'R', color: 'yellow', type: 'openhat' },
    { label: 'Clap', key: 'A', color: 'lime', type: 'clap' },
    { label: 'Tom', key: 'S', color: 'green', type: 'tom' },
    { label: 'Rim', key: 'D', color: 'teal', type: 'rim' },
    { label: 'Crash', key: 'F', color: 'cyan', type: 'crash' },
    { label: 'Perc 1', key: 'Z', color: 'blue', type: 'perc1' },
    { label: 'Perc 2', key: 'X', color: 'indigo', type: 'perc2' },
    { label: 'Shaker', key: 'C', color: 'violet', type: 'shaker' },
    { label: 'Cowbell', key: 'V', color: 'purple', type: 'cowbell' },
    { label: 'Ride', key: 'B', color: 'fuchsia', type: 'ride' },
    { label: 'Floor', key: 'N', color: 'pink', type: 'floor' },
    { label: 'Snap', key: 'M', color: 'rose', type: 'snap' },
    { label: 'Sub', key: 'L', color: 'slate', type: 'sub' },
  ],
  synth: [
    { label: 'C4', key: 'Q', color: 'red', note: 261.63 },
    { label: 'D4', key: 'W', color: 'orange', note: 293.66 },
    { label: 'E4', key: 'E', color: 'amber', note: 329.63 },
    { label: 'F4', key: 'R', color: 'yellow', note: 349.23 },
    { label: 'G4', key: 'A', color: 'lime', note: 392.00 },
    { label: 'A4', key: 'S', color: 'green', note: 440.00 },
    { label: 'B4', key: 'D', color: 'teal', note: 493.88 },
    { label: 'C5', key: 'F', color: 'cyan', note: 523.25 },
    { label: 'D5', key: 'Z', color: 'blue', note: 587.33 },
    { label: 'E5', key: 'X', color: 'indigo', note: 659.25 },
    { label: 'F5', key: 'C', color: 'violet', note: 698.46 },
    { label: 'G5', key: 'V', color: 'purple', note: 783.99 },
    { label: 'A5', key: 'B', color: 'fuchsia', note: 880.00 },
    { label: 'B5', key: 'N', color: 'pink', note: 987.77 },
    { label: 'C6', key: 'M', color: 'rose', note: 1046.50 },
    { label: 'D6', key: 'L', color: 'slate', note: 1174.66 },
  ],
  fx: [
    { label: 'Laser', key: 'Q', color: 'violet', type: 'laser' },
    { label: 'Zap', key: 'W', color: 'purple', type: 'zap' },
    { label: 'Blip', key: 'E', color: 'blue', type: 'blip' },
    { label: 'Beep', key: 'R', color: 'cyan', type: 'beep' },
    { label: 'Buzz', key: 'A', color: 'red', type: 'buzz' },
    { label: 'Rise', key: 'S', color: 'orange', type: 'rise' },
    { label: 'Drop', key: 'D', color: 'amber', type: 'drop' },
    { label: 'Wobble', key: 'F', color: 'green', type: 'wobble' },
    { label: 'Ping', key: 'Z', color: 'teal', type: 'ping' },
    { label: 'Pop', key: 'X', color: 'lime', type: 'pop' },
    { label: 'Click', key: 'C', color: 'indigo', type: 'click' },
    { label: 'Noise', key: 'V', color: 'fuchsia', type: 'noise' },
    { label: 'Sweep', key: 'B', color: 'pink', type: 'sweep' },
    { label: 'Alarm', key: 'N', color: 'rose', type: 'alarm' },
    { label: 'Horn', key: 'M', color: 'yellow', type: 'horn' },
    { label: 'Siren', key: 'L', color: 'slate', type: 'siren' },
  ],
  lofi: [
    { label: 'Kick', key: 'Q', color: 'rose', type: 'lkick' },
    { label: 'Snare', key: 'W', color: 'pink', type: 'lsnare' },
    { label: 'Hat', key: 'E', color: 'fuchsia', type: 'lhat' },
    { label: 'Shaker', key: 'R', color: 'purple', type: 'lshaker' },
    { label: 'Bass C', key: 'A', color: 'violet', type: 'lbass', note: 130.81 },
    { label: 'Bass E', key: 'S', color: 'indigo', type: 'lbass', note: 164.81 },
    { label: 'Bass G', key: 'D', color: 'blue', type: 'lbass', note: 196.00 },
    { label: 'Bass A', key: 'F', color: 'cyan', type: 'lbass', note: 220.00 },
    { label: 'Chord C', key: 'Z', color: 'teal', type: 'chord', note: 261.63 },
    { label: 'Chord D', key: 'X', color: 'green', type: 'chord', note: 293.66 },
    { label: 'Chord E', key: 'C', color: 'lime', type: 'chord', note: 329.63 },
    { label: 'Chord F', key: 'V', color: 'yellow', type: 'chord', note: 349.23 },
    { label: 'Vinyl', key: 'B', color: 'amber', type: 'vinyl' },
    { label: 'Tape', key: 'N', color: 'orange', type: 'tape' },
    { label: 'Rain', key: 'M', color: 'red', type: 'rain' },
    { label: 'Hum', key: 'L', color: 'slate', type: 'hum' },
  ]
};

let currentPack = 'drums';
let masterVolume = 0.8;
let bpm = 120;

// ===== SYNTHESIZED SOUNDS =====
function playSound(pad) {
  const ctx = getAudioCtx();
  const vol = ctx.createGain();
  vol.gain.value = masterVolume;
  vol.connect(ctx.destination);

  const now = ctx.currentTime;

  // Synth notes
  if (pad.note && !pad.type) {
    const osc = ctx.createOscillator();
    const env = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = pad.note;
    env.gain.setValueAtTime(0.5, now);
    env.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
    osc.connect(env);
    env.connect(vol);
    osc.start(now);
    osc.stop(now + 0.5);
    return;
  }

  const t = pad.type;

  if (t === 'kick' || t === 'lkick') {
    const osc = ctx.createOscillator();
    const env = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(30, now + 0.15);
    env.gain.setValueAtTime(1, now);
    env.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
    osc.connect(env); env.connect(vol);
    osc.start(now); osc.stop(now + 0.3);
  } else if (t === 'snare' || t === 'lsnare') {
    // Noise
    const buf = ctx.createBuffer(1, ctx.sampleRate * 0.15, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * 0.5;
    const noise = ctx.createBufferSource();
    noise.buffer = buf;
    const nEnv = ctx.createGain();
    nEnv.gain.setValueAtTime(0.8, now);
    nEnv.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
    noise.connect(nEnv); nEnv.connect(vol);
    noise.start(now);
    // Tone
    const osc = ctx.createOscillator();
    const oEnv = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.value = 200;
    oEnv.gain.setValueAtTime(0.7, now);
    oEnv.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    osc.connect(oEnv); oEnv.connect(vol);
    osc.start(now); osc.stop(now + 0.1);
  } else if (t === 'hihat' || t === 'lhat') {
    const buf = ctx.createBuffer(1, ctx.sampleRate * 0.05, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1);
    const noise = ctx.createBufferSource();
    noise.buffer = buf;
    const hp = ctx.createBiquadFilter();
    hp.type = 'highpass'; hp.frequency.value = 8000;
    const env = ctx.createGain();
    env.gain.setValueAtTime(0.5, now);
    env.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
    noise.connect(hp); hp.connect(env); env.connect(vol);
    noise.start(now);
  } else if (t === 'openhat') {
    const buf = ctx.createBuffer(1, ctx.sampleRate * 0.3, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1);
    const noise = ctx.createBufferSource();
    noise.buffer = buf;
    const hp = ctx.createBiquadFilter();
    hp.type = 'highpass'; hp.frequency.value = 6000;
    const env = ctx.createGain();
    env.gain.setValueAtTime(0.4, now);
    env.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
    noise.connect(hp); hp.connect(env); env.connect(vol);
    noise.start(now);
  } else if (t === 'clap') {
    for (let j = 0; j < 3; j++) {
      const buf = ctx.createBuffer(1, ctx.sampleRate * 0.02, ctx.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1);
      const noise = ctx.createBufferSource();
      noise.buffer = buf;
      const env = ctx.createGain();
      env.gain.setValueAtTime(0.6, now + j * 0.015);
      env.gain.exponentialRampToValueAtTime(0.001, now + j * 0.015 + 0.08);
      const bp = ctx.createBiquadFilter();
      bp.type = 'bandpass'; bp.frequency.value = 2000;
      noise.connect(bp); bp.connect(env); env.connect(vol);
      noise.start(now + j * 0.015);
    }
  } else if (t === 'tom' || t === 'floor') {
    const freq = t === 'floor' ? 80 : 120;
    const osc = ctx.createOscillator();
    const env = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq * 1.5, now);
    osc.frequency.exponentialRampToValueAtTime(freq, now + 0.1);
    env.gain.setValueAtTime(0.8, now);
    env.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
    osc.connect(env); env.connect(vol);
    osc.start(now); osc.stop(now + 0.25);
  } else if (t === 'rim') {
    const osc = ctx.createOscillator();
    const env = ctx.createGain();
    osc.type = 'square';
    osc.frequency.value = 800;
    env.gain.setValueAtTime(0.4, now);
    env.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
    osc.connect(env); env.connect(vol);
    osc.start(now); osc.stop(now + 0.03);
  } else if (t === 'crash' || t === 'ride') {
    const dur = t === 'crash' ? 0.8 : 0.4;
    const buf = ctx.createBuffer(1, ctx.sampleRate * dur, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1);
    const noise = ctx.createBufferSource();
    noise.buffer = buf;
    const hp = ctx.createBiquadFilter();
    hp.type = 'highpass'; hp.frequency.value = 4000;
    const env = ctx.createGain();
    env.gain.setValueAtTime(0.35, now);
    env.gain.exponentialRampToValueAtTime(0.001, now + dur);
    noise.connect(hp); hp.connect(env); env.connect(vol);
    noise.start(now);
  } else if (t === 'cowbell') {
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const env = ctx.createGain();
    osc1.type = 'square'; osc1.frequency.value = 800;
    osc2.type = 'square'; osc2.frequency.value = 540;
    env.gain.setValueAtTime(0.5, now);
    env.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
    osc1.connect(env); osc2.connect(env); env.connect(vol);
    osc1.start(now); osc2.start(now);
    osc1.stop(now + 0.15); osc2.stop(now + 0.15);
  } else if (t === 'snap') {
    const buf = ctx.createBuffer(1, ctx.sampleRate * 0.02, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1);
    const noise = ctx.createBufferSource(); noise.buffer = buf;
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 3500;
    const env = ctx.createGain();
    env.gain.setValueAtTime(0.6, now); env.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
    noise.connect(bp); bp.connect(env); env.connect(vol); noise.start(now);
  } else if (t === 'sub') {
    const osc = ctx.createOscillator();
    const env = ctx.createGain();
    osc.type = 'sine'; osc.frequency.value = 50;
    env.gain.setValueAtTime(0.9, now); env.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
    osc.connect(env); env.connect(vol); osc.start(now); osc.stop(now + 0.4);
  } else if (t === 'laser') {
    const osc = ctx.createOscillator(); const env = ctx.createGain();
    osc.type = 'sawtooth'; osc.frequency.setValueAtTime(1500, now); osc.frequency.exponentialRampToValueAtTime(100, now + 0.2);
    env.gain.setValueAtTime(0.4, now); env.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
    osc.connect(env); env.connect(vol); osc.start(now); osc.stop(now + 0.2);
  } else if (t === 'zap') {
    const osc = ctx.createOscillator(); const env = ctx.createGain();
    osc.type = 'square'; osc.frequency.setValueAtTime(2000, now); osc.frequency.exponentialRampToValueAtTime(50, now + 0.1);
    env.gain.setValueAtTime(0.3, now); env.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
    osc.connect(env); env.connect(vol); osc.start(now); osc.stop(now + 0.1);
  } else if (t === 'blip' || t === 'beep' || t === 'ping') {
    const freq = t === 'blip' ? 600 : t === 'beep' ? 880 : 1200;
    const osc = ctx.createOscillator(); const env = ctx.createGain();
    osc.type = 'sine'; osc.frequency.value = freq;
    env.gain.setValueAtTime(0.4, now); env.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
    osc.connect(env); env.connect(vol); osc.start(now); osc.stop(now + 0.15);
  } else if (t === 'buzz') {
    const osc = ctx.createOscillator(); const env = ctx.createGain();
    osc.type = 'sawtooth'; osc.frequency.value = 100;
    env.gain.setValueAtTime(0.3, now); env.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
    osc.connect(env); env.connect(vol); osc.start(now); osc.stop(now + 0.2);
  } else if (t === 'rise') {
    const osc = ctx.createOscillator(); const env = ctx.createGain();
    osc.type = 'sine'; osc.frequency.setValueAtTime(200, now); osc.frequency.exponentialRampToValueAtTime(2000, now + 0.3);
    env.gain.setValueAtTime(0.3, now); env.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
    osc.connect(env); env.connect(vol); osc.start(now); osc.stop(now + 0.3);
  } else if (t === 'drop') {
    const osc = ctx.createOscillator(); const env = ctx.createGain();
    osc.type = 'sine'; osc.frequency.setValueAtTime(1000, now); osc.frequency.exponentialRampToValueAtTime(50, now + 0.4);
    env.gain.setValueAtTime(0.4, now); env.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
    osc.connect(env); env.connect(vol); osc.start(now); osc.stop(now + 0.4);
  } else if (t === 'wobble') {
    const osc = ctx.createOscillator(); const lfo = ctx.createOscillator(); const lfoG = ctx.createGain(); const env = ctx.createGain();
    osc.type = 'sawtooth'; osc.frequency.value = 200;
    lfo.type = 'sine'; lfo.frequency.value = 15; lfoG.gain.value = 100;
    lfo.connect(lfoG); lfoG.connect(osc.frequency);
    env.gain.setValueAtTime(0.3, now); env.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
    osc.connect(env); env.connect(vol); osc.start(now); lfo.start(now); osc.stop(now + 0.4); lfo.stop(now + 0.4);
  } else if (t === 'pop' || t === 'click') {
    const osc = ctx.createOscillator(); const env = ctx.createGain();
    osc.type = 'sine'; osc.frequency.value = t === 'pop' ? 400 : 2500;
    env.gain.setValueAtTime(0.5, now); env.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
    osc.connect(env); env.connect(vol); osc.start(now); osc.stop(now + 0.03);
  } else if (t === 'noise' || t === 'vinyl' || t === 'rain') {
    const dur = t === 'noise' ? 0.2 : 0.5;
    const buf = ctx.createBuffer(1, ctx.sampleRate * dur, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * 0.3;
    const noise = ctx.createBufferSource(); noise.buffer = buf;
    const env = ctx.createGain();
    env.gain.setValueAtTime(0.3, now); env.gain.exponentialRampToValueAtTime(0.001, now + dur);
    noise.connect(env); env.connect(vol); noise.start(now);
  } else if (t === 'sweep' || t === 'siren') {
    const osc = ctx.createOscillator(); const env = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(200, now); osc.frequency.linearRampToValueAtTime(1500, now + 0.25);
    if (t === 'siren') osc.frequency.linearRampToValueAtTime(200, now + 0.5);
    const dur = t === 'siren' ? 0.5 : 0.3;
    env.gain.setValueAtTime(0.3, now); env.gain.exponentialRampToValueAtTime(0.001, now + dur);
    osc.connect(env); env.connect(vol); osc.start(now); osc.stop(now + dur);
  } else if (t === 'alarm' || t === 'horn') {
    const osc = ctx.createOscillator(); const env = ctx.createGain();
    osc.type = t === 'alarm' ? 'square' : 'sawtooth';
    osc.frequency.value = t === 'alarm' ? 800 : 300;
    env.gain.setValueAtTime(0.3, now); env.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
    osc.connect(env); env.connect(vol); osc.start(now); osc.stop(now + 0.3);
  } else if (t === 'lshaker') {
    const buf = ctx.createBuffer(1, ctx.sampleRate * 0.08, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * 0.4;
    const noise = ctx.createBufferSource(); noise.buffer = buf;
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 6000;
    const env = ctx.createGain();
    env.gain.setValueAtTime(0.3, now); env.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    noise.connect(bp); bp.connect(env); env.connect(vol); noise.start(now);
  } else if (t === 'lbass') {
    const osc = ctx.createOscillator(); const env = ctx.createGain();
    osc.type = 'triangle'; osc.frequency.value = pad.note || 130;
    env.gain.setValueAtTime(0.5, now); env.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
    osc.connect(env); env.connect(vol); osc.start(now); osc.stop(now + 0.4);
  } else if (t === 'chord') {
    const base = pad.note || 261;
    [1, 1.25, 1.5].forEach(ratio => {
      const osc = ctx.createOscillator(); const env = ctx.createGain();
      osc.type = 'sine'; osc.frequency.value = base * ratio;
      env.gain.setValueAtTime(0.2, now); env.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
      osc.connect(env); env.connect(vol); osc.start(now); osc.stop(now + 0.6);
    });
  } else if (t === 'tape' || t === 'hum') {
    const osc = ctx.createOscillator(); const env = ctx.createGain();
    osc.type = 'sine'; osc.frequency.value = t === 'tape' ? 60 : 100;
    env.gain.setValueAtTime(0.15, now); env.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
    osc.connect(env); env.connect(vol); osc.start(now); osc.stop(now + 0.5);
  } else {
    // Generic percussive
    const osc = ctx.createOscillator(); const env = ctx.createGain();
    osc.type = 'triangle'; osc.frequency.value = 300;
    env.gain.setValueAtTime(0.4, now); env.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
    osc.connect(env); env.connect(vol); osc.start(now); osc.stop(now + 0.1);
  }
}

// ===== PAD GRID =====
const padGrid = document.getElementById('padGrid');

function renderPads() {
  const packData = packs[currentPack];
  padGrid.innerHTML = packData.map((p, i) => `
    <div class="pad" data-index="${i}" data-color="${p.color}">
      <span class="pad-key">${p.key}</span>
      <span class="pad-label">${p.label}</span>
    </div>
  `).join('');

  padGrid.querySelectorAll('.pad').forEach(el => {
    el.addEventListener('mousedown', () => triggerPad(parseInt(el.dataset.index), el));
    el.addEventListener('touchstart', (e) => { e.preventDefault(); triggerPad(parseInt(el.dataset.index), el); });
  });
}

function triggerPad(index, el) {
  const pad = packs[currentPack][index];
  playSound(pad);

  // Visual
  el.classList.add('active');
  setTimeout(() => el.classList.remove('active'), 150);

  // Ripple
  const ripple = document.createElement('div');
  ripple.className = 'ripple';
  ripple.style.width = ripple.style.height = '40px';
  ripple.style.left = '50%'; ripple.style.top = '50%';
  ripple.style.marginLeft = '-20px'; ripple.style.marginTop = '-20px';
  el.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);

  // Record
  if (isRecording) {
    recordedNotes.push({ index, time: Date.now() - recordStart, pack: currentPack });
  }
}

// ===== KEYBOARD =====
const keyMap = {};
document.addEventListener('keydown', (e) => {
  if (keyMap[e.key.toUpperCase()]) return;
  keyMap[e.key.toUpperCase()] = true;

  const pack = packs[currentPack];
  const idx = pack.findIndex(p => p.key === e.key.toUpperCase());
  if (idx !== -1) {
    const el = padGrid.querySelector(`.pad[data-index="${idx}"]`);
    if (el) triggerPad(idx, el);
  }
});

document.addEventListener('keyup', (e) => {
  keyMap[e.key.toUpperCase()] = false;
});

// ===== PACK SELECTOR =====
document.querySelectorAll('.pack-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.pack-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentPack = btn.dataset.pack;
    renderPads();
    renderSequencer();
  });
});

// ===== BPM =====
document.getElementById('bpmUp').addEventListener('click', () => { bpm = Math.min(300, bpm + 5); document.getElementById('bpmValue').textContent = bpm; });
document.getElementById('bpmDown').addEventListener('click', () => { bpm = Math.max(40, bpm - 5); document.getElementById('bpmValue').textContent = bpm; });

// ===== MASTER VOLUME =====
document.getElementById('masterVol').addEventListener('input', (e) => { masterVolume = e.target.value / 100; });

// ===== SEQUENCER =====
const SEQ_STEPS = 16;
const SEQ_ROWS = 4;
let seqGrid = {};
let seqPlaying = false;
let seqStep = 0;
let seqInterval = null;

function renderSequencer() {
  const seq = document.getElementById('sequencer');
  const pack = packs[currentPack];
  const rows = pack.slice(0, SEQ_ROWS);

  seqGrid = {};
  rows.forEach((_, r) => { seqGrid[r] = new Array(SEQ_STEPS).fill(false); });

  seq.innerHTML = rows.map((p, r) => {
    let html = `<div class="seq-row-label">${p.label}</div>`;
    for (let s = 0; s < SEQ_STEPS; s++) {
      html += `<div class="seq-cell" data-row="${r}" data-step="${s}"></div>`;
    }
    return html;
  }).join('');

  seq.querySelectorAll('.seq-cell').forEach(cell => {
    cell.addEventListener('click', () => {
      const r = parseInt(cell.dataset.row);
      const s = parseInt(cell.dataset.step);
      seqGrid[r][s] = !seqGrid[r][s];
      cell.classList.toggle('on');
    });
  });
}

document.getElementById('seqPlay').addEventListener('click', () => {
  if (seqPlaying) return;
  seqPlaying = true;
  seqStep = 0;
  const stepTime = (60 / bpm / 4) * 1000;

  seqInterval = setInterval(() => {
    // Clear prev beat highlight
    document.querySelectorAll('.seq-cell.beat').forEach(c => c.classList.remove('beat'));

    for (let r = 0; r < SEQ_ROWS; r++) {
      const cell = document.querySelector(`.seq-cell[data-row="${r}"][data-step="${seqStep}"]`);
      if (cell) cell.classList.add('beat');

      if (seqGrid[r] && seqGrid[r][seqStep]) {
        const pad = packs[currentPack][r];
        if (pad) playSound(pad);
      }
    }

    seqStep = (seqStep + 1) % SEQ_STEPS;
  }, stepTime);
});

document.getElementById('seqStop').addEventListener('click', () => {
  seqPlaying = false;
  clearInterval(seqInterval);
  document.querySelectorAll('.seq-cell.beat').forEach(c => c.classList.remove('beat'));
});

document.getElementById('seqClear').addEventListener('click', () => {
  Object.keys(seqGrid).forEach(r => seqGrid[r].fill(false));
  document.querySelectorAll('.seq-cell.on').forEach(c => c.classList.remove('on'));
});

// ===== RECORDING =====
let isRecording = false;
let recordedNotes = [];
let recordStart = 0;

const recordBtn = document.getElementById('recordBtn');
const playRecBtn = document.getElementById('playRecBtn');

recordBtn.addEventListener('click', () => {
  if (isRecording) {
    isRecording = false;
    recordBtn.classList.remove('recording');
    recordBtn.innerHTML = '<i class="fas fa-circle"></i><span>Record</span>';
    playRecBtn.disabled = recordedNotes.length === 0;
  } else {
    isRecording = true;
    recordedNotes = [];
    recordStart = Date.now();
    recordBtn.classList.add('recording');
    recordBtn.innerHTML = '<i class="fas fa-stop"></i><span>Stop</span>';
    playRecBtn.disabled = true;
  }
});

playRecBtn.addEventListener('click', () => {
  if (recordedNotes.length === 0) return;
  recordedNotes.forEach(note => {
    setTimeout(() => {
      const packData = packs[note.pack];
      if (packData && packData[note.index]) {
        playSound(packData[note.index]);
        const el = padGrid.querySelector(`.pad[data-index="${note.index}"]`);
        if (el && currentPack === note.pack) {
          el.classList.add('active');
          setTimeout(() => el.classList.remove('active'), 150);
        }
      }
    }, note.time);
  });
});

// ===== BEAT GENERATOR =====
const beatPatterns = {
  trap: {
    // Kick heavy on 1, ghost kicks, hi-hats rapid fire, snare on 3
    kick:   [1,0,0,0, 0,0,1,0, 1,0,0,0, 0,0,0,0],
    snare:  [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
    hihat:  [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
    openhat:[0,0,0,0, 0,0,0,1, 0,0,0,0, 0,0,0,1],
    variations: [
      { kick: [1,0,0,1, 0,0,1,0, 1,0,0,0, 0,1,0,0] },
      { hihat: [1,0,1,1, 1,0,1,1, 1,0,1,1, 1,0,1,1] },
      { kick: [1,0,0,0, 0,0,1,1, 1,0,0,0, 0,0,1,0] },
    ]
  },
  boombap: {
    kick:   [1,0,0,0, 0,0,0,0, 1,0,1,0, 0,0,0,0],
    snare:  [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
    hihat:  [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
    openhat:[0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,0],
    variations: [
      { kick: [1,0,0,0, 0,0,1,0, 1,0,0,0, 0,0,0,0] },
      { snare: [0,0,0,0, 1,0,0,1, 0,0,0,0, 1,0,0,0] },
    ]
  },
  house: {
    kick:   [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
    snare:  [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
    hihat:  [0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,0],
    openhat:[0,1,0,0, 0,1,0,0, 0,1,0,0, 0,1,0,0],
    variations: [
      { hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0] },
      { kick: [1,0,0,1, 1,0,0,0, 1,0,0,1, 1,0,0,0] },
    ]
  },
  drill: {
    kick:   [1,0,0,1, 0,0,1,0, 0,1,0,0, 1,0,0,0],
    snare:  [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,1],
    hihat:  [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
    openhat:[0,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,1,0],
    variations: [
      { kick: [1,0,1,0, 0,0,1,0, 1,0,0,1, 0,0,1,0] },
      { hihat: [1,0,1,1, 0,1,1,1, 1,0,1,1, 0,1,1,1] },
      { snare: [0,0,0,0, 1,0,0,0, 0,0,1,0, 1,0,0,0] },
    ]
  },
  lofi: {
    kick:   [1,0,0,0, 0,0,0,1, 1,0,0,0, 0,0,0,0],
    snare:  [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
    hihat:  [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
    openhat:[0,0,0,0, 0,0,0,0, 0,1,0,0, 0,0,0,0],
    variations: [
      { kick: [1,0,0,0, 0,0,1,0, 1,0,0,0, 0,1,0,0] },
      { hihat: [1,0,0,1, 1,0,0,1, 1,0,0,1, 1,0,0,1] },
    ]
  }
};

let genInterval = null;
let genStep = 0;
let genPattern = null;

document.getElementById('generateBtn').addEventListener('click', () => {
  const style = document.getElementById('genStyle').value;
  const base = beatPatterns[style];

  // Pick random variations and merge
  genPattern = {
    kick: [...base.kick],
    snare: [...base.snare],
    hihat: [...base.hihat],
    openhat: [...base.openhat],
  };

  // Apply a random variation
  if (base.variations && base.variations.length > 0) {
    const variation = base.variations[Math.floor(Math.random() * base.variations.length)];
    Object.assign(genPattern, variation);
  }

  // Add random ghost notes for flavor
  for (let i = 0; i < 16; i++) {
    if (Math.random() < 0.15 && genPattern.kick[i] === 0) genPattern.kick[i] = 1;
    if (Math.random() < 0.1 && genPattern.hihat[i] === 0) genPattern.hihat[i] = 1;
  }

  // Also load into the sequencer visual
  const rows = ['kick', 'snare', 'hihat', 'openhat'];
  rows.forEach((name, r) => {
    if (!seqGrid[r]) seqGrid[r] = new Array(SEQ_STEPS).fill(false);
    for (let s = 0; s < SEQ_STEPS; s++) {
      seqGrid[r][s] = genPattern[name][s] === 1;
      const cell = document.querySelector(`.seq-cell[data-row="${r}"][data-step="${s}"]`);
      if (cell) cell.classList.toggle('on', seqGrid[r][s]);
    }
  });

  // Set BPM based on style
  const styleBpms = { trap: 140, boombap: 90, house: 125, drill: 145, lofi: 75 };
  bpm = styleBpms[style] || 120;
  document.getElementById('bpmValue').textContent = bpm;

  // Switch to drums pack
  document.querySelectorAll('.pack-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.pack-btn[data-pack="drums"]').classList.add('active');
  currentPack = 'drums';
  renderPads();
});

document.getElementById('genPlayBtn').addEventListener('click', () => {
  if (!genPattern) return;
  if (genInterval) { clearInterval(genInterval); genInterval = null; }

  genStep = 0;
  const stepTime = (60 / bpm / 4) * 1000;
  const drumPack = packs.drums;

  // Map: 0=kick, 1=snare, 2=hihat, 3=openhat
  const rowMap = { kick: 0, snare: 1, hihat: 2, openhat: 3 };

  genInterval = setInterval(() => {
    document.querySelectorAll('.seq-cell.beat').forEach(c => c.classList.remove('beat'));

    ['kick', 'snare', 'hihat', 'openhat'].forEach(name => {
      const r = rowMap[name];
      const cell = document.querySelector(`.seq-cell[data-row="${r}"][data-step="${genStep}"]`);
      if (cell) cell.classList.add('beat');

      if (genPattern[name][genStep]) {
        const pad = drumPack[r];
        if (pad) {
          playSound(pad);
          // Flash pad visual
          const el = padGrid.querySelector(`.pad[data-index="${r}"]`);
          if (el) {
            el.classList.add('active');
            setTimeout(() => el.classList.remove('active'), 100);
          }
        }
      }
    });

    genStep = (genStep + 1) % 16;
  }, stepTime);
});

document.getElementById('genStopBtn').addEventListener('click', () => {
  if (genInterval) { clearInterval(genInterval); genInterval = null; }
  document.querySelectorAll('.seq-cell.beat').forEach(c => c.classList.remove('beat'));
});

// ===== INIT =====
renderPads();
renderSequencer();
