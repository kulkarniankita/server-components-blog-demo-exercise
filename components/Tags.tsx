export const Tag = ({
  children,
  twClass,
}: {
  children: React.ReactNode;
  twClass?: string;
}) => {
  return (
    <p className={`m-1`}>
      <span
        className={`uppercase text-xs lg:text-sm font-semibold px-2 py-1 text-gray-900 rounded-sm w-1/3 ${twClass}`}
      >
        {children}
      </span>
    </p>
  );
};
