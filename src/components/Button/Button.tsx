import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: JSX.Element|string;
}

export default function Button({ children, ...props }: Props) {
  return <button {...props}>{children}</button>;
}
