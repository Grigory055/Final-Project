import { Box } from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";

export function MainPage() {
  return (
    <>
      <div id="game-title">
        <img src="/game-title.png" alt="Lord of Elbrus" />
      </div>
      <div id="map-inactive">
        <div id="map">
          <div className="level" id="second-level">
            <div className="phase active" id="phase-3"></div>
            <div className="phase active" id="phase-2"></div>
          </div>
          <div className="level" id="first-level">
            <Box component={ReactRouterLink} to="/rpg" className="phase active" id="phase-0"></Box>
            <div className="phase active" id="phase-1"></div>
          </div>
        </div>
      </div>
    </>
  )
}
