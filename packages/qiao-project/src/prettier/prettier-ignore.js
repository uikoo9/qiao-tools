// file
import { path, isExists, readFileLineByLine } from 'qiao-file';

/**
 * is ignore
 * @param {*} filepath
 * @param {*} ignores
 * @returns
 */
export const isIgnore = async (filepath, ignores) => {
  // check
  let ignore = false;
  for (let i = 0; i < ignores.length; i++) {
    if (filepath.indexOf(ignores[i]) > -1) {
      ignore = true;
      break;
    }
  }

  return ignore;
};

/**
 * get ignores
 * @returns
 */
export const getIgnores = async () => {
  // cwd
  const cwd = process.cwd();

  // ignore path
  const ignores = [];
  const ignorePath = path.resolve(cwd, './.prettierignore');

  // check
  const ignoreExists = await isExists(ignorePath);
  if (!ignoreExists) return ignores;

  //
  return new Promise((resolve) => {
    readFileLineByLine(
      ignorePath,
      (line) => {
        if (!line.startsWith('#') && line) ignores.push(line);
      },
      () => {
        resolve(ignores);
      },
    );
  });
};
