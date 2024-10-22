import { AddTaskListResponse } from "@/dtos/TaskLists";

import fetchExtended from "./fetchExtended";

export async function addTaskList({
  groupId,
  taskListName,
}: {
  groupId: number;
  taskListName: string;
}): Promise<AddTaskListResponse> {
  const res = await fetchExtended(`/groups/${groupId}/task-lists`, {
    method: "POST",
    body: JSON.stringify({ name: taskListName }),
  });
  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.message);
  }

  return json;
}
