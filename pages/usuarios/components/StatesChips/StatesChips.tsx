import { Button } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

type StatesChipsProps = {
  states: string[];
  setStates: (arg: string[]) => void;
  setPage: (arg: number) => void;
};

const StatesChips = ({ states, setStates, setPage }: StatesChipsProps) => {
  const hasStates = states.length > 0;

  const removeFilter = (filter: string) => {
    setPage(1);
    setStates(states.filter((state) => state !== filter));
  };

  const removeAllFilters = () => {
    setPage(1);
    setStates([]);
  };

  return (
    <Stack direction="row" spacing={1} style={{ flexWrap: "wrap" }}>
      {states.map((state: string) => {
        return (
          <Chip
            key={state}
            label={state}
            onClick={() => removeFilter(state)}
            onDelete={() => removeFilter(state)}
          />
        );
      })}
      {hasStates && (
        <Button variant="text" onClick={removeAllFilters}>
          Limpar filtros
        </Button>
      )}
    </Stack>
  );
};

export default StatesChips;
