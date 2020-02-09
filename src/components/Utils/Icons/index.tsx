import { style } from "typestyle";

const iconStyle = (debugName: string, viewBox: number) =>
  style({
    $debugName: debugName,
    width: viewBox,
    height: viewBox,
    padding: 2
  });

export const IconError: React.FC<{ fill?: string }> = () => {
  return (
    <div className={iconStyle("icon-error", 20)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
      </svg>
    </div>
  );
};

export const IconSuccess: React.FC<{ fill?: string }> = () => {
  return (
    <div className={iconStyle("icon-success", 20)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
      </svg>
    </div>
  );
};

export const IconGreat: React.FC<{ fill?: string; viewBox?: number }> = () => {
  return (
    <div className={iconStyle("icon-great", 20)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z" />
      </svg>
    </div>
  );
};

export const IconWarning: React.FC<{ fill?: string }> = () => {
  return (
    <div className={iconStyle("icon-warning", 20)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
      </svg>
    </div>
  );
};
export const IconWaiting: React.FC<{ fill?: string }> = () => {
  return (
    <div className={iconStyle("icon-waiting", 20)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
      </svg>
    </div>
  );
};
