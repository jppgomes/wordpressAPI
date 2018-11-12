import { AnuncioModuleModule } from './anuncio-module.module';

describe('AnuncioModuleModule', () => {
  let anuncioModuleModule: AnuncioModuleModule;

  beforeEach(() => {
    anuncioModuleModule = new AnuncioModuleModule();
  });

  it('should create an instance', () => {
    expect(anuncioModuleModule).toBeTruthy();
  });
});
