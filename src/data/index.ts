import { SESSIONS as S1 } from "./sessions_part1";
import { SESSIONS_PART2 as S2 } from "./sessions_part2";
import { SESSIONS_PART3 as S3 } from "./sessions_part3";
import { SESSIONS_PART4 as S4 } from "./sessions_part4";
import { SESSIONS_PART5 as S5 } from "./sessions_part5";
import { SESSIONS_PART6 as S6 } from "./sessions_part6";

import { PARTS_PART1 as P1 } from "./parts_part1";
import { PARTS_PART2 as P2 } from "./parts_part2";

import { ORGS as O } from "./orgs";

export * from "./aggregates";

export const SESSIONS = [
  ...S1,
  ...S2,
  ...S3,
  ...S4,
  ...S5,
  ...S6
];

export const PARTS = [
  ...P1,
  ...P2
];

export const ORGS = O;

export const THEMES = [...new Set(SESSIONS.map(s => s.af_pillar).filter(Boolean))].sort();
