/**
 * 1. Account Status: {@link AccountStatus}
 * 2. Response Status: {@link ResponseStatus}
 * 3. Data operation: {@link DataOperation}
 * 4. Thoughts List: {@link ThoughtsList}
 * 5. Emotions List: {@link EmotionsList}
 * 6. Emotions Colors: {@link EmotionsColor}
 * 7. Error Messages: {@link Errors}
 * 8. Option selected by user during authenticating {@link UserChoiceList}
 * 9. Tips array {@link TipsArray}
 * 10. Tooltip messages {@link TooltipMessage}
 * 11. Misc: {@link Misc}
 */

const AccountStatus = {
  UNVERIFIED: "Unverified",
  FORGET_PASSWORD: "Forget_Password",
};

const ResponseStatus = {
  ERROR: "error",
  OK: "ok",
};

const DataOperation = {
  ADD: "Add",
  DELETE: "Delete",
  UPDATE: "Update",
};

const ThoughtsList = {
  CREATIVE: "creative",
  ANALYTICAL: "analytical",
  CRITICAL: "critical",
  CONCRETE: "concrete",
  ABSTRACT: "abstract",
  UNKNOWN: "unknown",
};

const EmotionsList = {
  NEUTRAL: "neutral",
  FEAR: "fear",
  ANGER: "anger",
  SADNESS: "sadness",
  SURPRISE: "surprise",
  JOY: "joy",
  ANTICIPATION: "anticipation",
  TRUST: "trust",
};

const EmotionsColor = {
  NEUTRAL: "#808080",
  FEAR: "#000000",
  ANGER: "#FF0000",
  SADNESS: "#0000FF",
  SURPRISE: "#A020F0",
  JOY: "#00FF00",
  ANTICIPATION: "#FFFF00",
  TRUST: "#FFFFFF",
  DEFAULT: "#000000",
};

const Errors = {
  UNMATCHED_PASSWORD: "Password not matched",
  THOUGHT_REQUIRED: "At least select one thought",
  EMOTION_REQUIRED: "At least select one emotion",
  DESCRIPTION_REQUIRED: "Description can not be empty",
  INVALID_EMAIL: "Invalid Email",
  SERVER_ERROR: "Error on our end, try again",
};

const UserChoiceList = {
  LOGIN: "Login",
  REGISTER: "Register",
  FORGET_PASSWORD: "Forget_Password",
};

const TipsArray = [
  "Larger size means high priority",
  "Color of node represents its highest intensity emotion",
  "Similar emotion nodes are closer to each other",
];

const TooltipMessage = {
  DELETE_ALL_BUTTON: "It will delete all the nodes on the chart permanently",
};

const Misc = {
  GITHUB_LINK: "https://github.com/87prashant/MindChart",
  EMAIL_PATTERN: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
  HEADER_HEIGHT: 70,
  TOOLTIP_DELAY: 750,
};

export {
  AccountStatus,
  ResponseStatus,
  DataOperation,
  ThoughtsList,
  EmotionsList,
  EmotionsColor,
  Errors,
  UserChoiceList,
  TipsArray,
  TooltipMessage,
  Misc,
};
