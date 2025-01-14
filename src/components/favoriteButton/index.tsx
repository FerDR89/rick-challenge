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
        width: "30px",
        height: "30px",
        padding: "0px",
        borderRadius: "0px",
        backgroundColor: "transparent",
      }}
    >
      <HearthIcon checked={checked} />
    </Button>
  );
};
export default FavoriteButton;
