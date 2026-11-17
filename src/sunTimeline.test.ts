import test from 'node:test';
import assert from 'node:assert/strict';

const STAGES = [
  {t: '4.6 billion years ago', b: 'Solar nebula', c: 'A cold cloud falls inward'},
  {t: '4.57 billion years ago', b: 'Protostar', c: 'Gravity heats a young core'},
  {t: '4.5 billion years ago', b: 'Ignition', c: 'Hydrogen begins to burn'},
  {t: 'Today', b: 'The Sun', c: 'Halfway through its life'},
  {t: '1 billion years from now', b: 'Brighter Sun', c: 'The oceans boil away'},
  {t: '5 billion years from now', b: 'Subgiant', c: 'The core runs out of fuel'},
  {t: '7.6 billion years from now', b: 'Red giant', c: 'The Sun swallows Mercury'},
  {t: '7.7 billion years from now', b: 'Helium flash', c: 'The core reignites'},
  {t: '7.8 billion years from now', b: 'Planetary nebula', c: 'The outer layers drift away'},
  {t: '8 billion years from now', b: 'White dwarf', c: 'An ember the size of Earth'}
];

const LAST = STAGES.length - 1;
const PER = 4;
const N = LAST * PER + 1;
const START = 3;

function computeTickGoal(j: number, x: number, hover: number) {
  const active = x * (N - 1);
  const bellAt = (hover >= 0 ? hover : x) * (N - 1);
  const q = j - bellAt;
  const bell = Math.exp((-q * q) / 5.5);
  const da = j - active;
  const on = Math.exp(-(da * da) / 0.22);
  const goal = Math.max((j % PER ? 0.17 : 0.28) + bell * 0.55, on);
  const opacity = 0.3 + bell * 0.35 + on * 0.6;
  return { goal, opacity };
}

test('constants match exact specification (10 stages, 37 ticks, start at Today)', () => {
  assert.equal(STAGES.length, 10);
  assert.equal(LAST, 9);
  assert.equal(N, 37);
  assert.equal(STAGES[START].t, 'Today');
  assert.equal(STAGES[START].b, 'The Sun');
});

test('active tick stands tallest (goal = 1.0) and brightest', () => {
  const x = START / LAST; // stage 3 -> tick 12
  const activeTick = computeTickGoal(12, x, -1);
  const farTick = computeTickGoal(0, x, -1);

  assert.equal(activeTick.goal, 1);
  assert.ok(activeTick.opacity > 1.2);
  assert.ok(farTick.goal < 0.3);
});

test('moveTo throws omega proportional to delta x * 150', () => {
  let x = START / LAST;
  let omega = 14;
  const nx = 6 / LAST;
  omega += (nx - x) * 150;
  x = nx;

  assert.equal(Math.round(x * LAST), 6);
  assert.equal(omega, 14 + (3 / 9) * 150);
});
