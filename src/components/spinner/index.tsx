import RingLoader from "react-spinners/RingLoader";

interface SpinnerProps {
  color?: string;
  size?: string;
}

const Spinner = ({ color = "#79E0EE", size = "100" }: SpinnerProps) => {
  return (
    <RingLoader
      color={color}
      loading
      size={size}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};
export default Spinner;
