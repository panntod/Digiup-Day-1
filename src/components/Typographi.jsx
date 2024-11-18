export const H1 = ({ children }) => {
  return <h1 className="text-2xl font-bold text-center mt-4">{children}</h1>;
};

export const H2 = ({ children, className }) => {
  return <h2 className={["text-xl font-bold mt-4", className].join(" ")}>{children}</h2>;
};

export const H3 = ({ children }) => {
  return <h3 className="text-lg font-bold mt-4">{children}</h3>;
};

export const H4 = ({ children }) => {
  return <h4 className="text-base font-bold mt-4">{children}</h4>;
};

export const H5 = ({ children }) => {
  return <h5 className="text-sm font-bold">{children}</h5>;
};
