namespace SyncRoute {
  export type Routes = {
    path: string;
    component: React.LazyExoticComponent;
    children?: Routes[];
  };
}
