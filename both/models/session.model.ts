/**
  SESSION MODEL
**/

export enum SessionStatus {
  active = 0, // Currently Active Session
  completed = 1, // Session was destroyed by tuxlab-app, success
  failed = 2, // Session was destroyed by tuxlab-app, failed
  terminated = 3 // Session was destroyed by tuxlab-daemon
}

export interface Container {
  container_id: string
}

export interface Session {
  _id? : string,
  session_id : string,
  user_id : string,
  lab_id: string,
  status: SessionStatus,
  expires: number,
  current_task : number,
  containers : Container[]
}
