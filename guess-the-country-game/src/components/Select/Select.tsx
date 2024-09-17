type SelectProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
};

type Option = {
  value: string;
  label: string;
};

export const Select = ({ value, onChange, options }: SelectProps) => {
  return (
    <select
      className="w-full p-2 mb-4 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
