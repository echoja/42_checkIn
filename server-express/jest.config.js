module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  testPathIgnorePatterns: ["dist", "node_modules"],
  moduleNameMapper: {
    // "^image![a-zA-Z0-9$_-]+$": "GlobalImageStub",
    // "^[./a-zA-Z0-9$_-]+\\.png$": "<rootDir>/RelativeImageStub.js",
    "^@/(.*)": ["<rootDir>/src/$1", "<rootDir>/src/$1.d"],
    "^@test/(.*)": ["<rootDir>/test/$1", "<rootDir>/test/$1.d",]
    // "assets/(.*)": [
    //   "<rootDir>/images/$1",
    //   "<rootDir>/photos/$1",
    //   "<rootDir>/recipes/$1",
    // ],
  },
};
