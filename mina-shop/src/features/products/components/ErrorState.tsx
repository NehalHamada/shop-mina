import { Alert } from "@mui/material";

type ErrorStateProps = {
  message: string;
};

function ErrorState({ message }: ErrorStateProps) {
  return <Alert severity="error">{message}</Alert>;
}

export default ErrorState;
