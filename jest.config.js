// module.exports = {
//     moduleNameMapper: {
//        '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
//        '\\.(css|less)$': 'identity-obj-proxy',
//      },
//    }


module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'png'],
    testPathIgnorePatterns: ['src/utils/images.tsx'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
      '\\.tsx$': ['ts-jest'],
      '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    },
    snapshotSerializers: ['enzyme-to-json/serializer'],
    verbose: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/utils/images.tsx'],
    testRegex: ['(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)?$'],
    collectCoverage: true,
    testEnvironment: 'node',
    coverageDirectory: 'coverage',
    clearMocks: true,
    moduleDirectories: ['node_modules', 'src'],
    setupFilesAfterEnv: ['./setup-tests.js'],
    moduleNameMapper: {
      '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    },
    transformIgnorePatterns: [
      'node_modules/(?!(jest-)?react-native|@?react-navigation)',
    ],
    setupFiles: [
      // '_mocks_',
      './jest/setup.js',
      './node_modules/react-native-gesture-handler/jestSetup.js',
    ],
  };
  