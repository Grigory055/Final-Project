import { Box } from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

export function MainPage() {

  const isLogin = useAppSelector((store) => store.persistedReducer.isLogin);
  const login = useAppSelector((store) => store.persistedReducer.login);
  console.log(isLogin, login);
  

  return (
    <>
      <div id="game-title">
        <img src="/game-title.png" alt="Lord of Elbrus" />
      </div>
      <div id="map-inactive">
        <div id="map">
          <div className="level" id="second-level">
          { isLogin ? (
              <>
                <Box component={ReactRouterLink} to="/phase/3" className="phase active" id="phase-3"></Box>
                <Box component={ReactRouterLink} to="/phase/2" className="phase active" id="phase-2"></Box>
              </>
            ) : (
              <>
                <Box component={ReactRouterLink} to="/char" className="phase active" id="phase-3"></Box>
                <Box component={ReactRouterLink} to="/char" className="phase active" id="phase-2"></Box>
              </>
            ) }
          </div>
          <div className="level" id="first-level">
            { isLogin ? (
              <>
                <Box component={ReactRouterLink} to="/phase/0" className="phase active" id="phase-0"></Box>
                <Box component={ReactRouterLink} to="/phase/1" className="phase active" id="phase-1"></Box>
              </>
            ) : (
              <>
                <Box component={ReactRouterLink} to="/char" className="phase active" id="phase-0"></Box>
                <Box component={ReactRouterLink} to="/char" className="phase active" id="phase-1"></Box>
              </>
            ) }
          </div>
        </div>
      </div>
    </>
  )
}
