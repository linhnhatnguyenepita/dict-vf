import { existsSync, readFileSync } from "node:fs";
import assert from "node:assert/strict";

const read = (path) => {
  assert.equal(existsSync(path), true, `${path} should exist`);
  return readFileSync(path, "utf8");
};

const home = read("app/page.tsx");
const layout = read("app/layout.tsx");
const support = read("app/support/page.tsx");
const privacy = read("app/privacy/page.tsx");
const combined = [home, layout, support, privacy].join("\n");

assert.match(layout, /FV Dict - Offline French-Vietnamese Dictionary/);
assert.match(layout, /A calm offline French-Vietnamese dictionary/);
assert.match(home, /A calm French-Vietnamese dictionary/);
assert.match(home, /offline by design/i);
assert.match(home, /search both ways/i);
assert.match(home, /private by default/i);
assert.match(home, /source-aware entries/i);
assert.match(home, /Coming soon to the App Store/);
assert.match(support, /Need help with FV Dict/);
assert.match(support, /SUPPORT_EMAIL/);
assert.match(privacy, /does not require an account/);
assert.match(privacy, /does not track users/);
assert.match(privacy, /Favorites and recent searches are stored locally/);
assert.doesNotMatch(combined, /apps\.apple\.com/);
assert.doesNotMatch(combined, /AI-powered|flashcards|quizzes|streaks|cloud sync/i);

console.log("FV Dict landing content checks passed.");
