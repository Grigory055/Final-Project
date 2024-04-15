import { Dialog } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { DialogAntonPhase0, DialogStartPhase0, DialogSvetaPhase0, ExitToMap } from "../Dialogs"
import { switchDialog, switchHeroWalk } from "../../redux/RPGSlice";
import { QuestionsP0W1, QuestionsP0W2, QuestionsP0W3 } from "../Questions";

export default function Modals(): JSX.Element {
  const open = useAppSelector((state: { RPGSlice: { dialogIsOpen: boolean } }) => state.RPGSlice.dialogIsOpen);
  const dialogID = useAppSelector((state: { RPGSlice: { dialogID: number } }) => state.RPGSlice.dialogID);
  console.log(dialogID);
  
  const dispatch = useAppDispatch();

  const handleCloseClick = () => {
    dispatch(switchHeroWalk(true));
    dispatch(switchDialog(false));
  }

  const modals = [
    { id: 1, component: <DialogSvetaPhase0 /> },
    { id: 2, component: <DialogStartPhase0 /> },
    { id: 3, component: <QuestionsP0W1 /> },
    { id: 4, component: <QuestionsP0W2 /> },
    { id: 5, component: <QuestionsP0W3 /> },
    { id: 6, component: <DialogAntonPhase0 /> },
  ]

  const component = modals.find((el) => el.id === dialogID)?.component;

  return (
    <Dialog open={open} maxWidth={false}>
      <div id="modal">
        <div id="modal-header" className="section">
          <div className="left"></div>
          <div className="center"></div>
          <div className="right"></div>
        </div>
        <div id="modal-content" className="section">
          <div className="left"></div>
          <div className="center">
            <div className="controls">
              <button onClick={() => handleCloseClick()} className="close" />
            </div>
            {component ? component : <ExitToMap />}
          </div>
          <div className="right"></div>
        </div>
        <div id="modal-footer" className="section">
          <div className="left"></div>
          <div className="center"></div>
          <div className="right"></div>
        </div>
      </div>
    </Dialog>
  );
}
