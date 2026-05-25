import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  [...block.children].forEach((row) => {
    [...row.children].forEach((div) => {
      if (div.children.length === 1) {
        div.className = 'teaser-picture';
      }
      if (div.children.length > 1) {
        div.className = 'teaser-text';
        div.firstElementChild.className = 'teaser-heading';
        div.querySelector('p').className = 'teaser-description';
      }
    });
  });
}
