import en from '../assets/i18n/en.json';

const notTranslated = '__NOT_TRANSLATED__';

describe('i18n assets', () => {
  it('should have valid values', () => {
    expect(JSON.stringify(en).includes(notTranslated)).toBeFalsy();
  });
});
