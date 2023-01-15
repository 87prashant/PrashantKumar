/**
 * 1. Account Status: {@link AccountStatus}
 * 2. Response Status: {@link ResponseStatus}
 * 3. Data operation: {@link DataOperation}
 * 4. Categories List: {@link CategoriesList}
 * 5. Emotions List: {@link EmotionsList}
 * 6. Emotions Colors: {@link EmotionsColor}
 * 7. Error Messages: {@link Errors}
 * 8. Option selected by user during registering on frontend {@link UserChoiceList}
 * 9. Misc: {@link Misc}
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

const CategoriesList = {
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
  CATEGORY_REQUIRED: "At least select one category",
  EMOTION_REQUIRED: "At least select one emotion",
  DESCRIPTION_REQUIRED: "Description can not be empty",
};

const Misc = {
  GITHUB_LINK: "https://github.com/87prashant/MindChart",
};

const UserChoiceList = {
  LOGIN: "Login",
  REGISTER: "Register",
  FORGET_PASSWORD: "Forget_Password",
};

export {
  AccountStatus,
  ResponseStatus,
  DataOperation,
  CategoriesList,
  EmotionsList,
  EmotionsColor,
  Errors,
  UserChoiceList,
  Misc,
};
