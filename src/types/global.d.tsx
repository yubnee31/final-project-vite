export type Post = {
  content?: string;
  id?: string;
  photo_url?: string;
  created_at?: string;
  userid?: string;
  isEditing?: boolean;
};

export type Comment = {
  postid?: string;
  commentid?: string;
  userid?: string;
  comment?: string;
  re_comment?: string;
  isEditing?: boolean;
  created_at?: string;
};

export type Schedule = {
  scheduleId?: number;
  userid?: string;
  artist?: string;
  date?: string;
  place?: string;
  title?: string;
};

export type Alarm = {
  id: string;
  artist: string;
  userid: string;
  created_at: string;
  title: string;
  date: string;
};
