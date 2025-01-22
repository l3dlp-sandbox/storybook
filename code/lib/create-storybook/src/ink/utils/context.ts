import { createContext } from 'react';

import type { checkCompatibility } from '../steps/Check';
import type { checkExists, downloadSandbox } from '../steps/ExistsResult';
import type { checkFramework } from '../steps/Framework';
import type { checkGitStatus } from '../steps/Git';
import type { checkVersion } from '../steps/Version';

export const AppContext = createContext({
  fs: undefined as typeof import('fs/promises') | undefined,
  process: undefined as typeof import('process') | undefined,
  child_process: undefined as typeof import('child_process') | undefined,
  require: undefined as NodeRequire | undefined,
  glob: undefined as typeof import('fast-glob') | undefined,
  checkGitStatus: undefined as typeof checkGitStatus | undefined,
  checkCompatibility: undefined as typeof checkCompatibility | undefined,
  checkVersion: undefined as typeof checkVersion | undefined,
  checkFramework: undefined as typeof checkFramework | undefined,
  checkExists: undefined as typeof checkExists | undefined,
  downloadSandbox: undefined as typeof downloadSandbox | undefined,
  telemetry: undefined as typeof import('storybook/internal/telemetry').telemetry | undefined,
});
