import { forwardRef, createElement } from 'react';
import PropTypes from 'prop-types';
import defaultAttributes from './defaultAttributes';

export default (iconName, iconNode) => {
  const Component = forwardRef(
      ({ color = 'currentColor', size = 24, strokeWidth = 2, children, ...rest }, ref) =>
          createElement(
              'svg',
              {
                ref,
                ...defaultAttributes,
                width: size,
                height: size,
                stroke: color,
                strokeWidth,
                className: `tabler-icon tabler-icon-${iconName}`,
                ...rest,
              },
              [...iconNode.map(([tag, attrs]) => createElement(tag, attrs)), ...(children || [])],
          ),
  );

  Component.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  Component.displayName = `${iconName}`;

  return Component;
};
