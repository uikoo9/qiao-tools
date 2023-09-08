// eslint
import { ESLint } from 'eslint';

// config
import { config as defaultConfig } from './config/eslint-config.js';

/**
 * eslint
 */
export const eslint = async (configPath) => {
  // start
  console.log('qiao-project / eslint / start');

  // config
  const config = getConfig(configPath);
  if (!config) return;

  // cwd
  const cwd = process.cwd();
  console.log('qiao-project / eslint / cwd', cwd);

  // extensions
  const extensions = ['.js', '.ts', '.jsx'];
  console.log('qiao-project / eslint / extensions /', extensions);

  // eslint
  const eslint = new ESLint({
    useEslintrc: false,
    overrideConfig: config,
    extensions: extensions,
    errorOnUnmatchedPattern: false,
    fix: true,
  });

  // files
  const results = await eslint.lintFiles([cwd]);
  const filePaths = results.map((r) => r.filePath);
  console.log('qiao-project / eslint / files');
  console.log(filePaths);

  // res
  const formatter = await eslint.loadFormatter('stylish');
  const resultText = formatter.format(results);

  // end
  console.log('qiao-project / eslint / end');
  if (resultText) console.log(resultText);
};

// get config
function getConfig(configPath) {
  try {
    let eslintConfig;
    if (configPath) {
      eslintConfig = require(configPath);
      console.log('qiao-project / eslint / config /', configPath);
    } else {
      eslintConfig = defaultConfig;
      console.log('qiao-project / eslint / config / default config');
    }

    console.log(eslintConfig);
    return eslintConfig;
  } catch (error) {
    console.log('qiao-project / eslint / config /', error);
  }
}
