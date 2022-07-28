namespace AsyncRoute {
  export type Routes = {
    path: string;
    component: React.LazyExoticComponent;
    children?: Routes[];
    index?: boolean;
  };
}
