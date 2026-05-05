export function Button({ children, variant = 'primary', ...props }: any) {
  const base = "px-4 py-2 text-sm font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900",
    secondary: "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 focus:ring-slate-200",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600",
  };
  return (
    <button className={`${base} ${variants[variant as keyof typeof variants]}`} {...props}>
      {children}
    </button>
  );
}
