import { Dialog } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { DialogAntonPhase0, DialogDenisPhase3, DialogGrishaPhase2, DialogMaksPhase1, DialogStartPhase0, DialogStartPhase1, DialogStartPhase2, DialogStartPhase3, DialogSvetaPhase0, DialogSvetaPhase1, DialogSvetaPhase2, ExitToMap } from "../Dialogs"
import { switchDialog, switchHeroWalk } from "../../redux/RPGSlice";
import { QuestionsP0W1, QuestionsP0W2, QuestionsP0W3, QuestionsP1W1, QuestionsP1W2, QuestionsP1W3, QuestionsP2W1, QuestionsP2W2, QuestionsP2W2_1, QuestionsP3W1, QuestionsP3W1_1, QuestionsP3W1_2 } from "../Questions";
import { ChooseCharacter } from "../ChooseCharacter/ChooseCharacter";
import { LoginForm } from "../LoginForm/LoginForm";
import { RegForm } from "../RegForm/RegForm";
import { DialogSvetaPhase3 } from "../Dialogs/DialogsPhase3/DialogSvetaPhase3";

export default function Modals(): JSX.Element {
  const open = useAppSelector((state: { RPGSlice: { dialogIsOpen: boolean } }) => state.RPGSlice.dialogIsOpen);
  const dialogID = useAppSelector((state: { RPGSlice: { dialogID: number } }) => state.RPGSlice.dialogID);
  
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
    { id:7, component: <DialogStartPhase1 /> },
    { id:8, component: <QuestionsP1W1 /> },
    { id:9, component: <QuestionsP1W2 /> },
    { id:10, component: <QuestionsP1W3 /> },
    { id:11, component: <DialogMaksPhase1 /> },
    { id:12, component: <DialogSvetaPhase1 /> },
    { id:13, component: <DialogStartPhase2 /> },
    { id:14, component: <QuestionsP2W1 /> },
    { id:15, component: <DialogSvetaPhase2 /> },
    { id:16, component: <QuestionsP2W2 /> },
    { id:17, component: <QuestionsP2W2_1 /> },
    { id:18, component: <DialogGrishaPhase2 /> },
    { id:19, component: <DialogStartPhase3 /> },
    { id:20, component: <QuestionsP3W1 /> },
    { id:21, component: <QuestionsP3W1_1 /> },
    { id:22, component: <QuestionsP3W1_2 /> },
    { id:23, component: <DialogDenisPhase3 /> },
    { id:24, component: <DialogSvetaPhase3 /> },
    { id:99, component: <ChooseCharacter /> },
    { id:100, component: <LoginForm /> },
    { id:101, component: <RegForm /> },
    // { id:24, component: <DialogSvetaPhase2/> }
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
