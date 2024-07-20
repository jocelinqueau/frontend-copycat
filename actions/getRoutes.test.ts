import { describe, it, expect, vi, afterEach } from 'vitest';
import fs from 'fs';
import path from 'path';
import mock from 'mock-fs';
import getRoutes from './getRoutes';

vi.mock('path');

describe('getRoutes', () => {
  afterEach(() => {
    mock.restore();
  });

  it('should return index page', () => {
    mock({
      'app': {
        'page.tsx': '',
        'subdir': {}
      }
    });

    const mockPathJoin = vi.fn((...args) => args.join('/'));
    const mockPathRelative = vi.fn((from, to) => to.replace(from, ''));

    vi.spyOn(path, 'join').mockImplementation(mockPathJoin);
    vi.spyOn(path, 'relative').mockImplementation(mockPathRelative);

    const routes = getRoutes();

    expect(routes).toEqual([
      { path: '/', name: '/' },
    ]);
  });

  it.only('should return index page and sub-page', () => {
    //TODO: the action works well but to test i should have nicer mock so let finish this later
  });
});
