import React, { useEffect, useRef } from 'react';

interface StageItem {
  t: string;
  b: string;
  c: string;
}

interface LookItem {
  c0: [number, number, number];
  c1: [number, number, number];
  c2: [number, number, number];
  glow: [number, number, number];
  gI: number;
  freq: number;
  warp: number;
  cells: number;
  gas: number;
  shell: number;
  boil: number;
}

export const STAGES: StageItem[] = [
  { t: '4.6 billion years ago', b: 'Solar nebula', c: 'A cold cloud falls inward' },
  { t: '4.57 billion years ago', b: 'Protostar', c: 'Gravity heats a young core' },
  { t: '4.5 billion years ago', b: 'Ignition', c: 'Hydrogen begins to burn' },
  { t: 'Today', b: 'The Sun', c: 'Halfway through its life' },
  { t: '1 billion years from now', b: 'Brighter Sun', c: 'The oceans boil away' },
  { t: '5 billion years from now', b: 'Subgiant', c: 'The core runs out of fuel' },
  { t: '7.6 billion years from now', b: 'Red giant', c: 'The Sun swallows Mercury' },
  { t: '7.7 billion years from now', b: 'Helium flash', c: 'The core reignites' },
  { t: '7.8 billion years from now', b: 'Planetary nebula', c: 'The outer layers drift away' },
  { t: '8 billion years from now', b: 'White dwarf', c: 'An ember the size of Earth' },
];

export const LOOK: LookItem[] = [
  { c0: [0.05, 0.01, 0.1], c1: [0.62, 0.12, 0.42], c2: [1.9, 0.85, 0.5], glow: [0.8, 0.25, 0.6], gI: 0.22, freq: 2.6, warp: 1.9, cells: 0, gas: 1, shell: 0, boil: 1 },
  { c0: [0.015, 0.004, 0], c1: [0.62, 0.05, 0.01], c2: [3, 1.1, 0.15], glow: [1.3, 0.2, 0.04], gI: 0.28, freq: 3.1, warp: 1.2, cells: 1, gas: 0, shell: 0, boil: 0.7 },
  { c0: [0.5, 0.05, 0], c1: [1.7, 0.48, 0.03], c2: [3.2, 2, 0.55], glow: [1.6, 0.5, 0.06], gI: 0.85, freq: 4.6, warp: 1.6, cells: 0.3, gas: 0, shell: 0, boil: 1.5 },
  { c0: [1, 0.26, 0.01], c1: [2.3, 1, 0.12], c2: [3.6, 2.9, 1.3], glow: [1.8, 0.68, 0.1], gI: 1, freq: 3.4, warp: 1.1, cells: 0, gas: 0, shell: 0, boil: 1.1 },
  { c0: [1.5, 0.72, 0.2], c1: [3, 2.1, 0.8], c2: [4.6, 4.3, 3.4], glow: [1.9, 1.2, 0.5], gI: 1.2, freq: 3.8, warp: 1.1, cells: 0, gas: 0, shell: 0, boil: 1.3 },
  { c0: [0.6, 0.1, 0.005], c1: [1.8, 0.5, 0.03], c2: [3, 1.5, 0.25], glow: [1.7, 0.42, 0.05], gI: 0.9, freq: 3, warp: 1.6, cells: 0.15, gas: 0, shell: 0, boil: 1.2 },
  { c0: [0.22, 0.008, 0.003], c1: [1.25, 0.1, 0.015], c2: [3, 0.95, 0.1], glow: [1.8, 0.16, 0.03], gI: 0.85, freq: 2, warp: 2.1, cells: 0.35, gas: 0, shell: 0, boil: 1.4 },
  { c0: [1.6, 0.8, 0.3], c1: [4, 3, 1.4], c2: [8, 7, 5.5], glow: [2.4, 1.6, 0.8], gI: 1.7, freq: 3.2, warp: 2, cells: 0, gas: 0, shell: 0, boil: 3 },
  { c0: [0.02, 0.09, 0.12], c1: [0.1, 0.7, 0.72], c2: [1.8, 0.42, 0.16], glow: [0.3, 0.7, 0.8], gI: 0.3, freq: 3.4, warp: 1.5, cells: 0, gas: 0.75, shell: 1, boil: 0.9 },
  { c0: [0.8, 1, 1.5], c1: [1.7, 2.1, 3], c2: [3.6, 4.2, 5.4], glow: [0.8, 1.2, 2.1], gI: 0.9, freq: 2.6, warp: 0.8, cells: 0, gas: 0, shell: 0, boil: 0.5 },
];

const LAST = STAGES.length - 1;
const PER = 4;
const N = LAST * PER + 1;
const START = 3;

export const SunTimelineSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const capRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const ticksRef = useRef<HTMLDivElement>(null);
  const e0Ref = useRef<HTMLSpanElement>(null);
  const e1Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const cap = capRef.current;
    const track = trackRef.current;
    const ticksEl = ticksRef.current;
    const e0 = e0Ref.current;
    const e1 = e1Ref.current;

    if (!section || !canvas || !cap || !track || !ticksEl || !e0 || !e1) return;

    // Populate 37 ticks
    ticksEl.innerHTML = '';
    const tickEls: HTMLElement[] = [];
    const tickH = new Float32Array(N);
    for (let j = 0; j < N; j++) {
      const iEl = document.createElement('i');
      ticksEl.appendChild(iEl);
      tickEls.push(iEl);
      tickH[j] = j % PER ? 0.17 : 0.28;
    }

    function setCaption(i: number) {
      if (!cap || !track || !e0 || !e1) return;
      const s = STAGES[i];
      const prevLines = cap.querySelectorAll('.line:not(.off)');
      prevLines.forEach((el) => {
        el.classList.add('off');
        window.setTimeout(() => el.remove(), 240);
      });
      const line = document.createElement('div');
      line.className = 'line off';
      line.innerHTML = `<h1>${s.t}</h1><p><b>${s.b}</b>${s.c}</p>`;
      cap.appendChild(line);
      void line.offsetWidth;
      line.classList.remove('off');
      track.setAttribute('aria-valuenow', String(i));
      track.setAttribute('aria-valuetext', `${s.t} — ${s.b}: ${s.c}`);
      e0.classList.toggle('on', i === 0);
      e1.classList.toggle('on', i === LAST);
    }

    const gl = canvas.getContext('webgl', { antialias: false, alpha: false });
    if (!gl) {
      setCaption(START);
      return;
    }

    const vsSrc = `attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}`;
    const fsSrc = `precision highp float;
  uniform vec2 res;
  uniform float sc, rad, cy, fade, t, evo, rot, blur, starX, freq, warp, cells, gas, shell, gI, flick;
  uniform vec3 c0, c1, c2, glow;
  float h(vec3 p){ p = fract(p*.3183099 + .1); p *= 17.; return fract(p.x*p.y*p.z*(p.x+p.y+p.z)); }
  float n3(vec3 x){ vec3 i = floor(x), f = fract(x); f = f*f*(3.-2.*f);
    return mix(mix(mix(h(i),h(i+vec3(1,0,0)),f.x), mix(h(i+vec3(0,1,0)),h(i+vec3(1,1,0)),f.x), f.y),
               mix(mix(h(i+vec3(0,0,1)),h(i+vec3(1,0,1)),f.x), mix(h(i+vec3(0,1,1)),h(i+vec3(1,1,1)),f.x), f.y), f.z); }
  float fbm(vec3 p){ float a=.5, s=0.; for(int i=0;i<5;i++){ s+=a*n3(p); p=p*2.03+vec3(1.7,9.2,3.1); a*=.5; } return s; }
  vec3 stars(vec2 uv){
    vec2 q = (uv + vec2(starX, 0.))*34., id = floor(q), f = fract(q)-.5;
    float r = fract(sin(dot(id,vec2(127.1,311.7)))*43758.5453);
    vec2 o = vec2(fract(r*17.3),fract(r*91.7))-.5;
    float tw = .55+.45*sin(t*(.7+r*1.8)+r*40.);
    vec2 g = f-o*.7; g.x *= 1./(1.+blur*7.);
    return vec3(smoothstep(.975,1.,r)*smoothstep(.06,.0,length(g))*tw*.55);
  }
  void main(){
    vec2 uv = (gl_FragCoord.xy - .5*res)/res.y, p = (uv - vec2(0., cy))/sc;
    float d = length(p), e = max(d-rad, 0.);
    vec3 col = stars(uv);

    // tight halo that ends completely a short way off the ball, the page stays pure black
    vec2 dir = p/max(d,1e-4);
    float rays = .72 + .56*fbm(vec3(dir*2.4, evo*.5));
    float hal = exp(-e/(rad*.11))*smoothstep(rad*.6, rad*.12, e);
    col += glow*gI*.7*hal*rays*flick;

    // soft pool of light under the ball, standing in for the reference's contact shadow
    float py = (p.y + rad + .065)/.0135, px = p.x/(rad*1.02);
    float pool = max(0., 1.-px*px) * exp(-py*py);
    col += glow*min(gI,1.)*.1*pool*pool;

    if(d < rad + .02){
      float k = min(d/rad, 1.);
      vec3 nrm = vec3(p/rad, sqrt(max(1.-k*k, 0.)));
      float cr = cos(rot), sr = sin(rot);
      vec3 n = vec3(nrm.x*cr + nrm.z*sr, nrm.y, -nrm.x*sr + nrm.z*cr);
      // spinning fast smears the surface along its axis of rotation
      float sq = 1./(1.+blur*3.2);
      vec3 q = vec3(n.x*sq, n.y, n.z*sq);
      float w1 = fbm(q*freq + vec3(0.,0.,evo*.28)), w2 = fbm(q*freq*.9 + 7. - vec3(evo*.22,0.,0.));
      float v = fbm(q*freq*1.7 + warp*2.2*vec3(w1, w2, w1-w2));
      float vein = 1.-abs(2.*fbm(q*freq*1.5 + warp*1.3*vec3(w2, w1, 0.))-1.);
      vein = pow(vein, 9.);
      float s = smoothstep(.24,.76,v);
      s = mix(s, clamp(vein*1.25 + s*.14,0.,1.), cells);
      vec3 c = mix(c0, c1, smoothstep(.0,.55,s));
      c = mix(c, c2, smoothstep(.5,1.,s));
      float mu = nrm.z;
      if(shell > .001){
        // planetary nebula: a hot point, a teal cavity and a filament shell seen through the ball
        vec3 sh = c0 + c1*smoothstep(.95,.3,k)*(.25+v*1.2);
        float fil = smoothstep(.5,.82,k)*smoothstep(1.,.8,k)*pow(v+.32,3.)*3.2;
        sh += c2*fil + vec3(3.5,4.,5.)*exp(-k*k/.012);
        c = mix(c, sh, shell);
      } else {
        c *= mix(mix(.34, .8, gas), 1., pow(mu,.5));
      }
      c += glow*pow(1.-mu,2.6)*.42*min(gI,1.)*(1.-gas);
      float edge = smoothstep(1., .985, k);
      float soft = smoothstep(1., .58, k + (fbm(q*3.4 + evo*.1)-.5)*.62) * smoothstep(1., .9, k);
      float a = mix(edge, soft, gas);
      col = mix(col, c, a);
    }
    col = 1. - exp(-col*1.15);
    gl_FragColor = vec4(pow(col, vec3(.4545))*fade, 1.);
  }`;

    const compileShader = (type: number, src: string) => {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      return sh;
    };

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compileShader(gl.VERTEX_SHADER, vsSrc));
    gl.attachShader(prog, compileShader(gl.FRAGMENT_SHADER, fsSrc));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const aLoc = gl.getAttribLocation(prog, 'a');
    gl.enableVertexAttribArray(aLoc);
    gl.vertexAttribPointer(aLoc, 2, gl.FLOAT, false, 0, 0);

    const uniformNames = [
      'res', 'sc', 'rad', 'cy', 'fade', 't', 'evo', 'rot', 'blur',
      'starX', 'freq', 'warp', 'cells', 'gas', 'shell', 'gI', 'flick',
      'c0', 'c1', 'c2', 'glow',
    ] as const;

    const u: Record<string, WebGLUniformLocation | null> = {};
    uniformNames.forEach((name) => {
      u[name] = gl.getUniformLocation(prog, name);
    });

    gl.uniform1f(u.rad, 0.17);
    gl.uniform1f(u.cy, 0.13);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = section.clientWidth || window.innerWidth;
      const h = section.clientHeight || window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(u.res, canvas.width, canvas.height);
      gl.uniform1f(u.sc, Math.min(1, (w / h) * 1.5));
    };

    window.addEventListener('resize', resize);
    resize();

    const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

    let x = START / LAST;
    let stage = START;
    let omega = 14;
    let rot = 0;
    let evo = 0;
    let starX = 0;
    let lastInput = -1e9;
    let hover = -1;
    let dragX: number | null = null;
    let onTrack = false;

    const cur: LookItem = {
      c0: [...LOOK[START].c0] as [number, number, number],
      c1: [...LOOK[START].c1] as [number, number, number],
      c2: [...LOOK[START].c2] as [number, number, number],
      glow: [...LOOK[START].glow] as [number, number, number],
      gI: LOOK[START].gI,
      freq: LOOK[START].freq,
      warp: LOOK[START].warp,
      cells: LOOK[START].cells,
      gas: LOOK[START].gas,
      shell: LOOK[START].shell,
      boil: LOOK[START].boil,
    };

    setCaption(stage);

    function moveTo(nx: number, now = performance.now()) {
      nx = clamp(nx, 0, 1);
      omega += (nx - x) * 150;
      x = nx;
      lastInput = now;
    }

    function px(e: PointerEvent) {
      const rect = track!.getBoundingClientRect();
      return (e.clientX - rect.left) / rect.width;
    }

    const onTrackWheel = (e: WheelEvent) => {
      e.preventDefault();
      const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      moveTo(x + d * (e.deltaMode === 1 ? 0.012 : 0.00075), performance.now());
    };

    const onTrackPointerMove = (e: PointerEvent) => {
      hover = clamp(px(e), 0, 1);
      if (e.pointerType === 'mouse' && dragX === null) {
        moveTo(hover, performance.now());
      }
    };

    const onTrackPointerLeave = () => {
      hover = -1;
    };

    const onSectionPointerDown = (e: PointerEvent) => {
      dragX = e.clientX;
      onTrack = track.contains(e.target as Node);
      if (onTrack) {
        moveTo(px(e), performance.now());
      }
    };

    const onWindowPointerMove = (e: PointerEvent) => {
      if (dragX === null) return;
      const now = performance.now();
      if (onTrack) {
        moveTo(px(e), now);
      } else {
        const dx = e.clientX - dragX;
        dragX = e.clientX;
        moveTo(x + dx / Math.min(window.innerWidth, 900), now);
      }
    };

    const stopDrag = () => {
      dragX = null;
      onTrack = false;
    };

    const onKeyDown = (e: KeyboardEvent) => {
      // Respond to arrow keys when slider is focused or page is near the top
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
      if (document.activeElement === track || window.scrollY < window.innerHeight * 0.6) {
        if (e.key === 'ArrowRight' || (e.key === 'ArrowDown' && document.activeElement === track)) {
          e.preventDefault();
          moveTo((Math.round(x * LAST) + 1) / LAST, performance.now());
        } else if (e.key === 'ArrowLeft' || (e.key === 'ArrowUp' && document.activeElement === track)) {
          e.preventDefault();
          moveTo((Math.round(x * LAST) - 1) / LAST, performance.now());
        }
      }
    };

    track.addEventListener('wheel', onTrackWheel, { passive: false });
    track.addEventListener('pointermove', onTrackPointerMove);
    track.addEventListener('pointerleave', onTrackPointerLeave);
    section.addEventListener('pointerdown', onSectionPointerDown);
    window.addEventListener('pointermove', onWindowPointerMove);
    window.addEventListener('pointerup', stopDrag);
    window.addEventListener('pointercancel', stopDrag);
    window.addEventListener('keydown', onKeyDown);

    const reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const t0 = performance.now();
    let prev = t0;
    let nextAuto = t0 + 5000;
    let rafId = 0;

    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - prev) / 1000);
      prev = now;
      const f = (r: number) => 1 - Math.exp(-dt * r);
      const time = (now - t0) / 1000;
      const reduced = reducedQuery.matches;

      // 1. Idle autoplay
      if (!reduced && now - lastInput > 5000 && now > nextAuto) {
        const idx = Math.round(x * LAST);
        x = ((idx + 1) % (LAST + 1)) / LAST;
        omega += 9;
        nextAuto = now + 2600;
      }

      // 2. Stage check
      const i = Math.round(x * LAST);
      if (i !== stage) {
        omega += omega >= 0 ? 7 : -7;
        stage = i;
        setCaption(i);
      }

      // 3. Ease look
      const target = LOOK[stage];
      const kLook = f(reduced ? 60 : 13);
      cur.gI += (target.gI - cur.gI) * kLook;
      cur.freq += (target.freq - cur.freq) * kLook;
      cur.warp += (target.warp - cur.warp) * kLook;
      cur.cells += (target.cells - cur.cells) * kLook;
      cur.gas += (target.gas - cur.gas) * kLook;
      cur.shell += (target.shell - cur.shell) * kLook;
      cur.boil += (target.boil - cur.boil) * kLook;
      for (let c = 0; c < 3; c++) {
        cur.c0[c] += (target.c0[c] - cur.c0[c]) * kLook;
        cur.c1[c] += (target.c1[c] - cur.c1[c]) * kLook;
        cur.c2[c] += (target.c2[c] - cur.c2[c]) * kLook;
        cur.glow[c] += (target.glow[c] - cur.glow[c]) * kLook;
      }

      // 4. Dampen omega
      omega *= Math.exp(-dt * 3.6);

      // 5. Spin & blur
      const spin = reduced ? 0 : 0.22 + omega;
      const blur = Math.min(1.4, Math.abs(omega) * 0.1);

      // 6. Advance state
      rot += spin * dt;
      evo += dt * cur.boil * (1 + Math.abs(omega) * 0.1);
      starX += omega * dt * 0.012;

      // 7. Set uniforms
      const flick = 1 + 0.1 * Math.sin(time * 2.1) + 0.06 * Math.sin(time * 5.3);
      const fade = Math.min(1, (now - t0) / 500);
      gl.uniform1f(u.freq, cur.freq);
      gl.uniform1f(u.warp, cur.warp);
      gl.uniform1f(u.cells, cur.cells);
      gl.uniform1f(u.gas, cur.gas);
      gl.uniform1f(u.shell, cur.shell);
      gl.uniform1f(u.gI, cur.gI);
      gl.uniform3fv(u.c0, cur.c0);
      gl.uniform3fv(u.c1, cur.c1);
      gl.uniform3fv(u.c2, cur.c2);
      gl.uniform3fv(u.glow, cur.glow);
      gl.uniform1f(u.t, time);
      gl.uniform1f(u.evo, evo);
      gl.uniform1f(u.rot, rot);
      gl.uniform1f(u.blur, blur);
      gl.uniform1f(u.starX, starX);
      gl.uniform1f(u.flick, flick);
      gl.uniform1f(u.fade, fade);

      // 8. Draw
      gl.drawArrays(gl.TRIANGLES, 0, 3);

      // 9. Update ticks
      const active = x * (N - 1);
      const bellAt = (hover >= 0 ? hover : x) * (N - 1);
      const kTick = f(22);
      for (let j = 0; j < N; j++) {
        const q = j - bellAt;
        const bell = Math.exp((-q * q) / 5.5);
        const da = j - active;
        const on = Math.exp(-(da * da) / 0.22);
        const goal = Math.max((j % PER ? 0.17 : 0.28) + bell * 0.55, on);
        tickH[j] += (goal - tickH[j]) * kTick;
        tickEls[j].style.transform = `scaleY(${tickH[j]})`;
        tickEls[j].style.opacity = String(0.3 + bell * 0.35 + on * 0.6);
      }

      rafId = requestAnimationFrame(frame);
    };

    rafId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      track.removeEventListener('wheel', onTrackWheel);
      track.removeEventListener('pointermove', onTrackPointerMove);
      track.removeEventListener('pointerleave', onTrackPointerLeave);
      section.removeEventListener('pointerdown', onSectionPointerDown);
      window.removeEventListener('pointermove', onWindowPointerMove);
      window.removeEventListener('pointerup', stopDrag);
      window.removeEventListener('pointercancel', stopDrag);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="The Life of the Sun Interactive Timeline"
      className="sun-timeline-stage relative w-full h-[calc(100vh-80px)] min-h-[640px] bg-black text-white overflow-hidden select-none"
    >
      <canvas id="gl" ref={canvasRef} />
      <div className="ui">
        <div className="cap" id="cap" ref={capRef} />
        <div
          id="track"
          ref={trackRef}
          role="slider"
          tabIndex={0}
          aria-label="Time"
          aria-valuemin={0}
          aria-valuemax={9}
        >
          <div id="ticks" ref={ticksRef} />
          <div className="ends">
            <span id="e0" ref={e0Ref}>
              Nebula
            </span>
            <span id="e1" ref={e1Ref}>
              White dwarf
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
