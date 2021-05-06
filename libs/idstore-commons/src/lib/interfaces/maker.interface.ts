export interface IMaker {
  _id:      string;
  name:     string;
  document: string;
  status:   string;
}

export interface IMakerRequest {
  name:  string;
  document: string;
  status: string;
}
