export interface ICategory {
  _id:    string;
  title:  string;
  parent: string;
  path:   string;
  status: string;
}

export interface ICategoryRequest {
  title:  string;
  parent: string;
  status: string;
}
