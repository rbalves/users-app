import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useEffect, useState } from "react";
import { states as allStates } from "./States.data";
import { SeeAllLink } from "./States.styles";

type StatesProps = {
  states: string[];
  setStates: (arg: string[]) => void;
  setPage: (arg: number) => void;
};

export default function StateList({
  states,
  setStates,
  setPage,
}: StatesProps): JSX.Element {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [displayedStates, setDisplayedStates] = useState<string[]>([""]);

  const INITIAL_QUANTITY_DISPLAYED_STATES: number = 5;

  useEffect(() => {
    setDisplayedStates(
      allStates.slice(
        0,
        showAll ? allStates.length : INITIAL_QUANTITY_DISPLAYED_STATES
      )
    );
  }, [showAll]);

  const handleToggle = (value: string) => () => {
    const currentIndex = states.indexOf(value);
    const newstates = [...states];

    if (currentIndex === -1) {
      newstates.push(value);
    } else {
      newstates.splice(currentIndex, 1);
    }
    setPage(1);
    setStates(newstates);
  };

  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {displayedStates.map((value) => {
          const labelId = `checkbox-list-label-${value}`;
          return (
            <ListItem key={value} disablePadding>
              <ListItemButton
                role={undefined}
                onClick={handleToggle(value)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={states.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`${value}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <SeeAllLink
        color="inherit"
        onClick={() => setShowAll((current) => !current)}
      >
        {showAll ? "Ver menos" : "Ver todos"}
      </SeeAllLink>
    </>
  );
}
