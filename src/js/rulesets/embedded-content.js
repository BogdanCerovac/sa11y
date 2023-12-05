import Elements from '../utils/elements';
import * as Utils from '../utils/utils';
import Lang from '../utils/lang';

export default function checkEmbeddedContent(results, option) {
  if (option.embeddedContentAll) {
    // Warning: Audio content.
    if (option.embeddedContentAudio) {
      Elements.Found.Audio.forEach(($el) => {
        const key = Utils.prepareDismissal(`IFRAME${$el.getAttribute('src') !== 'undefined' ? $el.getAttribute('src') : $el.querySelector('[src]').getAttribute('src')}`);
        results.push({
          element: $el,
          type: 'warning',
          content: Lang.sprintf('EMBED_AUDIO'),
          inline: false,
          position: 'beforebegin',
          dismiss: key,
        });
      });
    }

    // Warning: Video content.
    if (option.embeddedContentVideo) {
      Elements.Found.Videos.forEach(($el) => {
        const track = $el.getElementsByTagName('TRACK');
        if ($el.tagName === 'VIDEO' && track.length) {
          // Pass if track element found.
        } else {
          const key = Utils.prepareDismissal(`IFRAME${$el.getAttribute('src') !== 'undefined' ? $el.getAttribute('src') : $el.querySelector('[src]').getAttribute('src')}`);
          results.push({
            element: $el,
            type: 'warning',
            content: Lang.sprintf('EMBED_VIDEO'),
            inline: false,
            position: 'beforebegin',
            dismiss: key,
          });
        }
      });
    }

    // Warning: Data visualizations.
    if (option.embeddedContentDataViz) {
      Elements.Found.Visualizations.forEach(($el) => {
        const key = Utils.prepareDismissal(`IFRAME${$el.getAttribute('src') !== 'undefined' ? $el.getAttribute('src') : $el.querySelector('[src]').getAttribute('src')}`);
        results.push({
          element: $el,
          type: 'warning',
          content: Lang.sprintf('EMBED_DATA_VIZ'),
          inline: false,
          position: 'beforebegin',
          dismiss: key,
        });
      });
    }

    // Error: iFrame is missing accessible name.
    if (option.embeddedContentTitles) {
      Elements.Found.Iframes.forEach(($el) => {
        if ($el.tagName === 'VIDEO'
          || $el.tagName === 'AUDIO'
          || $el.getAttribute('aria-hidden') === 'true'
          || $el.getAttribute('hidden') !== null
          || $el.style.display === 'none'
          || $el.getAttribute('role') === 'presentation') {
          // Ignore if hidden.
        } else if ($el.getAttribute('title') === null || $el.getAttribute('title') === '') {
          if ($el.getAttribute('aria-label') === null || $el.getAttribute('aria-label') === '') {
            if ($el.getAttribute('aria-labelledby') === null) {
              // TO-DO: Make sure red error border takes precedence
              if ($el.classList.contains('sa11y-warning-border')) {
                $el.classList.remove('sa11y-warning-border');
              }
              results.push({
                element: $el,
                type: 'error',
                content: Lang.sprintf('EMBED_MISSING_TITLE'),
                inline: false,
                position: 'beforebegin',
              });
            }
          }
        } else {
          // Nothing
        }
      });
    }

    // Warning: general warning for iFrames
    if (option.embeddedContentGeneral) {
      Elements.Found.EmbeddedContent.forEach(($el) => {
        if ($el.tagName === 'VIDEO'
          || $el.tagName === 'AUDIO'
          || $el.getAttribute('aria-hidden') === 'true'
          || $el.getAttribute('hidden') !== null
          || $el.style.display === 'none'
          || $el.getAttribute('role') === 'presentation'
          || $el.getAttribute('tabindex') === '-1') {
          // Ignore if hidden.
        } else {
          const key = Utils.prepareDismissal(`IFRAME${$el.getAttribute('src') !== 'undefined' ? $el.getAttribute('src') : $el.querySelector('[src]').getAttribute('src')}`);
          results.push({
            element: $el,
            type: 'warning',
            content: Lang.sprintf('EMBED_GENERAL_WARNING'),
            inline: false,
            position: 'beforebegin',
            dismiss: key,
          });
        }
      });
    }
  }
  return results;
}