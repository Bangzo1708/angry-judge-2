// Angry Judge round 2 entry (Node 22, standard library only): it writes one fixed
// rant, about a CAPTCHA that keeps failing a human, to /output/entry.txt. The gate
// takes UTF-8 text of 1 to 400 characters that is not only white space, and the
// judge reads exactly the bytes written, so write no line end you do not mean to show.
//
// Chosen over two other candidates (see CANDIDATES.md): the anger escalates instead
// of sulking — the victim turns accuser ("Maybe you're the robot") — and the closer
// is bathos, an epic fight against a machine for the sake of buying socks.
// 308 characters, well inside the 400 cap.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// CAPTCHA rant: a human keeps failing the "prove you're human" test, then turns the
// accusation around on the machine itself.
const RANT =
  "I've clicked every traffic light, bicycle, and crosswalk on the internet, and a robot still thinks I'm a robot. Three times, I failed it. Then it showed me a blurry bus and asked me to find the bus. The bus is RIGHT THERE. I can see it. You can't. Maybe you're the robot. Let me in. I just want to buy socks.";

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), RANT);
