import React from "react";
import { useRouter } from "next/router";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const ButtonBack = () => {
  const router = useRouter();
  return (
    <ButtonBase
      disableRipple
      style={{
        display: "flex",
        alignItems: "center",
      }}
      onClick={() => router.back()}
    >
      <ArrowBackIcon style={{ color: "#fff" }} />{" "}
      <Typography variant="h6" style={{ color: "#fff" }}>
        Back
      </Typography>
    </ButtonBase>
  );
};

export default ButtonBack;
