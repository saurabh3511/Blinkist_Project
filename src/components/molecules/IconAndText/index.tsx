import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Icon from "../../atoms/IconButton"

export interface IconAndTextProps {
  iconSource: React.ReactNode;
  variant:
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "overline"
    | "inherit";
  title: string;
  className?: string;
  onClick?: () => void;
}

const useStyles = makeStyles({
  main: {
    display: "flex",
    flexDirection: "row",
  },
  typography: {
    alignSelf: "center",
  }
});

export const IconAndText = (props: IconAndTextProps) => {
  let {iconSource, variant, onClick, className, title} = props
  let style = useStyles();
  return (
    <>
      <div className={style.main}>
        <Icon>{iconSource}</Icon>
        <Typography
          variant={variant}
          className={`${style.typography} ${className} `}
          onClick={onClick}
    
        >
          {title}
        </Typography>
      </div>
    </>
  );
};