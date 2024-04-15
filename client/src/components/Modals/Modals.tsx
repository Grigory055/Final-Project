import { Dialog } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { DialogAntonPhase0, DialogMaksPhase1, DialogStartPhase0, DialogStartPhase1, DialogSvetaPhase0, DialogSvetaPhase1, ExitToMap } from "../Dialogs"
import { switchDialog, switchHeroWalk } from "../../redux/RPGSlice";
import { QuestionsP0W1, QuestionsP0W2, QuestionsP0W3, QuestionsP1W1, QuestionsP1W2, QuestionsP1W3 } from "../Questions";
import DialogStartPhase2 from "../Dialogs/DialogsPhase2/DialogStartPhase2";
import QuestionsP2W1 from "../Questions/QuestionsP2/QuestionsP2W1";
import DialogSvetaPhase2 from "../Dialogs/DialogsPhase2/DialogSvetaPhase2";
import QuestionsP2W2 from "../Questions/QuestionsP2/QuestionsP2W2";
import QuestionsP2W2_1 from "../Questions/QuestionsP2/QuesionsP2W2_1";
import DialogGrishaPhase2 from "../Dialogs/DialogsPhase2/DialogGrishaPhase2";
import DialogStartPhase3 from "../Dialogs/DialogsPhase3/DialogStartPhase3";
import QuestionsP3W1 from "../Questions/QuestionsP3/QuestionsP3W1";
import QuestionsP3W1_1 from "../Questions/QuestionsP3/QuestionsP3W1_1";
import QuestionsP3W1_2 from "../Questions/QuestionsP3/QuestionsP3W1_2";
import DialogDenisPhase3 from "../Dialogs/DialogsPhase3/DialogDenisPhase3";

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
    { id:7, component: <DialogStartPhase1/>},
    { id:8, component: <QuestionsP1W1/>},
    { id:9, component: <QuestionsP1W2/>},
    { id:10, component: <QuestionsP1W3/>},
    { id:11, component: <DialogMaksPhase1/>},
    { id:12, component: <DialogSvetaPhase1/>},
    { id:13, component: <DialogStartPhase2/>},
    { id:14, component: <QuestionsP2W1/>},
    { id:15, component: <DialogSvetaPhase2/>},
    { id:16, component: <QuestionsP2W2/>},
    { id:17, component: <QuestionsP2W2_1/>},
    { id:18, component: <DialogGrishaPhase2/>},
    { id:19, component: <DialogStartPhase3/>},
    { id:20, component: <QuestionsP3W1/>},
    { id:21, component: <QuestionsP3W1_1/>},
    { id:22, component: <QuestionsP3W1_2/>},
    {id:23, component: <DialogDenisPhase3/>}
    // {id:24, component: <DialogSvetaPhase2/>}
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
