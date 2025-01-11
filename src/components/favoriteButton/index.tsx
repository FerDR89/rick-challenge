import Button from "../button";
import HearthIcon from "../hearthIcon";

interface FavoriteButtonProps {
  onChecked: (checked: boolean) => void;
  checked: boolean;
}

const FavoriteButton = ({ onChecked, checked }: FavoriteButtonProps) => {
  const onClick = () => {
    onChecked(!checked);
  };

  return (
    <Button
      onClick={onClick}
      style={{
        width: "40px",
        height: "40px",
        padding: "0px",
        border: "none",
        borderRadius: "0px",
        backgroundColor: "transparent",
        cursor: "pointer",
      }}
    >
      <HearthIcon checked={checked} />
    </Button>
  );
};
export default FavoriteButton;
