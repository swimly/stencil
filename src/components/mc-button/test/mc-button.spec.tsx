import { newSpecPage } from '@stencil/core/testing';
import { McButton } from '../mc-button';

describe('mc-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [McButton],
      html: `<mc-button></mc-button>`,
    });
    expect(page.root).toEqualHtml(`
      <mc-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mc-button>
    `);
  });
});
