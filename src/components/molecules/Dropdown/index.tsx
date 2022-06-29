import { Box, Typography } from "@mui/material";
import DropDownArrow from "../../../images/dropdownarrow.svg";
import Account from "../../../images/account.svg";
import  Icons  from "../../atoms/Icon";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  main: {
    display: 'flex', 
    flexDirection: 'row', 
    gap: '1px 1px'
  },
  typography: {
    alignSelf: "center",
    fontFamily: "Cera Pro",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#03314B",
  },
  dropdownarrow: {
    width: 10.61,
    height: 6.48,
    alignSelf: 'center',
    marginLeft: 6.7
  }
})

export interface DropdownProps {
    title?: string,
    style?: React.CSSProperties;
    className?: string;
    onClick?: () => void;
}

export const Dropdown = (props: DropdownProps) => {
  let styles = useStyles()
  let {title, style, className, onClick} = props
  return (
    <>
      <Box className={`${styles.main} ${className}`}>
        {title === 'Account' ? (
          <Icons source={Account} style={style} />
        ) : (
            <Typography variant='body1' className={styles.typography}>
                {title}
            </Typography>
        )}

        <Icons onClick={onClick} style={style} className={styles.dropdownarrow}  source={DropDownArrow} />
      </Box>
    </>
  );
};