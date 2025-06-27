// SVG 파일을 React 컴포넌트로 import할 때
declare module "*.svg" {
  import React from "react";
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export { ReactComponent };
  const src: string;
  export default src;
}

// 기존 ?react 쿼리 지원 (하위 호환성을 위해 유지)
declare module "*.svg?react" {
  import React from "react";
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export { ReactComponent };
  const src: string;
  export default src;
}

// 일반 SVG import도 지원
declare module "*.svg" {
  const content: string;
  export default content;
} 