interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <div className="mx-auto w-11/12 max-w-md">{children}</div>;
}
