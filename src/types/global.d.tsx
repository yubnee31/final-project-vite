export type Post = {
  content?: string;
  id?: number;
  photo_url?: string;
  created_at?: string;
  userid?: string;
  isEditing?: boolean;
}

export type Schedule = {
  scheduleId?: number;
  userid?: string;
  artist?: string;
  date?: string;
  place?: string;
  title?: string;
};