export type OpenCloseProps = {
  open: boolean;
  closeDrawer?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  openDrawer?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
