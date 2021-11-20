import { CommonProps } from "./common";

type Props = CommonProps & {
  children: any;
};

const CommonWrapper = ({ children, margin, width }: Props) => (
  <div
    style={{
      width: `${width}%`,
      margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
    }}
  >
    {children}
  </div>
);

export default CommonWrapper;
