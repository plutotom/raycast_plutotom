import { Action, Icon } from "@raycast/api";
import CreateTodoForm from "./CreateTodoForm";

function CreateTodoAction(props: { defaultTitle?: string; onCreate: (title: string, password: string) => void }) {
  return (
    <Action.Push
      icon={Icon.Pencil}
      title="Add Password"
      shortcut={{ modifiers: ["cmd"], key: "n" }}
      target={<CreateTodoForm defaultTitle={props.defaultTitle} onCreate={props.onCreate} />}
    />
  );
}

export default CreateTodoAction;
