import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => ({
  testEnvironment: 'node',
  roots: ['<rootDir>/test'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
});
