interface SelectFilterProps<T> {
  options: string[];
  onSelectChange: (value: T) => void;
  value?: string;
}
const SelectFilter = <T,>({
  options,
  onSelectChange,
  value,
}: SelectFilterProps<T>) => {
  const onChange = (e: React.SyntheticEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const select = e.target as HTMLSelectElement;
    if (select.value) {
      onSelectChange(select.value as T);
    }
  };

  return (
    <select onChange={onChange} value={value}>
      {options.map((op, idx) => (
        <option key={op + idx} value={op}>
          {op}
        </option>
      ))}
    </select>
  );
};
export default SelectFilter;
