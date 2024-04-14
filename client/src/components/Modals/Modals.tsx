import { DialogStartPhase0 } from "../Dialogs"

export default function Modals({ componentID }: {componentID: number}) {

  const modals = [
    {
      id: 1,
      component: <DialogStartPhase0 />
    },
  ]

  const component = modals.find((el) => el.id = componentID);

  return component;
}
