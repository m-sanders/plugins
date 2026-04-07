// https://github.com/swc-project/plugins/issues/607
// keyframes label should be plain name string, not "label:name;" CSS property

import { keyframes } from "@emotion/react";

const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;
