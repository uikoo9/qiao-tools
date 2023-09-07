// eslint
// import { ESLint } from 'eslint';

// config
import { config } from './config/eslint-config.js';

/**
 * eslint
 */
export const eslint = async (configPath) => {
  // config
  const config = getConfig(configPath);
  if (!config) return;

  // // 1. Create an instance.
  // const eslint = new ESLint();

  // // 2. Lint files.
  // const results = await eslint.lintFiles(['lib/**/*.js']);

  // // 3. Format the results.
  // const formatter = await eslint.loadFormatter('stylish');
  // const resultText = formatter.format(results);

  // // 4. Output it.
  // console.log(resultText);
};

// get config
function getConfig(configPath) {
  try {
    let eslintConfig;
    if (configPath) {
      eslintConfig = require(configPath);
      console.log('qiao-project / eslint / from / ', configPath);
    } else {
      eslintConfig = config;
      console.log('qiao-project / eslint / from / default config');
    }

    console.log('qiao-project / eslint / config / ');
    console.log(eslintConfig);
    return eslintConfig;
  } catch (error) {
    console.log('qiao-project / eslint / error /', error);
  }
}
