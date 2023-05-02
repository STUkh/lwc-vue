import { onMounted, onUnmounted, inject } from 'c/vueLib';

export const useStyles = function useStyles(styles, parentNode) {
  let styleElement;
  let cssString = '';

  // LWC style type
  if (Array.isArray(styles)) {
    cssString = styles[0]('', '');
  }

  if (typeof styles === 'string') {
    cssString = styles;
  }

  if (!cssString && typeof styles !== 'string') {
    throw Error(`Styles can not be converted to CSS string. Styles type: ${typeof styles}`);
  }

  onMounted(() => {
    const $lwc = inject('$lwc');

    styleElement = document.createElement('style');
    styleElement.textContent = cssString;
    const container = parentNode || $lwc?.template || document.head;
    container.appendChild(styleElement);
  });

  onUnmounted(() => {
    if (styleElement && styleElement.parentNode) {
      styleElement.parentNode.removeChild(styleElement);
    }
  });
}