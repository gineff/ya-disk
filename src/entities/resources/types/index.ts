export type Resource = {
  antivirus_status: object;
  resource_id: string;
  share: {
    is_root: boolean;
    is_owned: boolean;
    rights: string;
  };
  file: string;
  size: number;
  photoslice_time: string;
  _embedded: {
    sort: string;
    items: Resource[];
    limit: number;
    offset: number;
    path: string;
    total: number;
  };
  exif: {
    date_time: string;
    gps_longitude: object;
    gps_latitude: object;
  };
  custom_properties: object;
  media_type: string;
  preview: string;
  type: 'dir' | 'file';
  mime_type: string;
  revision: 0;
  public_url: string;
  path: string;
  md5: string;
  public_key: string;
  sha256: string;
  name: string;
  created: string;
  sizes: [
    {
      url: string;
      name: string;
    },
  ];
  modified: string;
  comment_ids: {
    private_resource: string;
    public_resource: string;
  };
};

export type ResourcesRequest = Resource;

//Аргументы для запроса поиска репозиториев
export type ResourcesQueryArgs = {
  path: string;
  fields?: string;
  limit?: number;
  offset?: number;
  sort?: string;
};

export type DeleteResourceArgs = {
  path: string; 
}

export type MoveResourceArgs = {
  from: string; 
  to: string;   
}
