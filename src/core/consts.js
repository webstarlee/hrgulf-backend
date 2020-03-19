export const uploadPath = {
  avatars: "uploads/avatars",
  hire: {
    workplace: {
      letters: "uploads/hire/workplace/letters",
      myCompanyProfiles: "uploads/hire/workplace/my-company-profiles",
    },
  },
  work: {
    cvs: "uploads/work/cvs",
  },
  aboutUs: "uploads/about-us",
};
export const success = "success";
export const error = "error";
export const lang = "lang";
export const defaultPageSize = 10;
export const defaultPageSize2 = 12;
export const defaultLanguage = "en";

export const current = "current";

export const male = "M";
export const female = "F";

export const questionTypes = {
  C: "Checkbox",
  I: "Input",
  R: "Radio",
};

export const prefixCheckbox = "C";
export const prefixInput = "I";
export const prefixRadio = "R";

export const tokenLifetime = 24;
export const tokenStatus = {
  VALID: 1,
  EXPIRED: 2,
  NOT_FOUND: 3,
  ALREADY_USED: 4,
  EMAIL_NOT_FOUND: 5,
};

export const auth = {
  SOCIAL_SIGN_UP_PASSWORD: "",
};

export const social = {
  name: {
    GOOGLE: "Google",
    FACEBOOK: "Facebook",
  }
};

export const accountTypes = {
  HIRE: "HIRE",
  WORK: "WORK",
};


export const avatar = {
  DEFAULT_AVATAR: "images/default-avatar.png",
};

export const resetPasswordUri = "auth/reset-password";

export const eliteResourcesUrl = "https://eliteresources.co";

export default {
  uploadPath,
  success,
  error,
  lang,
  defaultPageSize,
  defaultPageSize2,
  defaultLanguage,
  current,
  male,
  female,
  questionTypes,
  prefixCheckbox,
  prefixInput,
  prefixRadio,
  tokenLifetime,
  tokenStatus,
  auth,
  social,
  accountTypes,
  resetPasswordUri,
  eliteResourcesUrl,
}
