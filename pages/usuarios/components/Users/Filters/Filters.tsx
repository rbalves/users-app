import { Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FiltersBox, OrderByBox, OrderByText } from "./Filters.styles";

type FiltersProps = {
  pageQuantity: number;
  totalItems: number;
  orderBy: string;
  setOrderBy: (arg: string) => void;
  setPage: (arg: number) => void;
};

const Filters = ({
  pageQuantity,
  totalItems,
  orderBy,
  setOrderBy,
  setPage,
}: FiltersProps): JSX.Element => {
  const handleChange = (event: SelectChangeEvent) => {
    setPage(1);
    setOrderBy(event.target.value);
  };

  return (
    <FiltersBox>
      <Typography data-testid="filters__text--quantity-items">
        Exibindo {pageQuantity} de {totalItems} itens
      </Typography>
      <OrderByBox>
        <OrderByText>Ordernar por:</OrderByText>
        <Select
          labelId="filters-select-label"
          id="filters-select"
          value={orderBy}
          onChange={handleChange}
        >
          <MenuItem value="name">Nome</MenuItem>
          <MenuItem value="state">Estado</MenuItem>
        </Select>
      </OrderByBox>
    </FiltersBox>
  );
};

export default Filters;
